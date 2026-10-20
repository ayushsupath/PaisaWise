import { module1HindiLessons } from './module1.hi.js'
import { module2HindiLessons } from './module2.hi.js'
import { module3HindiLessons } from './module3.hi.js'
import { module4HindiLessons } from './module4.hi.js'
import { module5HindiLessons } from './module5.hi.js'
import { module6HindiLessons } from './module6.hi.js'
import { module7HindiLessons } from './module7.hi.js'
import { module8HindiLessons } from './module8.hi.js'

const moduleTitles = {
  1: 'भारत का वित्तीय सिस्टम समझें',
  2: 'मनी मार्केट',
  3: 'वित्तीय संस्थाएँ और रेगुलेशन',
  4: 'छात्रों के लिए पैसों की बुनियाद',
  5: 'डिजिटल पेमेंट और सुरक्षा',
  6: 'क्रेडिट, लोन और CIBIL',
  7: 'बचत और निवेश की बुनियाद',
  8: 'कमाई, टैक्स, इंश्योरेंस और पहली नौकरी',
}

export const hindiLessons = {
  ...module1HindiLessons,
  ...module2HindiLessons,
  ...module3HindiLessons,
  ...module4HindiLessons,
  ...module5HindiLessons,
  ...module6HindiLessons,
  ...module7HindiLessons,
  ...module8HindiLessons,
}

export function getHindiLesson(slug) {
  return hindiLessons[slug]
}

export function getHindiModuleTitle(moduleId) {
  return moduleTitles[moduleId]
}
