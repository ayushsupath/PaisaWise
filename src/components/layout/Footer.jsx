import { Link } from 'react-router-dom'
import Logo from '../brand/Logo'
import { useLang } from '../../lib/i18n.jsx'

const footerLinks = [
  { to: '/learn', key: 'learn' },
  { to: '/quiz', key: 'quiz' },
  { to: '/my-money', key: 'money' },
  { to: '/market-lab', key: 'lab' },
  { to: '/about', key: 'about' },
  { to: '/advertisement', key: 'poster' },
]

const references = [
  { href: 'https://www.rbi.org.in/', label: 'Reserve Bank of India' },
  { href: 'https://www.sebi.gov.in/', label: 'SEBI' },
  { href: 'https://www.mca.gov.in/', label: 'Ministry of Corporate Affairs' },
  { href: 'https://www.nseindia.com/', label: 'National Stock Exchange of India' },
]
const currentYear = new Date().getFullYear()

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="no-print border-t border-forest/10 bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo className="[&_span]:text-cream [&_span_span]:text-lime/80" />
          <p className="mt-4 text-sm leading-relaxed text-cream/75">{t('footer.description')}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide text-lime">{t('footer.explore')}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link className="inline-flex min-h-11 items-center break-words text-cream/80 transition hover:text-lime" to={link.to}>
                  {link.key === 'poster' ? t('footer.poster') : t(`nav.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide text-lime">{t('footer.references')}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {references.map((ref) => (
              <li key={ref.href}>
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center break-words text-cream/80 transition hover:text-lime"
                >
                  {ref.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-4 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl break-words text-xs leading-relaxed text-cream/65">
          <p>
            <strong className="text-cream/90">{t('footer.disclaimer')}</strong> {t('footer.disclaimerText')}
          </p>
          <p className="mt-3">© {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
