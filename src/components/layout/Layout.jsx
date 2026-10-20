import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang } from '../../lib/i18n.jsx'
import { setPageTitle } from '../../utils/pageTitle.js'

export default function Layout() {
  const { pathname } = useLocation()
  const { t } = useLang()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.getElementById('main-content')?.focus({ preventScroll: true })
    if (pathname.startsWith('/learn/')) return
    const key = pathname === '/' ? 'home' : pathname === '/learn' ? 'learn' :
      pathname === '/quiz' ? 'quiz' : pathname === '/my-money' ? 'money' :
        pathname === '/market-lab' ? 'lab' : pathname === '/about' ? 'about' :
          pathname === '/advertisement' || pathname === '/poster' ? 'poster' : 'notFound'
    setPageTitle(t(`titles.${key}`, { tagline: t('tagline') }))
  }, [pathname, t])
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-w-0 flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
