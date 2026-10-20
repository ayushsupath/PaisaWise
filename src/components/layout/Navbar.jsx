import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../brand/Logo'
import Button from '../ui/Button'
import { useLang } from '../../lib/i18n.jsx'

const links = [
  { to: '/', label: 'home' },
  { to: '/learn', label: 'learn' },
  { to: '/my-money', label: 'money' },
  { to: '/quiz', label: 'quiz' },
  { to: '/market-lab', label: 'lab' },
  { to: '/about', label: 'about' },
  { to: '/advertisement', label: 'poster' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLang()
  const menuRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    menuRef.current?.querySelector('a, button')?.focus()

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !menuRef.current) return
      const focusable = [...menuRef.current.querySelectorAll('a[href], button:not([disabled])')]
      const first = focusable[0]
      const last = focusable.at(-1)
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    function onResize() {
      if (window.matchMedia('(min-width: 80rem)').matches) {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
    triggerRef.current?.focus()
  }

  const navClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-forest/10 text-forest' : 'text-charcoal/80 hover:bg-forest/5 hover:text-forest'
    }`

  const languageToggle = (className = '') => (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
      className={`min-h-11 min-w-11 rounded-lg px-3 py-2 text-sm font-semibold text-forest ring-1 ring-forest/15 hover:bg-forest/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${className}`}
      aria-label={t('nav.language')}
      title={t('nav.language')}
    >
      {lang === 'en' ? 'EN | हिं' : 'हिं | EN'}
    </button>
  )

  return (
    <header className="site-header no-print sticky top-0 z-50 border-b border-forest/10 bg-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 xl:flex" aria-label={t('nav.main')}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={`${navClass} min-h-11`} end={link.to === '/'}>
              {t(`nav.${link.label}`)}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          {languageToggle()}
          <Button to="/learn" variant="primary">
            {t('nav.start')}
          </Button>
        </div>
        <button
          ref={triggerRef}
          type="button"
          className="relative z-50 inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-forest/10 p-2 text-forest xl:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-charcoal/35 xl:hidden"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeMenu()
          }}
        >
          <div
            id="mobile-navigation"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label={t('nav.mobile')}
            className="absolute inset-x-0 top-0 max-h-dvh overflow-y-auto overscroll-contain border-b border-forest/10 bg-cream px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-[calc(env(safe-area-inset-top)+5rem)] shadow-lg sm:px-6"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label={t('nav.mobile')}>
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`${navClass} min-h-11`}
                  end={link.to === '/'}
                  onClick={closeMenu}
                >
                  {t(`nav.${link.label}`)}
                </NavLink>
              ))}
              {languageToggle('mt-2 min-h-11 self-start')}
              <Button to="/learn" className="mt-3 min-h-11 w-full" onClick={closeMenu}>
                {t('nav.start')}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
