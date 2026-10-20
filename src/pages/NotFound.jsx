import Button from '../components/ui/Button'
import { useLang } from '../lib/i18n.jsx'

export default function NotFound() {
  const { t } = useLang()
  return (
    <div className="mx-auto flex min-h-[60dvh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <p className="text-sm font-bold uppercase tracking-widest text-forest/70">404</p>
      <h1 className="mt-3 text-3xl font-extrabold text-forest">{t('notFound.title')}</h1>
      <p className="mt-3 max-w-prose break-words text-base text-charcoal/70">{t('notFound.desc')}</p>
      <Button to="/" className="mt-7">{t('notFound.home')}</Button>
    </div>
  )
}
