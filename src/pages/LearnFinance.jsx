import { Search } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import LessonCard from '../components/learn/LessonCard'
import SectionHeading from '../components/ui/SectionHeading'
import { categories, filterLessons, getLocalizedLessons, getLocalizedModules, modules } from '../data/lessons'
import { useLang } from '../lib/i18n.jsx'

export default function LearnFinance() {
  const { lang, t, hindiLoaded } = useLang()
  const [searchParams, setParams] = useSearchParams()
  const initialCategory = searchParams.get('category') ?? 'all'
  const initialModule = Number(searchParams.get('module')) || 0
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [category, setCategory] = useState(
    categories.some((c) => c.id === initialCategory) ? initialCategory : 'all',
  )
  const [moduleId, setModuleId] = useState(
    modules.some((module) => module.id === initialModule) ? initialModule : 0,
  )

  const localizedLessons = useMemo(
    () => getLocalizedLessons(lang === 'hi' && !hindiLoaded ? 'en' : lang),
    [lang, hindiLoaded],
  )
  const localizedModules = useMemo(
    () => getLocalizedModules(lang === 'hi' && !hindiLoaded ? 'en' : lang),
    [lang, hindiLoaded],
  )
  useEffect(() => {
    const timeout = window.setTimeout(() => setDebouncedSearch(search), 200)
    return () => window.clearTimeout(timeout)
  }, [search])
  const results = useMemo(
    () => filterLessons({ search: debouncedSearch, category, lessons: localizedLessons }),
    [debouncedSearch, category, localizedLessons],
  )
  const filteredResults = useMemo(
    () => (moduleId === 0 ? results : results.filter((lesson) => lesson.moduleId === moduleId)),
    [moduleId, results],
  )

  function onCategoryChange(id) {
    setCategory(id)
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (id === 'all') next.delete('category')
        else next.set('category', id)
        return next
      },
      { replace: true },
    )
  }

  function onModuleChange(id) {
    setModuleId(id)
    setParams((prev) => {
      const next = new URLSearchParams(prev)
      if (id === 0) next.delete('module')
      else next.set('module', String(id))
      return next
    }, { replace: true })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <SectionHeading
        as="h1"
        label={t('learn.label')}
        title={t('learn.title')}
        description={t('learn.desc')}
      />

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative min-w-0 max-w-md flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('learn.search')}
            className="min-h-11 w-full rounded-xl border border-forest/15 bg-white py-2.5 pr-3 pl-10 text-base outline-none focus:border-forest/40"
            aria-label={t('learn.searchLabel')}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              aria-pressed={category === cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`min-h-11 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                category === cat.id
                  ? 'bg-forest text-lime'
                  : 'bg-white text-charcoal ring-1 ring-forest/10 hover:ring-forest/25'
              }`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8 min-w-0">
        <p className="mb-2 text-xs font-bold tracking-wide text-charcoal/65 uppercase">{t('learn.modules')}</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={moduleId === 0}
            onClick={() => onModuleChange(0)}
            className={`min-h-11 rounded-full px-3 py-2 text-sm font-semibold ${moduleId === 0 ? 'bg-forest text-lime' : 'bg-white text-charcoal ring-1 ring-forest/10'}`}
          >
            {t('learn.all')}
          </button>
          {localizedModules.map((module) => (
            <button
              key={module.id}
              type="button"
              aria-pressed={moduleId === module.id}
              onClick={() => onModuleChange(module.id)}
              className={`min-h-11 rounded-full px-3 py-2 text-sm font-semibold ${moduleId === module.id ? 'bg-forest text-lime' : 'bg-white text-charcoal ring-1 ring-forest/10'}`}
            >
              {t('learn.module')} {module.id}
            </button>
          ))}
        </div>
      </div>

      {filteredResults.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-forest/20 bg-white p-10 text-center">
          <p className="font-semibold text-forest">{t('learn.noResults')}</p>
          <p className="mt-2 text-sm text-charcoal/65">{t('learn.tryAgain')}</p>
        </div>
      ) : (
        <>
          {localizedModules.map((module) => {
            const moduleLessons = filteredResults.filter((l) => l.moduleId === module.id)
            if (moduleLessons.length === 0) return null
            return (
              <section key={module.id} className="mb-12">
                <h3 className="text-sm font-bold tracking-widest text-forest/70 uppercase">{t('learn.module')} {module.id}</h3>
                <h2 className="mt-1 break-words text-2xl font-extrabold text-forest">{module.title}</h2>
                <div className="mt-6 grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                  {moduleLessons.map((lesson) => (
                    <LessonCard key={lesson.id} lesson={lesson} />
                  ))}
                </div>
              </section>
            )
          })}
        </>
      )}
    </div>
  )
}
