let hindiLessonsModule
let hindiLessonsPromise
let hindiQuizModule
let hindiQuizPromise
let hindiLabModule
let hindiLabPromise

export function getHindiLessonsModule() {
  return hindiLessonsModule
}

export function loadHindiLessonsModule() {
  if (hindiLessonsModule) return Promise.resolve(hindiLessonsModule)
  if (!hindiLessonsPromise) {
    hindiLessonsPromise = import('./lessons.hi.js')
      .then((module) => {
        hindiLessonsModule = module
        return module
      })
      .catch((error) => {
        hindiLessonsPromise = undefined
        throw error
      })
  }
  return hindiLessonsPromise
}

export function getHindiQuizQuestion(id) {
  return hindiQuizModule?.getHindiQuizQuestion(id)
}

export function loadHindiQuizModule() {
  if (hindiQuizModule) return Promise.resolve(hindiQuizModule)
  if (!hindiQuizPromise) {
    hindiQuizPromise = import('./quiz.hi.js')
      .then((module) => {
        hindiQuizModule = module
        return module
      })
      .catch((error) => {
        hindiQuizPromise = undefined
        throw error
      })
  }
  return hindiQuizPromise
}

export function getHindiInstrument(id) {
  return hindiLabModule?.getHindiInstrument(id)
}

export function getHindiScenario(id) {
  return hindiLabModule?.getHindiScenario(id)
}

export function loadHindiLabModule() {
  if (hindiLabModule) return Promise.resolve(hindiLabModule)
  if (!hindiLabPromise) {
    hindiLabPromise = import('./lab.hi.js')
      .then((module) => {
        hindiLabModule = module
        return module
      })
      .catch((error) => {
        hindiLabPromise = undefined
        throw error
      })
  }
  return hindiLabPromise
}
