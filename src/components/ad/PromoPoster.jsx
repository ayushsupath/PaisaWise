import { Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import { useLang } from '../../lib/i18n.jsx'

export default function PromoPoster({ compact = false }) {
  const { t } = useLang()
  const benefits = t('poster.teaserBenefits')
  return (
    <section
      className={`print-ad min-w-0 overflow-hidden rounded-3xl border border-forest/10 bg-forest text-cream shadow-xl ${
        compact ? 'p-6 md:p-8' : 'p-8 md:p-12'
      }`}
      aria-labelledby="promo-heading"
    >
      <div className="grid min-w-0 gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full bg-lime/15 px-3 py-1 text-xs font-bold tracking-wider text-lime uppercase">
            <Sparkles className="h-3.5 w-3.5" /> PaisaWise
          </p>
          <p className="mt-4 text-sm font-semibold text-lime">{t('tagline')}</p>
          <h2 id={compact ? 'promo-heading-compact' : 'promo-heading'} className="mt-2 break-words text-balance text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">
            {t('poster.headline')}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/80">
            {t('poster.description')}
          </p>
          {!compact && (
            <div className="no-print mt-6">
              <Button to="/learn" variant="lime">
                {t('poster.start')}
              </Button>
            </div>
          )}
        </div>
        <div className="min-w-0 rounded-2xl bg-cream/5 p-5 ring-1 ring-cream/10">
          <h3 className="text-sm font-bold tracking-wide text-lime uppercase">{t('poster.why')}</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/85">
            {benefits.map((item) => (
              <li key={item} className="flex min-w-0 gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                {item}
              </li>
            ))}
          </ul>
          {compact && <p className="mt-5 text-center text-sm font-bold text-lime">{t('poster.start')} →</p>}
        </div>
      </div>
      <p className="mt-6 border-t border-cream/10 pt-4 text-xs leading-relaxed text-cream/60">
        {t('common.educational')}
      </p>
    </section>
  )
}
