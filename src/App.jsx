import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { useLang } from './lib/i18n.jsx'

const About = lazy(() => import('./pages/About.jsx'))
const Advertisement = lazy(() => import('./pages/Advertisement.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))
const LearnFinance = lazy(() => import('./pages/LearnFinance.jsx'))
const LessonPage = lazy(() => import('./pages/LessonPage.jsx'))
const MarketLab = lazy(() => import('./pages/MarketLab.jsx'))
const MyMoney = lazy(() => import('./pages/MyMoney.jsx'))
const QuizArena = lazy(() => import('./pages/QuizArena.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function RouteFallback() {
  const { t } = useLang()
  return (
    <div className="mx-auto min-h-[50dvh] max-w-7xl px-4 py-12 sm:px-6 lg:px-8" role="status" aria-live="polite">
      {t('common.loading')}
    </div>
  )
}

function Page({ children }) {
  return <Suspense fallback={<RouteFallback />}>{children}</Suspense>
}

function PosterHashRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    const redirect = () => {
      if (window.location.hash === '#/poster') navigate('/poster', { replace: true })
    }
    redirect()
    window.addEventListener('hashchange', redirect)
    return () => window.removeEventListener('hashchange', redirect)
  }, [navigate])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <PosterHashRedirect />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Page><Home /></Page>} />
          <Route path="learn" element={<Page><LearnFinance /></Page>} />
          <Route path="learn/:slug" element={<Page><LessonPage /></Page>} />
          <Route path="quiz" element={<Page><QuizArena /></Page>} />
          <Route path="my-money" element={<Page><MyMoney /></Page>} />
          <Route path="market-lab" element={<Page><MarketLab /></Page>} />
          <Route path="about" element={<Page><About /></Page>} />
          <Route path="advertisement" element={<Page><Advertisement /></Page>} />
          <Route path="poster" element={<Page><Advertisement /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
