import {
  ArrowRight, BarChart3, Brain, Building2, Calculator, Landmark, LineChart, PiggyBank, Sparkles, Wallet,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PromoPoster from '../components/ad/PromoPoster'
import HeroIllustration from '../components/home/HeroIllustration'
import LessonCard from '../components/learn/LessonCard'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { allLessons, getLocalizedLesson, getLocalizedModules, modules } from '../data/lessons'
import { quizQuestions } from '../data/quizQuestions'
import { useLang } from '../lib/i18n.jsx'

export default function Home() {
  const { lang, t } = useLang()
  const categories = [
    { title: t('home.banking'), desc: t('home.bankingDesc'), icon: Building2, to: '/learn?category=banking' },
    { title: t('home.markets'), desc: t('home.marketsDesc'), icon: LineChart, to: '/learn?category=money-market' },
    { title: t('home.regulators'), desc: t('home.regulatorDesc'), icon: Landmark, to: '/learn?category=regulators' },
    { title: t('home.personal'), desc: t('home.personalDesc'), icon: Wallet, to: '/learn?category=personal' },
  ]
  const featured = allLessons.filter((lesson) =>
    ['repo-reverse-repo', 'rbi-introduction-functions', 'commercial-paper', 'needs-wants-student-cashflow'].includes(lesson.slug),
  ).map((lesson) => getLocalizedLesson(lesson.slug, lang))
  const localizedModules = getLocalizedModules(lang)
  const steps = [
    { icon: Brain, title: t('home.learn'), text: t('home.learnDesc', { modules: modules.length }) },
    { icon: Sparkles, title: t('home.practise'), text: t('home.practiseDesc') },
    { icon: BarChart3, title: t('home.understand'), text: t('home.understandDesc') },
  ]

  return (
    <>
      <section className="grid-pattern relative overflow-hidden border-b border-forest/10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
          <div className="animate-fade-up">
            <p className="text-xs font-bold tracking-[0.22em] text-forest/70 uppercase">{t('home.kicker')}</p>
            <h1 className="mt-4 text-balance text-[clamp(2rem,7vw,4rem)] font-extrabold tracking-tight text-forest">
              {t('tagline')}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/75">{t('home.intro')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/learn">{t('nav.start')}</Button>
              <Button to="/quiz" variant="secondary">{t('home.quiz')}</Button>
            </div>
            <p className="mt-4 text-sm text-charcoal/60">{t('home.slogan')}</p>
          </div>
          <div className="animate-fade-up md:justify-self-end"><HeroIllustration /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <SectionHeading label={t('home.start')} title={t('home.lanes')} description={t('home.laneDesc')} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, desc, icon: Icon, to }) => (
            <Link key={title} to={to} className="group rounded-2xl border border-forest/10 bg-white p-5 transition hover:border-forest/25 hover:shadow-md">
              <div className="mb-4 inline-flex rounded-xl bg-lime/60 p-2.5 text-forest"><Icon className="h-5 w-5" /></div>
              <h3 className="font-bold text-forest">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest">
                {t('common.explore')} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 md:pb-16 lg:px-8">
        <SectionHeading label={t('home.moduleSection')} title={t('home.moduleSectionTitle')} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {localizedModules.map((module) => (
            <Link
              key={module.id}
              to={`/learn?module=${module.id}`}
              className="rounded-2xl border border-forest/10 bg-white p-5 transition hover:border-forest/25 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-forest/70">{t('learn.module')} {module.id}</p>
              <h3 className="mt-2 break-words font-bold text-forest">{module.title}</h3>
              <p className="mt-2 text-sm text-charcoal/65">{t('home.lessonCount', { count: module.lessons.length })}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <SectionHeading dark label={t('home.method')} title={t('home.methodTitle')} description={t('home.methodDesc')} align="center" />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/10">
                <Icon className="h-6 w-6 text-lime" />
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <SectionHeading label={t('home.featured')} title={t('home.featuredTitle')} />
        <div className="grid gap-5 md:grid-cols-2">{featured.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} />)}</div>
        <div className="mt-8 text-center"><Button to="/learn" variant="secondary">{t('home.allTopics')}</Button></div>
      </section>

      <section className="border-y border-forest/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16 lg:px-8">
          <div className="rounded-3xl border border-forest/10 bg-cream p-6 md:p-8">
            <p className="text-xs font-bold tracking-widest text-forest/70 uppercase">{t('home.quizCard')}</p>
            <h3 className="mt-2 text-2xl font-extrabold text-forest">{t('home.quizTitle')}</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{t('home.quizDesc', { questions: quizQuestions.length })}</p>
            <Button to="/quiz" className="mt-6">{t('home.enterQuiz')}</Button>
          </div>
          <div className="rounded-3xl border border-forest/10 bg-lime/25 p-6 md:p-8">
            <p className="text-xs font-bold tracking-widest text-forest/60 uppercase">{t('nav.money')}</p>
            <h3 className="mt-2 text-2xl font-extrabold text-forest">{t('home.moneyTitle')}</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{t('home.moneyDesc')}</p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/70 p-4 ring-1 ring-forest/10">
              <Calculator className="h-8 w-8 text-forest" />
              <div><p className="text-sm font-semibold text-forest">{t('home.localCalc')}</p><p className="text-xs text-charcoal/65">{t('home.localCalcDesc')}</p></div>
            </div>
            <Button to="/my-money" variant="secondary" className="mt-6">{t('home.plan')}</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8"><PromoPoster /></section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-forest px-6 py-10 text-center text-cream md:px-12 md:py-14">
          <PiggyBank className="mx-auto h-10 w-10 text-lime" />
          <h2 className="mt-4 text-balance text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">{t('home.cta')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/80">{t('home.ctaDesc')}</p>
          <Button to="/learn" variant="lime" className="mt-6">{t('nav.start')}</Button>
        </div>
      </section>
    </>
  )
}
