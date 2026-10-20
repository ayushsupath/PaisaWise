import { CheckCircle2, RotateCcw, Shuffle, XCircle } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { quizQuestions } from '../data/quizQuestions'
import { getHindiQuizQuestion, loadHindiQuizModule } from '../data/hi/loader.js'
import { useLang } from '../lib/i18n.jsx'

const hindiTopics = {
  RBI: 'RBI', SEBI: 'SEBI', 'Treasury Bills': 'Treasury Bill', 'Commercial Paper': 'Commercial Paper',
  'Certificate of Deposit': 'Certificate of Deposit', Repo: 'Repo', NBFCs: 'NBFC',
  'Call Money': 'Call Money', 'Personal Finance': 'निजी फाइनेंस', MCA: 'MCA',
  Budgeting: 'बजट', Inflation: 'महँगाई', 'Digital Payments': 'डिजिटल पेमेंट',
  'Cyber Safety': 'साइबर सुरक्षा', 'Digital Lending': 'डिजिटल लोन', Credit: 'क्रेडिट',
  'Credit Score': 'Credit Score', 'Credit Cards': 'Credit Card', 'Education Loans': 'Education Loan',
  Debt: 'कर्ज़', Investing: 'निवेश', Compounding: 'Compounding', Savings: 'बचत',
  'Mutual Funds': 'Mutual Fund', Salary: 'Salary', Tax: 'टैक्स', Freelancing: 'Freelancing',
  Insurance: 'Insurance', Retirement: 'Retirement', Scams: 'स्कैम',
  'Cash Flow': 'पैसों का आना-जाना', 'Emergency Fund': 'आपातकालीन बचत',
  'Digital Identity': 'डिजिटल पहचान', 'Payment Safety': 'भुगतान सुरक्षा',
  'Loan Costs': 'कर्ज़ की लागत', 'Credit Reports': 'क्रेडिट रिपोर्ट',
  'Risk & Return': 'जोखिम और रिटर्न', 'Savings Products': 'बचत के विकल्प',
}

const quizTopics = [...new Set(quizQuestions.map((question) => question.topic))].sort()

function getQuestionOrder(topic, shuffle) {
  const ids = quizQuestions
    .filter((question) => topic === 'all' || question.topic === topic)
    .map((question) => question.id)

  if (shuffle) {
    for (let i = ids.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[ids[i], ids[j]] = [ids[j], ids[i]]
    }
  }
  return ids
}

export default function QuizArena() {
  const { lang, t } = useLang()
  const [hindiQuizReady, setHindiQuizReady] = useState(false)
  useEffect(() => {
    if (lang !== 'hi') return undefined
    let active = true
    loadHindiQuizModule()
      .then(() => {
        if (active) setHindiQuizReady(true)
      })
      .catch((error) => console.error('Could not load Hindi quiz content.', error))
    return () => {
      active = false
    }
  }, [lang])
  const localizedQuestions = useMemo(
    () => quizQuestions.map((q) => ({ ...q, ...(lang === 'hi' && hindiQuizReady ? getHindiQuizQuestion(q.id) : {}) })),
    [lang, hindiQuizReady],
  )
  const [topic, setTopic] = useState('all')
  const [shuffle, setShuffle] = useState(false)
  const [questionOrder, setQuestionOrder] = useState(() => quizQuestions.map((q) => q.id))
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [selected, setSelected] = useState(null)
  const [finished, setFinished] = useState(false)

  const questions = useMemo(() => {
    const questionsById = new Map(localizedQuestions.map((q) => [q.id, q]))
    return questionOrder
      .map((id) => questionsById.get(id))
      .filter((q) => q && (topic === 'all' || q.topic === topic))
  }, [localizedQuestions, questionOrder, topic])
  const question = questions[index]
  const progress = ((index + (selected !== null ? 1 : 0)) / questions.length) * 100

  const score = useMemo(() => {
    return questions.reduce((acc, q) => acc + (answers[q.id] === q.correctIndex ? 1 : 0), 0)
  }, [answers, questions])

  function handleSelect(optionIndex) {
    if (selected !== null || finished) return
    setSelected(optionIndex)
    setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }))
  }

  function handleNext() {
    if (index >= questions.length - 1) {
      setFinished(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
  }

  function resetQuiz() {
    setIndex(0)
    setAnswers({})
    setSelected(null)
    setFinished(false)
  }

  function handleTopicChange(nextTopic) {
    setTopic(nextTopic)
    setQuestionOrder(getQuestionOrder(nextTopic, shuffle))
    resetQuiz()
  }

  function handleShuffleToggle() {
    const nextShuffle = !shuffle
    setShuffle(nextShuffle)
    setQuestionOrder(getQuestionOrder(topic, nextShuffle))
    resetQuiz()
  }

  if (finished) {
    const percent = Math.round((score / questions.length) * 100)
    return (
      <div className="mx-auto min-w-0 max-w-4xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <SectionHeading as="h1" label={t('quiz.resultsLabel')} title={t('quiz.resultsTitle')} align="center" />
        <div className="rounded-3xl border border-forest/10 bg-white p-8 text-center shadow-sm">
          <p className="text-5xl font-extrabold text-forest">{score}</p>
          <p className="mt-1 text-charcoal/70">
            {lang === 'hi' ? `${questions.length} में से सही (${percent}%)` : `out of ${questions.length} correct (${percent}%)`}
          </p>
          <Button className="mt-6" onClick={resetQuiz}>
            <RotateCcw className="h-4 w-4" /> {t('quiz.retry')}
          </Button>
        </div>
        <div className="mt-8 space-y-4">
          {questions.map((q, i) => {
            const user = answers[q.id]
            const ok = user === q.correctIndex
            return (
              <div key={q.id} className="min-w-0 rounded-2xl border border-forest/10 bg-cream/40 p-4">
                <div className="flex items-start gap-2">
                  {ok ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-forest" />
                  ) : (
                    <XCircle className="mt-0.5 h-5 w-5 text-red-600" />
                  )}
                  <div>
                    <p className="break-words font-semibold text-forest">
                      Q{i + 1}. {q.question}
                    </p>
                    <p className="mt-2 text-sm text-charcoal/75">
                      {t('quiz.yourAnswer')} {user !== undefined ? q.options[user] : '—'}
                    </p>
                    {!ok && (
                      <p className="mt-1 text-sm text-charcoal/75">
                        {t('quiz.correctAnswer')} {q.options[q.correctIndex]}
                      </p>
                    )}
                    <p className="mt-2 break-words text-base text-charcoal/70">{q.explanation}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const answered = selected !== null
  const isCorrect = selected === question.correctIndex

  return (
    <div className="mx-auto min-w-0 max-w-4xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <SectionHeading
        as="h1"
        label={t('quiz.label')}
        title={t('quiz.title')}
        description={t('quiz.desc')}
      />

      <div className="mb-6 flex min-w-0 flex-wrap items-end gap-3">
        <label className="grid gap-1 text-sm font-semibold text-charcoal/70">
          <span>{t('quiz.topicFilter')}</span>
          <select
            value={topic}
            onChange={(event) => handleTopicChange(event.target.value)}
            className="min-h-11 w-full min-w-48 rounded-xl border border-forest/15 bg-white px-3 py-2 text-base text-charcoal sm:w-auto"
          >
            <option value="all">{t('quiz.allTopics')}</option>
            {quizTopics.map((item) => (
              <option key={item} value={item}>
                {lang === 'hi' ? (hindiTopics[item] ?? item) : item}
              </option>
            ))}
          </select>
        </label>
        <Button type="button" variant="secondary" aria-pressed={shuffle} onClick={handleShuffleToggle}>
          <Shuffle className="h-4 w-4" />
          {t(shuffle ? 'quiz.shuffleOn' : 'quiz.shuffleOff')}
        </Button>
        <Button type="button" variant="secondary" onClick={resetQuiz}>
          <RotateCcw className="h-4 w-4" /> {t('quiz.reset')}
        </Button>
      </div>

      <div className="mb-6">
        <div className="mb-2 flex flex-wrap justify-between gap-x-3 gap-y-1 text-sm font-semibold text-charcoal/70">
          <span>
            {t('quiz.question', { current: index + 1, total: questions.length })}
          </span>
          <span>{lang === 'hi' ? (hindiTopics[question.topic] ?? question.topic) : question.topic}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-forest/10">
          <div
            className="h-full rounded-full bg-forest transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="min-w-0 rounded-3xl border border-forest/10 bg-white p-4 shadow-sm sm:p-6 md:p-8">
        <h2 className="break-words text-xl font-bold text-forest md:text-2xl">{question.question}</h2>
        <div className="mt-6 grid gap-3">
          {question.options.map((opt, i) => {
            let cls = 'ring-forest/10 hover:bg-lime/15'
            if (answered) {
              if (i === question.correctIndex) cls = 'bg-lime/50 ring-forest/25'
              else if (i === selected) cls = 'bg-red-50 ring-red-200'
              else cls = 'opacity-60 ring-forest/5'
            } else if (selected === i) cls = 'bg-lime/30 ring-forest/20'
            return (
              <button
                key={opt}
                type="button"
                aria-pressed={selected === i}
                disabled={answered}
                onClick={() => handleSelect(i)}
                className={`min-h-11 rounded-xl px-4 py-3 text-left text-base font-medium ring-1 transition-colors ${cls}`}
              >
                {opt}
              </button>
            )
          })}
        </div>

        {answered ? (
          <div
            aria-live="polite"
            role="status"
            className={`mt-6 flex min-h-16 items-start gap-2 rounded-2xl p-4 text-base ${
              isCorrect ? 'bg-lime/40 text-forest' : 'bg-red-50 text-red-900'
            }`}
          >
            {isCorrect ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}
            <p>{question.explanation}</p>
          </div>
        ) : (
          <div aria-live="polite" className="mt-6 min-h-16" />
        )}

        <div className="mt-6 flex justify-end">
          <Button onClick={handleNext} disabled={!answered}>
            {index === questions.length - 1 ? t('quiz.seeResults') : t('quiz.next')}
          </Button>
        </div>
      </div>
    </div>
  )
}
