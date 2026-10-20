import { CheckCircle2, ChevronLeft, ChevronRight, XCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { getLessonBySlug, getLessonNeighbors, getLocalizedLesson } from '../data/lessons'
import { useLang } from '../lib/i18n.jsx'
import { setPageTitle } from '../utils/pageTitle.js'

function LessonMcq({ mcq, index }) {
  const [selected, setSelected] = useState(null)
  const { t } = useLang()
  const answered = selected !== null
  const isCorrect = selected === mcq.correctIndex

  return (
    <div className="rounded-2xl border border-forest/10 bg-cream/50 p-5">
      <p className="break-words text-base font-bold text-forest">
        {t('lesson.quick')} {index + 1}: {mcq.question}
      </p>
      <div className="mt-4 grid gap-2">
        {mcq.options.map((opt, i) => {
          let tone = 'bg-white hover:bg-lime/20 ring-forest/10'
          if (answered) {
            if (i === mcq.correctIndex) tone = 'bg-lime/60 ring-forest/20'
            else if (i === selected) tone = 'bg-red-50 ring-red-200'
            else tone = 'bg-white opacity-70 ring-forest/5'
          }
          return (
            <button
              key={opt}
              type="button"
              disabled={answered}
              onClick={() => setSelected(i)}
              className={`min-h-11 rounded-xl px-4 py-3 text-left text-base ring-1 transition-colors ${tone}`}
            >
              {opt}
            </button>
          )
        })}
      </div>
      <div
      aria-live="polite"
      role="status"
      className={`mt-4 flex min-h-14 items-start gap-2 rounded-xl p-3 text-base ${
        answered ? (isCorrect ? 'bg-lime/40 text-forest' : 'bg-red-50 text-red-900') : 'invisible'
      }`}
      >
      {answered && (isCorrect ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />)}
      <p>{answered ? mcq.explanation : ''}</p>
      </div>
    </div>
  )
}

export default function LessonPage() {
  const { slug } = useParams()
  const { lang, t } = useLang()
  const englishLesson = getLessonBySlug(slug)
  const lesson = getLocalizedLesson(slug, lang)
  const neighbors = getLessonNeighbors(slug)
  const prev = neighbors.prev ? getLocalizedLesson(neighbors.prev.slug, lang) : null
  const next = neighbors.next ? getLocalizedLesson(neighbors.next.slug, lang) : null
  const exampleLines = lesson?.example.split('\n') ?? []
  const tableStart = exampleLines.findIndex(
    (line, index) => line.includes('|') && /^\s*\|?\s*:?-{3,}/.test(exampleLines[index + 1] ?? ''),
  )
  const exampleRows = tableStart >= 0
    ? exampleLines.slice(tableStart).filter((line) => !/^\s*\|?\s*:?-{3,}/.test(line)).map((line) =>
        line.split('|').map((cell) => cell.trim()).filter(Boolean),
      )
    : []

  useEffect(() => {
    if (lesson) setPageTitle(t('titles.lesson', { title: lesson.title }))
  }, [lesson, t])

  if (!englishLesson || !lesson) return <Navigate to="/learn" replace />

  return (
    <article className="mx-auto min-w-0 max-w-4xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <p className="break-words text-xs font-bold tracking-widest text-forest/70 uppercase">
        {t('learn.module')} {lesson.moduleId} · {lesson.moduleTitle}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <h1 className="min-w-0 break-words text-[clamp(1.8rem,6vw,2.5rem)] font-extrabold text-forest">{lesson.title}</h1>
        <Badge difficulty={lesson.difficulty} />
      </div>

      <section className="prose-section mx-auto mt-10 max-w-[70ch] space-y-8 break-words">
        <div>
          <h2 className="text-lg font-bold text-forest">{t('lesson.definition')}</h2>
          <p className="mt-2 text-base leading-relaxed text-charcoal/80">{lesson.definition}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-forest">{t('lesson.why')}</h2>
          <p className="mt-2 text-base leading-relaxed text-charcoal/80">{lesson.whyItMatters}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-forest">{t('lesson.points')}</h2>
          <ul className="mt-3 space-y-2">
            {lesson.characteristics.map((item) => (
              <li key={item} className="flex min-w-0 gap-2 text-base leading-relaxed text-charcoal/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime ring-2 ring-forest/10" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-forest/10 bg-lime/20 p-5">
          <h2 className="text-lg font-bold text-forest">{t('lesson.example')}</h2>
          {tableStart < 0 ? (
            <p className="mt-2 text-base leading-relaxed text-charcoal/85">{lesson.example}</p>
          ) : (
            <>
              <p className="mt-2 text-base leading-relaxed text-charcoal/85">{exampleLines.slice(0, tableStart).join('\n').trim()}</p>
              <p className="mb-2 text-xs text-charcoal/65 sm:hidden">{t('lesson.tableScroll')}</p>
              <div className="max-w-full overflow-x-auto overscroll-x-contain rounded-xl ring-1 ring-forest/10" tabIndex={0} aria-label={t('lesson.example')}>
                <table className="min-w-[34rem] border-collapse text-left text-sm">
                  <thead className="bg-forest text-cream">
                    <tr>{exampleRows[0]?.map((cell) => <th key={cell} scope="col" className="px-3 py-2 font-semibold">{cell}</th>)}</tr>
                  </thead>
                  <tbody>{exampleRows.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-t border-forest/10 odd:bg-white even:bg-cream/60">
                      {row.map((cell, cellIndex) => <td key={cellIndex} className="px-3 py-2">{cell}</td>)}
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            </>
          )}
        </div>
        <div className="rounded-2xl bg-forest p-5 text-cream">
          <h2 className="text-lg font-bold text-lime">{t('lesson.remember')}</h2>
          <p className="mt-2 text-base leading-relaxed text-cream/90">{lesson.rememberThis}</p>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-extrabold text-forest">{t('lesson.questions')}</h2>
        {lesson.mcqs.map((mcq, i) => (
          <LessonMcq key={`${lesson.slug}-${mcq.question}`} mcq={mcq} index={i} />
        ))}
      </section>

      <nav className="mt-12 flex flex-col gap-3 border-t border-forest/10 pt-8 sm:flex-row sm:justify-between">
        {prev ? (
          <Link
            to={`/learn/${prev.slug}`}
            className="inline-flex min-h-11 min-w-0 items-center gap-2 rounded-xl border border-forest/10 bg-white px-4 py-3 text-base font-semibold text-forest hover:bg-cream"
          >
            <ChevronLeft className="h-4 w-4" /> {t('lesson.previous')}: {prev.title}
          </Link>
        ) : (
          <Button to="/learn" variant="ghost">
            {t('lesson.back')}
          </Button>
        )}
        {next ? (
          <Link
            to={`/learn/${next.slug}`}
            className="inline-flex min-h-11 min-w-0 items-center justify-end gap-2 rounded-xl bg-forest px-4 py-3 text-base font-semibold text-lime hover:bg-charcoal sm:text-right"
          >
            {t('lesson.next')}: {next.title} <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <Button to="/quiz" variant="primary">
            {t('lesson.finish')}
          </Button>
        )}
      </nav>
    </article>
  )
}
