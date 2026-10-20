import { Link } from 'react-router-dom'
import { useLang } from '../../lib/i18n.jsx'

export default function Logo({ className = '' }) {
  const { t } = useLang()
  return (
    <Link to="/" className={`group inline-flex min-h-11 items-center gap-2.5 ${className}`} aria-label={t('nav.home')}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-forest text-lime shadow-sm ring-1 ring-forest/10 transition group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M8 4h6.8c2.6 0 4.4 1.6 4.4 4 0 1.9-1 3.2-2.7 3.8L18 18h-3.3l-2.7-4.1H11v4.1H8V4zm3.2 2.7v2.8h3.2c.9 0 1.6-.5 1.6-1.4s-.7-1.4-1.6-1.4h-3.2z"
          />
        </svg>
      </span>
      <span className="text-lg font-extrabold tracking-tight text-forest">
        Paisa<span className="text-forest/70">Wise</span>
      </span>
    </Link>
  )
}
