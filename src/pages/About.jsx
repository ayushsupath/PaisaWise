import { GraduationCap, Target, Users } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { useLang } from '../lib/i18n.jsx'

const featureKeys = ['featureLessons', 'featureQuiz', 'featureBudget', 'featureLab']
const roleKeys = ['roleContent', 'roleDesign', 'roleResearch']

const references = [
  { href: 'https://www.rbi.org.in/', label: 'Reserve Bank of India' },
  { href: 'https://www.sebi.gov.in/', label: 'SEBI' },
  { href: 'https://www.mca.gov.in/', label: 'Ministry of Corporate Affairs' },
  { href: 'https://www.nseindia.com/', label: 'National Stock Exchange of India' },
]

export default function About() {
  const { t } = useLang()
  return (
    <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <SectionHeading
        as="h1"
        label={t('about.label')}
        title={t('about.title')}
        description={t('about.desc')}
      />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-forest/10 bg-white p-6">
          <Target className="h-6 w-6 text-forest" />
          <h2 className="mt-3 font-bold text-forest">{t('about.mission')}</h2>
          <p className="mt-2 break-words text-base leading-relaxed text-charcoal/75">{t('about.missionText')}</p>
        </div>
        <div className="rounded-2xl border border-forest/10 bg-white p-6">
          <GraduationCap className="h-6 w-6 text-forest" />
          <h2 className="mt-3 font-bold text-forest">{t('about.problem')}</h2>
          <p className="mt-2 break-words text-base leading-relaxed text-charcoal/75">{t('about.problemText')}</p>
        </div>
        <div className="rounded-2xl border border-forest/10 bg-white p-6">
          <Users className="h-6 w-6 text-forest" />
          <h2 className="mt-3 font-bold text-forest">{t('about.audience')}</h2>
          <p className="mt-2 break-words text-base leading-relaxed text-charcoal/75">{t('about.audienceText')}</p>
        </div>
      </div>

      <section className="mt-14 rounded-3xl bg-forest p-8 text-cream md:p-10">
        <h2 className="text-2xl font-extrabold text-lime">{t('about.course')}</h2>
        <p className="mt-4 max-w-3xl break-words text-base leading-relaxed text-cream/85">{t('about.courseText')}</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {featureKeys.map((key) => (
            <li key={key} className="flex min-w-0 gap-2 text-base text-cream/85">
              <span className="text-lime">•</span> {t(`about.${key}`)}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <SectionHeading label={t('about.team')} title={t('about.teamTitle')} />
        <div className="grid gap-4 md:grid-cols-3">
          {roleKeys.map((key, index) => (
            <div key={key} className="rounded-2xl border border-forest/10 bg-lime/20 p-5">
              <p className="font-bold text-forest">{t('about.memberLabel', { number: index + 1 })}</p>
              <p className="mt-1 text-sm text-charcoal/70">{t(`about.${key}`)}</p>
              <p className="mt-3 text-xs text-charcoal/55">{t('about.teamPlaceholder')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-extrabold text-forest">{t('about.disclaimer')}</h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal/75">
          <p>{t('about.disclaimerText')}</p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-extrabold text-forest">{t('about.references')}</h2>
        <ul className="mt-4 space-y-2">
          {references.map((ref) => (
            <li key={ref.href}>
              <a
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center break-words text-base font-semibold text-forest underline decoration-lime decoration-2 underline-offset-4"
              >
                {ref.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-charcoal/60">
          {t('about.refNote')}
        </p>
      </section>

      <div className="mt-10">
        <Button to="/learn">{t('about.explore')}</Button>
      </div>
    </div>
  )
}
