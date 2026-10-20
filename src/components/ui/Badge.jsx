import { useLang } from '../../lib/i18n.jsx'

const styles = {
  Beginner: 'bg-lime/80 text-forest',
  Intermediate: 'bg-sage/40 text-forest',
  Advanced: 'bg-forest text-lime',
}

export default function Badge({ children, difficulty }) {
  const { t } = useLang()
  const tone = styles[difficulty] ?? 'bg-white text-forest border border-forest/10'
  const translated = {
    Beginner: t('common.beginner'),
    Intermediate: t('common.intermediate'),
    Advanced: t('common.advanced'),
  }[difficulty] ?? difficulty
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${tone}`}>
      {difficulty ? translated : children}
    </span>
  )
}
