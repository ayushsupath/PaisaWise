import { Beaker, CheckCircle2, XCircle } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import {
  computeCpDiscount,
  computeFixedInterest,
  computeTbillReturn,
  instruments,
  scenarios,
} from '../data/marketLab'
import { formatINR } from '../utils/format'
import { getHindiInstrument, getHindiScenario, loadHindiLabModule } from '../data/hi/loader.js'
import { useLang } from '../lib/i18n.jsx'

export default function MarketLab() {
  const { lang, t } = useLang()
  const [hindiLabReady, setHindiLabReady] = useState(false)
  const [activeId, setActiveId] = useState(instruments[0].id)
  const [scenarioAnswers, setScenarioAnswers] = useState({})
  useEffect(() => {
    if (lang !== 'hi') return undefined
    let active = true
    loadHindiLabModule()
      .then(() => {
        if (active) setHindiLabReady(true)
      })
      .catch((error) => console.error('Could not load Hindi Market Lab content.', error))
    return () => {
      active = false
    }
  }, [lang])
  const localizedInstruments = useMemo(() => instruments.map((item) => ({
    ...item,
    ...(lang === 'hi' && hindiLabReady ? getHindiInstrument(item.id) : {}),
    fictionalExample: { ...item.fictionalExample, ...(lang === 'hi' && hindiLabReady ? getHindiInstrument(item.id)?.fictionalExample : {}) },
  })), [lang, hindiLabReady])
  const localizedScenarios = useMemo(() => scenarios.map((item) => ({
    ...item, ...(lang === 'hi' && hindiLabReady ? getHindiScenario(item.id) : {}),
  })), [lang, hindiLabReady])
  const active = localizedInstruments.find((i) => i.id === activeId)

  const calc = useMemo(() => {
    if (!active) return null
    const ex = active.fictionalExample
    if (active.id === 'tbill') return computeTbillReturn(ex)
    if (active.id === 'cp') return computeCpDiscount(ex)
    if (active.id === 'cd' || active.id === 'call') {
      return computeFixedInterest({
        principal: ex.principal ?? ex.amount,
        ratePercent: ex.ratePercent,
        days: ex.days,
      })
    }
    if (active.id === 'repo') {
      return computeFixedInterest({
        principal: ex.cash,
        ratePercent: ex.repoRatePercent,
        days: ex.days,
      })
    }
    return null
  }, [active])

  function answerScenario(id, optionIndex) {
    setScenarioAnswers((prev) => ({ ...prev, [id]: optionIndex }))
  }

  return (
    <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <SectionHeading
        as="h1"
        label={t('lab.label')}
        title={t('lab.title')}
        description={t('lab.desc')}
      />

      <div className="mb-8 rounded-2xl border border-forest/10 bg-lime/20 p-4 text-sm text-charcoal/80">
        <div className="flex gap-2">
          <Beaker className="h-5 w-5 shrink-0 text-forest" />
          <p>{t('lab.notice')}</p>
        </div>
      </div>

      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(15rem,17rem)_minmax(0,1fr)]">
        <div className="flex flex-wrap gap-2 lg:flex-col" role="group" aria-label={t('lab.label')}>
          {localizedInstruments.map((inst) => (
            <button
              key={inst.id}
              type="button"
              aria-pressed={activeId === inst.id}
              onClick={() => setActiveId(inst.id)}
              className={`min-h-11 min-w-0 rounded-xl px-4 py-3 text-left text-base font-semibold ring-1 transition-colors ${
                activeId === inst.id
                  ? 'bg-forest text-lime ring-forest'
                  : 'bg-white text-forest ring-forest/10 hover:ring-forest/25'
              }`}
            >
              {inst.name}
            </button>
          ))}
        </div>

        {active && (
          <div className="min-w-0 rounded-3xl border border-forest/10 bg-white p-4 shadow-sm sm:p-6 md:p-8">
            <h2 className="break-words text-2xl font-extrabold text-forest">{active.name}</h2>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                [t('lab.issuer'), active.issuer],
                [t('lab.purpose'), active.purpose],
                [t('lab.maturity'), active.typicalMaturity],
                [t('lab.risk'), active.riskNote],
                [t('lab.access'), active.retailNote],
              ].map(([dt, dd]) => (
                <div key={dt} className="min-w-0 rounded-xl bg-cream/60 p-4">
                  <dt className="text-xs font-bold tracking-wide text-forest/70 uppercase">{dt}</dt>
                  <dd className="mt-1 break-words text-base leading-relaxed text-charcoal/80">{dd}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-2xl bg-forest p-5 text-cream">
              <p className="text-xs font-bold tracking-widest text-lime uppercase">{active.fictionalExample.label}</p>
              {active.id === 'tbill' && calc && (
                <p className="mt-3 text-sm leading-relaxed">
                  {t('lab.tbillResult', {
                    face: formatINR(active.fictionalExample.faceValue),
                    price: formatINR(active.fictionalExample.purchasePrice),
                    days: active.fictionalExample.days,
                    gain: formatINR(calc.gain),
                    rate: calc.yieldSimple.toFixed(2),
                  })}
                </p>
              )}
              {active.id === 'cp' && calc && (
                <p className="mt-3 text-sm leading-relaxed">
                  {t('lab.cpResult', {
                    face: formatINR(active.fictionalExample.faceValue),
                    rate: active.fictionalExample.discountYieldPercent,
                    days: active.fictionalExample.days,
                    interest: formatINR(calc.interest),
                  })}
                </p>
              )}
              {(active.id === 'cd' || active.id === 'call' || active.id === 'repo') && calc && (
                <p className="mt-3 text-sm leading-relaxed">
                  {t('lab.interestResult', {
                    principal: formatINR(
                      active.fictionalExample.principal ??
                        active.fictionalExample.amount ??
                        active.fictionalExample.cash,
                    ),
                    rate: active.fictionalExample.ratePercent ?? active.fictionalExample.repoRatePercent,
                    days: active.fictionalExample.days,
                    interest: formatINR(calc.interest),
                  })}
                </p>
              )}
              {active.id === 'repo' && (
                <p className="mt-2 text-xs text-cream/70">{t('lab.collateral')}: {active.fictionalExample.collateral}</p>
              )}
            </div>
          </div>
        )}
      </div>

      <section className="mt-16">
        <h3 className="text-2xl font-extrabold text-forest">{t('lab.scenarios')}</h3>
        <p className="mt-2 max-w-2xl text-sm text-charcoal/70">{t('lab.scenarioDesc')}</p>
        <div className="mt-6 space-y-5">
          {localizedScenarios.map((sc) => {
            const chosen = scenarioAnswers[sc.id]
            const answered = chosen !== undefined
            return (
              <div key={sc.id} className="min-w-0 rounded-2xl border border-forest/10 bg-white p-4 sm:p-5">
                <p className="break-words font-semibold text-forest">{sc.prompt}</p>
                <div className="mt-4 grid gap-2 md:grid-cols-2">
                  {sc.options.map((opt, i) => {
                    let tone = 'ring-forest/10 hover:bg-lime/15'
                    if (answered) {
                      if (i === sc.correctIndex) tone = 'bg-lime/50 ring-forest/20'
                      else if (i === chosen) tone = 'bg-red-50 ring-red-200'
                      else tone = 'opacity-60'
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        aria-pressed={chosen === i}
                        disabled={answered}
                        onClick={() => answerScenario(sc.id, i)}
                        className={`min-h-11 rounded-xl px-3 py-2 text-left text-base ring-1 ${tone}`}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
                {answered ? (
                  <div aria-live="polite" role="status" className="mt-4 flex min-h-12 gap-2 rounded-xl bg-cream p-3 text-base">
                    {chosen === sc.correctIndex ? (
                      <CheckCircle2 className="h-5 w-5 text-forest" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    {sc.explanation}
                  </div>
                ) : <div aria-live="polite" className="mt-4 min-h-12" />}
              </div>
            )
          })}
        </div>
        <Button variant="ghost" className="mt-4" onClick={() => setScenarioAnswers({})}>
          {t('lab.reset')}
        </Button>
      </section>
    </div>
  )
}
