import { memo } from 'react'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from '../ui/Badge'
import { useLang } from '../../lib/i18n.jsx'

function LessonCard({ lesson }) {
  const { t } = useLang()
  return (
    <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-forest/10 bg-white p-5 shadow-sm transition-colors duration-200 hover:border-forest/20">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="rounded-xl bg-lime/50 p-2 text-forest">
          <BookOpen className="h-4 w-4" />
        </div>
        <Badge difficulty={lesson.difficulty} />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wide text-forest/70">{t('learn.module')} {lesson.moduleId}</p>
      <h3 className="mt-1 break-words text-lg font-bold text-forest">{lesson.title}</h3>
      <p className="mt-2 line-clamp-3 flex-1 break-words text-base leading-relaxed text-charcoal/70">{lesson.definition}</p>
      <Link
        to={`/learn/${lesson.slug}`}
        className="mt-4 inline-flex min-h-11 items-center gap-1 text-base font-semibold text-forest"
      >
        {t('common.explore')} <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  )
}

export default memo(LessonCard)
