import { module1Lessons } from './module1.js'
import { module2Lessons } from './module2.js'
import { module3Lessons } from './module3.js'
import { module4Lessons } from './module4.js'
import { module5Lessons } from './module5.js'
import { module6Lessons } from './module6.js'
import { module7Lessons } from './module7.js'
import { module8Lessons } from './module8.js'
import { getHindiLessonsModule } from '../hi/loader.js'

export const allLessons = [
  ...module1Lessons,
  ...module2Lessons,
  ...module3Lessons,
  ...module4Lessons,
  ...module5Lessons,
  ...module6Lessons,
  ...module7Lessons,
  ...module8Lessons,
]

export const categories = [
  { id: 'all', labelKey: 'learn.all' },
  { id: 'banking', labelKey: 'home.banking' },
  { id: 'money-market', labelKey: 'home.markets' },
  { id: 'regulators', labelKey: 'home.regulators' },
  { id: 'personal', labelKey: 'home.personal' },
  { id: 'safety', labelKey: 'learn.safety' },
  { id: 'credit', labelKey: 'learn.credit' },
  { id: 'investing', labelKey: 'learn.investing' },
  { id: 'career', labelKey: 'learn.career' },
]

export const modules = [
  { id: 1, title: 'Understanding the Indian Financial System', lessons: module1Lessons },
  { id: 2, title: 'The Money Market', lessons: module2Lessons },
  { id: 3, title: 'Financial Institutions and Regulation', lessons: module3Lessons },
  { id: 4, title: 'Money Basics for Students (Paisa Basics)', lessons: module4Lessons },
  { id: 5, title: 'Digital Payments & Staying Safe', lessons: module5Lessons },
  { id: 6, title: 'Credit, Loans & CIBIL', lessons: module6Lessons },
  { id: 7, title: 'Saving & Investing Basics', lessons: module7Lessons },
  { id: 8, title: 'Income, Tax, Insurance & Your First Job', lessons: module8Lessons },
]

export function getLessonBySlug(slug) {
  return allLessons.find((l) => l.slug === slug)
}

export function getLocalizedLesson(slug, lang = 'en') {
  const lesson = getLessonBySlug(slug)
  if (!lesson || lang === 'en') return lesson
  const hindiModule = getHindiLessonsModule()
  const translated = hindiModule?.hindiLessons[slug]
  if (!translated) return lesson
  return {
    ...lesson,
    ...translated,
    moduleTitle: hindiModule.getHindiModuleTitle(lesson.moduleId) ?? lesson.moduleTitle,
    characteristics: translated.characteristics ?? lesson.characteristics,
    mcqs: lesson.mcqs.map((mcq, index) => ({
      ...mcq,
      ...(translated.mcqs?.[index] ?? {}),
      options: translated.mcqs?.[index]?.options ?? mcq.options,
    })),
  }
}

export function getLocalizedModules(lang = 'en') {
  if (lang === 'en') return modules
  const hindiModule = getHindiLessonsModule()
  return modules.map((module) => ({
    ...module,
    title: hindiModule?.getHindiModuleTitle(module.id) ?? module.title,
    lessons: module.lessons.map((lesson) => getLocalizedLesson(lesson.slug, lang)),
  }))
}

export function getLocalizedLessons(lang = 'en') {
  return allLessons.map((lesson) => getLocalizedLesson(lesson.slug, lang))
}

export function getLessonNeighbors(slug) {
  const index = allLessons.findIndex((l) => l.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? allLessons[index - 1] : null,
    next: index < allLessons.length - 1 ? allLessons[index + 1] : null,
  }
}

export function filterLessons({ search = '', category = 'all', lessons = allLessons }) {
  const q = search.trim().toLowerCase()
  return lessons.filter((lesson) => {
    const matchCategory = category === 'all' || lesson.category === category
    const matchSearch =
      !q ||
      lesson.title.toLowerCase().includes(q) ||
      lesson.moduleTitle.toLowerCase().includes(q) ||
      lesson.definition.toLowerCase().includes(q)
    return matchCategory && matchSearch
  })
}
