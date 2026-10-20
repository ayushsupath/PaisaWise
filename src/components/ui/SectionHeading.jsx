export default function SectionHeading({ label, title, description, align = 'left', dark = false, as = 'h2' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'
  const Title = as
  return (
    <div className={`mb-10 md:mb-12 ${alignCls}`}>
      {label && (
        <p
          className={`mb-3 text-xs font-bold tracking-[0.2em] uppercase ${
            dark ? 'text-lime/80' : 'text-forest/70'
          }`}
        >
          {label}
        </p>
      )}
      <Title
        className={`text-balance text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold tracking-tight ${
          dark ? 'text-cream' : 'text-forest'
        }`}
      >
        {title}
      </Title>
      {description && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? 'text-cream/80' : 'text-charcoal/75'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
