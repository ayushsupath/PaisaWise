import { AlertCircle, PieChart, RotateCcw } from 'lucide-react'
import { useMemo, useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { formatINR, parseAmount } from '../utils/format'
import { useLang } from '../lib/i18n.jsx'

const fields = [
  { key: 'income', labelKey: 'money.income' },
  { key: 'food', labelKey: 'money.food' },
  { key: 'travel', labelKey: 'money.travel' },
  { key: 'education', labelKey: 'money.education' },
  { key: 'shopping', labelKey: 'money.shopping' },
  { key: 'other', labelKey: 'money.other' },
  { key: 'savingsGoal', labelKey: 'money.savingsGoal' },
]

const emptyForm = {
  income: '',
  food: '',
  travel: '',
  education: '',
  shopping: '',
  other: '',
  savingsGoal: '',
}

export default function MyMoney() {
  const { t } = useLang()
  const [form, setForm] = useState(emptyForm)
  const [touched, setTouched] = useState(false)

  const parsed = useMemo(() => {
    const values = {}
    let invalid = false
    for (const f of fields) {
      const v = parseAmount(form[f.key])
      if (Number.isNaN(v)) invalid = true
      values[f.key] = Number.isNaN(v) ? 0 : v
    }
    return { values, invalid }
  }, [form])

  const expenseKeys = ['food', 'travel', 'education', 'shopping', 'other']
  const totalExpenses = expenseKeys.reduce((s, k) => s + parsed.values[k], 0)
  const income = parsed.values.income
  const remaining = income - totalExpenses
  const savingsRate = income > 0 ? (remaining / income) * 100 : 0
  const goal = parsed.values.savingsGoal
  const goalMet = remaining >= goal

  const breakdown = expenseKeys
    .map((k) => ({
      key: k,
      label: fields.find((f) => f.key === k).label,
      amount: parsed.values[k],
      share: totalExpenses > 0 ? (parsed.values[k] / totalExpenses) * 100 : 0,
    }))
    .filter((b) => b.amount > 0)

  const observations = []
  if (touched && parsed.invalid) observations.push(t('money.invalid'))
  if (touched && income === 0 && totalExpenses === 0) observations.push(t('money.start'))
  if (touched && income === 0 && totalExpenses > 0) observations.push(t('money.noIncome'))
  if (touched && remaining < 0) observations.push(t('money.overspend', { amount: formatINR(Math.abs(remaining)) }))
  if (touched && remaining >= 0 && goal > 0 && !goalMet)
    observations.push(t('money.underGoal', { amount: formatINR(goal - remaining) }))
  if (touched && remaining >= 0 && goal > 0 && goalMet) observations.push(t('money.met'))
  if (touched && income > 0 && savingsRate >= 20) observations.push(t('money.goodRate'))
  if (touched && income > 0 && savingsRate < 10 && remaining >= 0) observations.push(t('money.lowRate'))

  function update(key, value) {
    setTouched(true)
    setForm((f) => ({ ...f, [key]: value }))
  }

  function reset() {
    setForm(emptyForm)
    setTouched(false)
  }

  return (
    <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <SectionHeading
        as="h1"
        label={t('money.label')}
        title={t('money.title')}
        description={t('money.desc')}
      />

      <div className="mb-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
        <AlertCircle className="h-5 w-5 shrink-0" />
        <p>
          {t('money.notice')}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <form
          className="rounded-3xl border border-forest/10 bg-white p-6 shadow-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-lg font-bold text-forest">{t('money.inputs')}</h3>
          <div className="mt-5 space-y-4">
            {fields.map((field) => (
              <label key={field.key} className="block min-w-0 text-base">
                <span className="font-medium text-charcoal">{t(field.labelKey)}</span>
                <div className="relative mt-1">
                  <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-charcoal/50">
                    ₹
                  </span>
                  <input
                    inputMode="numeric"
                    type="number"
                    min="0"
                    step="any"
                    value={form[field.key]}
                    onChange={(e) => update(field.key, e.target.value)}
                    className="min-h-11 w-full min-w-0 rounded-xl border border-forest/15 py-2.5 pr-3 pl-8 text-base outline-none focus:border-forest/40"
                  />
                </div>
              </label>
            ))}
          </div>
          <Button type="button" variant="secondary" className="mt-6" onClick={reset}>
            <RotateCcw className="h-4 w-4" /> {t('money.reset')}
          </Button>
        </form>

        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: t('money.total'), value: formatINR(totalExpenses) },
              { label: t('money.remaining'), value: formatINR(remaining), warn: remaining < 0 },
              {
                label: t('money.rate'),
                value: income > 0 ? `${savingsRate.toFixed(1)}%` : '—',
              },
              {
                label: t('money.vsGoal'),
                value: goal > 0 ? (goalMet ? t('money.goalMet') : t('money.shortBy', { amount: formatINR(goal - remaining) })) : t('money.setGoal'),
                warn: goal > 0 && !goalMet,
              },
            ].map((card) => (
              <div
                key={card.label}
                className={`rounded-2xl border p-4 ${
                  card.warn ? 'border-red-200 bg-red-50' : 'border-forest/10 bg-lime/15'
                }`}
              >
                <p className="text-xs font-semibold tracking-wide text-charcoal/60 uppercase">{card.label}</p>
                <p className="mt-1 break-words text-xl font-extrabold text-forest">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-forest/10 bg-white p-6">
            <div className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-forest" />
              <h3 className="font-bold text-forest">{t('money.breakdown')}</h3>
            </div>
            {breakdown.length === 0 ? (
              <p className="mt-4 text-sm text-charcoal/65">{t('money.addAmounts')}</p>
            ) : (
              <ul className="mt-5 space-y-4">
                {breakdown.map((item) => (
                  <li key={item.key}>
                    <div className="flex justify-between text-sm">
                      <span>{t(fields.find((field) => field.key === item.key).labelKey)}</span>
                      <span className="font-semibold">
                        {formatINR(item.amount)} · {item.share.toFixed(0)}%
                      </span>
                    </div>
                    <div className="mt-1 h-2 overflow-hidden rounded-full bg-forest/10">
                      <div className="h-full rounded-full bg-forest" style={{ width: `${item.share}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div aria-live="polite" role={observations.some((item) => item === t('money.invalid')) ? 'alert' : 'status'} className="min-h-10">
          {observations.length > 0 && (
            <div className="rounded-2xl bg-forest p-5 text-base text-cream">
              <p className="font-bold text-lime">{t('money.observations')}</p>
              <ul className="mt-3 space-y-2 text-cream/85">
                {observations.map((note) => (
                  <li key={note}>• {note}</li>
                ))}
              </ul>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}
