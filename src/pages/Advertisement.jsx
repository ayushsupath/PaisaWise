import { useEffect, useRef, useState } from 'react'
import { allLessons, modules } from '../data/lessons/index.js'
import { quizQuestions } from '../data/quizQuestions.js'
import AdvertisementArtwork from '../components/ad/AdvertisementArtwork.jsx'
import { AD_FORMATS } from '../config/advertisement.js'
import { useLang } from '../lib/i18n.jsx'

const formatKeys = Object.keys(AD_FORMATS)

function OptionGroup({ label, children }) {
  return (
    <div className="grid gap-2">
      <p className="text-sm font-bold text-forest">{label}</p>
      {children}
    </div>
  )
}

export default function Advertisement() {
  const { lang, setLang, t } = useLang()
  const [formatKey, setFormatKey] = useState('poster')
  const [scale, setScale] = useState(1)
  const [downloading, setDownloading] = useState(false)
  const [exportError, setExportError] = useState('')
  const containerRef = useRef(null)
  const artworkRef = useRef(null)
  const dimensions = AD_FORMATS[formatKey]
  const counts = { modules: modules.length, lessons: allLessons.length, questions: quizQuestions.length }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const resize = () => {
      const widthScale = Math.max(0.1, (container.clientWidth - 2) / dimensions.width)
      const heightScale = Math.max(0.1, (window.innerHeight * 0.78) / dimensions.height)
      setScale(Math.min(1, widthScale, heightScale))
    }

    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(container)
    window.addEventListener('resize', resize)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [dimensions.height, dimensions.width])

  useEffect(() => {
    const clearPosterPrintMode = () => document.documentElement.classList.remove('poster-image-print')
    window.addEventListener('afterprint', clearPosterPrintMode)
    return () => {
      window.removeEventListener('afterprint', clearPosterPrintMode)
      clearPosterPrintMode()
    }
  }, [])

  const printA4 = () => {
    if (formatKey !== 'poster') {
      setFormatKey('poster')
      window.setTimeout(() => window.print(), 150)
      return
    }
    window.print()
  }

  const printPoster = () => {
    document.documentElement.classList.add('poster-image-print')
    window.setTimeout(() => window.print(), 150)
  }

  const downloadPng = async () => {
    const artwork = artworkRef.current
    if (!artwork) return
    setDownloading(true)
    setExportError('')
    try {
      const visibleText = artwork.innerText
      const fontLoads = await Promise.allSettled([
        document.fonts.load('400 16px "Plus Jakarta Sans"', visibleText),
        document.fonts.load('400 16px "Noto Sans Devanagari"', visibleText),
      ])
      if (fontLoads.some((result) => result.status === 'rejected')) {
        console.warn('One or more advertisement fonts could not be loaded before export.')
      }
      await document.fonts.ready
      const { getFontEmbedCSS, toBlob } = await import('html-to-image')
      const options = {
        width: dimensions.width,
        height: dimensions.height,
        pixelRatio: 2,
        cacheBust: true,
      }
      let fontEmbedCSS
      try {
        fontEmbedCSS = await getFontEmbedCSS(artwork)
        if (!fontEmbedCSS.includes('@font-face') || !fontEmbedCSS.includes('base64,')) {
          throw new Error('No embedded font data was generated.')
        }
      } catch (error) {
        console.warn('Advertisement font embedding failed; exporting with browser font fallbacks.', error)
      }
      if (fontEmbedCSS) options.fontEmbedCSS = fontEmbedCSS
      try {
        await toBlob(artwork, options)
      } catch (error) {
        console.warn('Advertisement PNG warm-up render failed; retrying the export.', error)
      }
      const blob = await toBlob(artwork, options)
      if (!blob) throw new Error('The advertisement image renderer returned no PNG data.')
      const objectUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = `paisawise-ad-${formatKey}-${lang}.png`
      link.href = objectUrl
      document.body.append(link)
      link.click()
      link.remove()
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)
    } catch (error) {
      console.error('Could not export the PaisaWise advertisement as PNG.', error)
      setExportError(t('poster.exportError'))
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="advertisement-page mx-auto min-w-0 max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      <div className="no-print mb-7">
        <h1 className="break-words text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold text-forest">{t('poster.title')}</h1>
        <p className="mt-2 max-w-3xl break-words text-base text-charcoal/70">{t('poster.directions')}</p>
      </div>

      <section className="mx-auto mb-8 grid w-full max-w-[794px] justify-items-center gap-4" aria-label={t('poster.title')}>
        <img
          className="featured-poster-image"
          src="/paisawise-poster.png"
          alt="PaisaWise advertisement poster: Smart money, smarter you."
          width="794"
          height="1123"
          loading="eager"
        />
        <div className="no-print flex flex-wrap justify-center gap-2">
          <a
            href="/paisawise-poster.png"
            download="paisawise-poster.png"
            className="inline-flex min-h-11 items-center rounded-xl bg-forest px-4 py-2 text-sm font-bold text-cream hover:bg-forest/90"
          >
            {t('poster.downloadPoster')}
          </a>
          <button
            type="button"
            onClick={printPoster}
            className="min-h-11 rounded-xl border border-forest/20 bg-cream px-4 py-2 text-sm font-bold text-forest hover:border-forest/50"
          >
            {t('poster.printPoster')}
          </button>
        </div>
      </section>

      <h2 className="no-print mb-4 text-lg font-bold text-forest">{t('poster.moreFormats')}</h2>

      <section className="no-print mb-8 grid gap-5 rounded-2xl border border-forest/10 bg-white p-4 sm:p-5 lg:grid-cols-[1fr_1fr_auto] lg:items-end" aria-label={t('poster.title')}>
        <OptionGroup label={t('poster.format')}>
          <div className="flex flex-wrap gap-2" role="group" aria-label={t('poster.format')}>
            {formatKeys.map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={formatKey === key}
                disabled={downloading}
                onClick={() => { setFormatKey(key); setExportError('') }}
                className={`min-h-11 rounded-xl border px-3 py-2 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:cursor-wait disabled:opacity-65 ${
                  formatKey === key
                    ? 'border-forest bg-forest text-cream'
                    : 'border-forest/15 bg-cream text-forest hover:border-forest/40'
                }`}
              >
                {t(`poster.formats.${key}`)}
              </button>
            ))}
          </div>
        </OptionGroup>

        <OptionGroup label={t('poster.language')}>
          <div className="flex gap-2" role="group" aria-label={t('poster.language')}>
            {[['en', 'EN'], ['hi', 'हिं']].map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={lang === value}
                disabled={downloading}
                onClick={() => { setLang(value); setExportError('') }}
                className={`min-h-11 min-w-16 rounded-xl border px-4 py-2 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:cursor-wait disabled:opacity-65 ${
                  lang === value
                    ? 'border-forest bg-forest text-cream'
                    : 'border-forest/15 bg-cream text-forest hover:border-forest/40'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </OptionGroup>

        <div className="flex flex-wrap gap-2 lg:justify-end">
          <button
            type="button"
            aria-label={t('poster.download')}
            disabled={downloading}
            onClick={downloadPng}
            className="min-h-11 rounded-xl bg-forest px-4 py-2 text-sm font-bold text-cream hover:bg-forest/90 disabled:cursor-wait disabled:opacity-65"
          >
            {downloading ? t('poster.downloading') : t('poster.download')}
          </button>
          <button
            type="button"
            aria-label={t('poster.print')}
            disabled={downloading}
            onClick={printA4}
            className="min-h-11 rounded-xl border border-forest/20 bg-cream px-4 py-2 text-sm font-bold text-forest hover:border-forest/50 disabled:cursor-wait disabled:opacity-65"
          >
            {t('poster.print')}
          </button>
        </div>
      </section>

      {exportError && <p className="no-print mb-4 rounded-lg border border-red-800/20 bg-red-50 p-3 text-sm text-red-900" role="alert">{exportError}</p>}
      <p className="no-print mb-4 text-center text-xs text-charcoal/60">{t('poster.printHint')}</p>

      <div ref={containerRef} className="ad-preview-container" aria-label={t('poster.previewAlt')}>
        <div className="ad-preview-frame" style={{ width: dimensions.width * scale, height: dimensions.height * scale }}>
          <div
            className="ad-artwork-scaler"
            style={{ width: dimensions.width, height: dimensions.height, transform: `scale(${scale})` }}
          >
            <AdvertisementArtwork
              formatKey={formatKey}
              dimensions={dimensions}
              lang={lang}
              t={t}
              counts={counts}
              artworkRef={artworkRef}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
