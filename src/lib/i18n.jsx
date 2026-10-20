import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ui as english } from '../i18n/ui.en.js'
import { ui as hindi } from '../i18n/ui.hi.js'
import { loadHindiLessonsModule } from '../data/hi/loader.js'

const LanguageContext = createContext(null)
const dictionaries = { en: english, hi: hindi }

function readLanguage() {
  try {
    const saved = localStorage.getItem('paisawise-language')
    return saved === 'hi' ? 'hi' : 'en'
  } catch (error) {
    console.warn('Could not read saved language preference.', error)
    return 'en'
  }
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(readLanguage)
  const [hindiLoaded, setHindiLoaded] = useState(false)

  useEffect(() => {
    document.documentElement.lang = lang
    const localized = dictionaries[lang]
    const localizedMeta = (value) => value.replace('{tagline}', localized.tagline)
    document.querySelector('meta[name="description"]')?.setAttribute('content', localizedMeta(localized.meta.description))
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', localizedMeta(localized.meta.title))
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', localizedMeta(localized.meta.description))
    try {
      localStorage.setItem('paisawise-language', lang)
    } catch (error) {
      console.warn('Could not save language preference.', error)
    }
  }, [lang])

  useEffect(() => {
    if (lang !== 'hi') return undefined
    let active = true
    loadHindiLessonsModule()
      .then(() => {
        if (active) setHindiLoaded(true)
      })
      .catch((error) => {
        console.error('Could not load Hindi lesson content.', error)
      })
    return () => {
      active = false
    }
  }, [lang])

  const value = useMemo(() => {
    const t = (key, vars = {}) => {
      const lookup = (dict) => key.split('.').reduce((obj, part) => obj?.[part], dict)
      const message = lookup(dictionaries[lang]) ?? lookup(english) ?? key
      if (typeof message !== 'string') return message
      return message.replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? `{${name}}`))
    }
    return { lang, setLang, t, hindiLoaded }
  }, [lang, hindiLoaded])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLang must be used within LangProvider')
  return context
}
