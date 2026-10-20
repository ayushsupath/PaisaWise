import { Link } from 'react-router-dom'

const base =
  'inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary: 'bg-forest text-lime hover:bg-charcoal px-5 py-2.5 text-sm md:text-base',
  secondary:
    'bg-white text-forest border border-forest/15 hover:border-forest/40 px-5 py-2.5 text-sm md:text-base',
  lime: 'bg-lime text-forest hover:bg-lime/90 px-5 py-2.5 text-sm md:text-base',
  ghost: 'text-forest hover:bg-forest/5 px-3 py-2 text-sm',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  ...props
}) {
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  )
}
