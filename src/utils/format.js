export function formatINR(value) {
  const num = Number(value)
  if (!Number.isFinite(num)) return '₹0'
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(num)
}

export function parseAmount(input) {
  if (input === '' || input === null || input === undefined) return 0
  const num = Number(String(input).replace(/,/g, ''))
  return Number.isFinite(num) ? Math.max(0, num) : NaN
}
