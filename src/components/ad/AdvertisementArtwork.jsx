import {
  BookOpenCheck,
  Brain,
  ChartNoAxesCombined,
  ShieldCheck,
  Wallet,
} from 'lucide-react'
import { SITE_URL } from '../../config/advertisement.js'

const benefitIcons = [BookOpenCheck, Brain, Wallet, ChartNoAxesCombined, ShieldCheck]
const benefitKeys = ['benefitLessons', 'benefitQuiz', 'benefitBudget', 'benefitLab', 'benefitFree']

function MoneyIllustration() {
  return (
    <svg className="ad-illustration" viewBox="0 0 320 260" role="img" aria-label="Illustration of a student planning money">
      <rect x="16" y="20" width="288" height="220" rx="40" fill="#D7F5A4" />
      <circle cx="249" cy="66" r="23" fill="#A8B9A7" />
      <path d="M56 203h213" stroke="#142B27" strokeWidth="6" strokeLinecap="round" opacity=".16" />
      <rect x="61" y="102" width="117" height="91" rx="18" fill="#F7F8F3" />
      <path d="M82 128h74M82 150h47M82 172h60" stroke="#142B27" strokeWidth="8" strokeLinecap="round" opacity=".3" />
      <circle cx="211" cy="144" r="55" fill="#142B27" />
      <text x="211" y="165" textAnchor="middle" fontSize="58" fontWeight="800" fill="#D7F5A4">₹</text>
      <path d="m205 76 18-19 17 18" fill="none" stroke="#142B27" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M223 58v38" stroke="#142B27" strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

export default function AdvertisementArtwork({ formatKey, dimensions, lang, t, counts, artworkRef }) {
  const benefits = benefitKeys.map((key, index) => ({
    Icon: benefitIcons[index],
    text: t(`poster.${key}`, counts),
  }))

  return (
    <article
      ref={artworkRef}
      className={`ad-artboard ad-artboard--${formatKey}`}
      style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
      lang={lang}
      aria-labelledby="ad-headline"
    >
      <header className="ad-brand">
        <div className="ad-wordmark">
          <span className="ad-brand-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect width="24" height="24" rx="7" fill="#D7F5A4" />
              <path
                d="M8 4h6.8c2.6 0 4.4 1.6 4.4 4 0 1.9-1 3.2-2.7 3.8L18 18h-3.3l-2.7-4.1H11v4.1H8V4zm3.2 2.7v2.8h3.2c.9 0 1.6-.5 1.6-1.4s-.7-1.4-1.6-1.4h-3.2z"
                fill="#142B27"
              />
            </svg>
          </span>
          <span>PaisaWise</span>
        </div>
        <p className="ad-tagline">{t('tagline')}</p>
      </header>

      <section className="ad-hero">
        <div className="ad-hero-copy">
          <h2 id="ad-headline">{t('poster.headline')}</h2>
          <p>{t('poster.description')}</p>
        </div>
        <MoneyIllustration />
      </section>

      <section className="ad-audience" aria-label={t('poster.audience')}>
        <p className="ad-eyebrow">{t('poster.audience')}</p>
        <p className="ad-audience-line">{t('poster.audienceLine')}</p>
        <div className="ad-chips">
          {t('poster.audienceChips').map((chip) => <span key={chip}>{chip}</span>)}
        </div>
      </section>

      <section className="ad-benefits">
        <h3>{t('poster.benefitsHeading')}</h3>
        <ul>
          {benefits.map(({ Icon, text }) => (
            <li key={text}>
              <span className="ad-benefit-icon"><Icon aria-hidden="true" /></span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="ad-footer">
        <div className="ad-cta-row">
          <span className="ad-cta">{t('poster.start')}</span>
          <span className="ad-url">
            <span>{t('poster.urlLabel')}</span>
            <strong>{SITE_URL}</strong>
          </span>
        </div>
        <aside className="ad-disclaimer" aria-label={t('poster.disclaimerLabel')}>
          <strong>{t('poster.disclaimerLabel')}</strong>
          <p>{t('poster.disclaimer')}</p>
        </aside>
      </footer>
    </article>
  )
}
