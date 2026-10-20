import { allLessons, modules, getLocalizedLesson } from '../src/data/lessons/index.js'
import { hindiLessons, getHindiLesson } from '../src/data/hi/lessons.hi.js'
import { quizQuestions } from '../src/data/quizQuestions.js'
import { getHindiQuizQuestion } from '../src/data/hi/quiz.hi.js'
import { instruments, scenarios } from '../src/data/marketLab.js'
import { getHindiInstrument, getHindiScenario } from '../src/data/hi/lab.hi.js'
import { loadHindiLessonsModule } from '../src/data/hi/loader.js'

await loadHindiLessonsModule()

const errors = []
const lessonSlugs = new Set()
const quizIds = new Set()
const moduleIds = new Set(modules.map((module) => module.id))
const requiredLessonFields = [
  'title',
  'definition',
  'whyItMatters',
  'characteristics',
  'example',
  'rememberThis',
  'mcqs',
]
const placeholderPattern = /\b(?:todo|lorem ipsum|coming soon|placeholder|sample text|tbd)\b/i
const strictModuleIds = new Set([1, 2, 3, 4, 5, 6, 7, 8])
const quizModuleIds = new Set([4, 5, 6, 7, 8])
const uniqueLessonText = new Set()

function isFilled(value) {
  if (Array.isArray(value)) return value.length > 0 && value.every((item) => isFilled(item))
  if (value && typeof value === 'object') return Object.keys(value).length > 0
  return typeof value === 'string' && value.trim().length > 0
}

function containsPlaceholder(value) {
  if (Array.isArray(value)) return value.some(containsPlaceholder)
  if (typeof value === 'string') return placeholderPattern.test(value)
  if (value && typeof value === 'object') return Object.values(value).some(containsPlaceholder)
  return false
}

function wordCount(text) {
  return text
    .replace(/^\s*\|?[-:| ]+\|?\s*$/gm, '')
    .split(/\s+/)
    .filter((word) => word.replace(/[|*_#]/g, '').length > 0).length
}

function checkUniqueText(value, label, language, field) {
  if (typeof value !== 'string') return
  const normalized = value.trim().replace(/\s+/g, ' ').toLowerCase()
  const key = `${language}:${field}:${normalized}`
  if (uniqueLessonText.has(key)) errors.push(`${label} duplicates another ${language} ${field}`)
  uniqueLessonText.add(key)
}

function checkMcq(mcq, lesson, language, index) {
  const label = `${language} ${lesson.slug} MCQ ${index + 1}`
  if (!mcq || typeof mcq !== 'object') {
    errors.push(`${label} is missing`)
    return
  }
  for (const field of ['question', 'explanation']) {
    if (!isFilled(mcq[field])) errors.push(`${label} has an empty ${field}`)
    if (containsPlaceholder(mcq[field])) errors.push(`${label} has placeholder text in ${field}`)
  }
  if (!Array.isArray(mcq.options) || mcq.options.length !== 4) {
    errors.push(`${label} must have exactly four options`)
  } else {
    mcq.options.forEach((option, optionIndex) => {
      if (!isFilled(option)) errors.push(`${label} option ${optionIndex + 1} is empty`)
      if (containsPlaceholder(option)) errors.push(`${label} option ${optionIndex + 1} has placeholder text`)
    })
  }
  if (!Number.isInteger(mcq.correctIndex) || mcq.correctIndex < 0 || mcq.correctIndex >= (mcq.options?.length ?? 0)) {
    errors.push(`${label} has an invalid answer index`)
  }
}

for (const lesson of allLessons) {
  if (lessonSlugs.has(lesson.slug)) errors.push(`Duplicate lesson slug: ${lesson.slug}`)
  lessonSlugs.add(lesson.slug)
  if (!moduleIds.has(lesson.moduleId)) errors.push(`${lesson.slug} uses missing module ${lesson.moduleId}`)

  if (!strictModuleIds.has(lesson.moduleId)) continue

  const hindi = hindiLessons[lesson.slug]
  if (!hindi || getHindiLesson(lesson.slug) !== hindi) {
    errors.push(`Missing direct Hindi lesson entry: ${lesson.slug}`)
    continue
  }

  for (const field of requiredLessonFields) {
    if (!Object.hasOwn(lesson, field)) errors.push(`${lesson.slug} is missing English field ${field}`)
    if (!Object.hasOwn(hindi, field)) errors.push(`${lesson.slug} is missing Hindi field ${field}`)
    if (!isFilled(lesson[field])) errors.push(`${lesson.slug} has an empty English ${field}`)
    if (!isFilled(hindi[field])) errors.push(`${lesson.slug} has an empty Hindi ${field}`)
    if (containsPlaceholder(lesson[field])) errors.push(`${lesson.slug} English ${field} contains placeholder text`)
    if (containsPlaceholder(hindi[field])) errors.push(`${lesson.slug} Hindi ${field} contains placeholder text`)
    if (['definition', 'whyItMatters', 'example', 'rememberThis'].includes(field)) {
      checkUniqueText(lesson[field], lesson.slug, 'English', field)
      checkUniqueText(hindi[field], lesson.slug, 'Hindi', field)
    }
  }

  const localized = getLocalizedLesson(lesson.slug, 'hi')
  if (!localized) errors.push(`${lesson.slug} could not be localized`)
  if (!Array.isArray(lesson.characteristics) || lesson.characteristics.length < 5 || lesson.characteristics.length > 7) {
    errors.push(`${lesson.slug} must have 5–7 English points`)
  }
  if (!Array.isArray(hindi.characteristics) || hindi.characteristics.length < 5 || hindi.characteristics.length > 7) {
    errors.push(`${lesson.slug} must have 5–7 Hindi points`)
  }
  if (lesson.characteristics?.length !== hindi.characteristics?.length) {
    errors.push(`${lesson.slug} English and Hindi point counts differ`)
  }

  for (const [language, example] of [['English', lesson.example], ['Hindi', hindi.example]]) {
    const count = isFilled(example) ? wordCount(example) : 0
    if (count < 80 || count > 130) errors.push(`${lesson.slug} ${language} example has ${count} words; expected 80–130`)
  }

  if (!Array.isArray(lesson.mcqs) || lesson.mcqs.length !== 3) {
    errors.push(`${lesson.slug} must have exactly three English MCQs`)
  }
  if (!Array.isArray(hindi.mcqs) || hindi.mcqs.length !== 3) {
    errors.push(`${lesson.slug} must have exactly three Hindi MCQs`)
  }
  if (Array.isArray(lesson.mcqs) && Array.isArray(hindi.mcqs)) {
    if (lesson.mcqs.length !== hindi.mcqs.length) errors.push(`${lesson.slug} English and Hindi MCQ counts differ`)
    for (let index = 0; index < Math.max(lesson.mcqs.length, hindi.mcqs.length); index += 1) {
      const englishMcq = lesson.mcqs[index]
      const hindiMcq = hindi.mcqs[index]
      checkMcq(englishMcq, lesson, 'English', index)
      checkMcq(hindiMcq, lesson, 'Hindi', index)
      if (!englishMcq || !hindiMcq) continue
      if (englishMcq.options?.length !== hindiMcq.options?.length) {
        errors.push(`${lesson.slug} MCQ ${index + 1} English/Hindi option counts differ`)
      }
      if (englishMcq.correctIndex !== hindiMcq.correctIndex) {
        errors.push(`${lesson.slug} MCQ ${index + 1} English/Hindi answer indexes differ`)
      }
    }
    if (new Set(lesson.mcqs.map((mcq) => mcq.correctIndex)).size < 2) {
      errors.push(`${lesson.slug} MCQ answer positions are not varied`)
    }
  }
}

const lessonAnswerPositionCounts = [0, 0, 0, 0]
let lessonMcqCount = 0
for (const lesson of allLessons) {
  for (const mcq of lesson.mcqs ?? []) {
    lessonMcqCount += 1
    if (Number.isInteger(mcq.correctIndex) && mcq.correctIndex >= 0 && mcq.correctIndex < lessonAnswerPositionCounts.length) {
      lessonAnswerPositionCounts[mcq.correctIndex] += 1
    }
  }
}
for (const [correctIndex, count] of lessonAnswerPositionCounts.entries()) {
  if (lessonMcqCount > 0 && count / lessonMcqCount > 0.4) {
    errors.push(`Lesson MCQ correctIndex ${correctIndex} appears in ${(count / lessonMcqCount * 100).toFixed(1)}% of questions; maximum is 40%`)
  }
}

const expectedLessonCounts = new Map([[1, 5], [2, 9], [3, 6], [4, 4], [5, 6], [6, 4], [7, 5], [8, 5]])
for (const [moduleId, expectedCount] of expectedLessonCounts) {
  const actualCount = modules.find((module) => module.id === moduleId)?.lessons.length ?? 0
  if (actualCount !== expectedCount) {
    errors.push(`Module ${moduleId} has ${actualCount} lessons; expected ${expectedCount}`)
  }
}

const quizCountsByModule = new Map([...quizModuleIds].map((moduleId) => [moduleId, 0]))
const quizAnswerPositionsByModule = new Map([...quizModuleIds].map((moduleId) => [moduleId, new Set()]))
for (const question of quizQuestions) {
  if (quizIds.has(question.id)) errors.push(`Duplicate quiz question id: ${question.id}`)
  quizIds.add(question.id)
  const hindi = getHindiQuizQuestion(question.id)
  if (!hindi) {
    errors.push(`Missing Hindi quiz question: ${question.id}`)
  } else {
    for (const field of ['question', 'explanation']) {
      if (!isFilled(hindi[field])) errors.push(`Hindi quiz question ${question.id} has an empty ${field}`)
      if (containsPlaceholder(hindi[field])) errors.push(`Hindi quiz question ${question.id} has placeholder text`)
    }
    if (!Array.isArray(hindi.options) || hindi.options.length !== question.options?.length) {
      errors.push(`Hindi quiz options mismatch: ${question.id}`)
    }
    if (!Number.isInteger(question.correctIndex) || question.correctIndex < 0 || question.correctIndex >= question.options.length) {
      errors.push(`Invalid quiz answer index: ${question.id}`)
    }
  }
  checkMcq(question, { slug: `quiz ${question.id}` }, 'English', 0)

  if (quizModuleIds.has(question.module)) {
    quizCountsByModule.set(question.module, quizCountsByModule.get(question.module) + 1)
    quizAnswerPositionsByModule.get(question.module).add(question.correctIndex)
    if (!isFilled(question.topic)) errors.push(`Quiz question ${question.id} has no topic`)
  }
}

for (const [moduleId, count] of quizCountsByModule) {
  if (count < 6) errors.push(`Module ${moduleId} has ${count} new quiz questions; expected at least 6`)
  if (quizAnswerPositionsByModule.get(moduleId).size < 2) {
    errors.push(`Module ${moduleId} new quiz answers do not vary their correct option positions`)
  }
}

for (const instrument of instruments) {
  if (!getHindiInstrument(instrument.id)) errors.push(`Missing Hindi instrument: ${instrument.id}`)
}
for (const scenario of scenarios) {
  const hindi = getHindiScenario(scenario.id)
  if (!hindi || hindi.options.length !== scenario.options.length || scenario.correctIndex < 0 || scenario.correctIndex >= hindi.options.length) {
    errors.push(`Hindi scenario options/answer index mismatch: ${scenario.id}`)
  }
}

for (const module of modules) {
  const relevant = module.lessons.filter((lesson) => strictModuleIds.has(lesson.moduleId))
  if (relevant.length) {
    console.log(`Module ${module.id}: ${relevant.length} lessons`)
  }
}
console.log(`New quiz questions by module: ${[...quizCountsByModule].map(([id, count]) => `${id}: ${count}`).join(', ')}`)

if (errors.length) {
  console.error(`Content check failed (${errors.length} issue${errors.length === 1 ? '' : 's'}):\n- ${errors.join('\n- ')}`)
  process.exitCode = 1
} else {
  console.log(`Content check passed: ${allLessons.length} lessons across ${modules.length} modules; ${quizQuestions.length} quiz questions.`)
}
