export const merge = (a: any, b: any): object => {
  const base: any = { ...a }

  Object.keys(b).forEach((k) => {
    if (k in base) {
      if (Array.isArray(base[k]) && Array.isArray(b[k])) {
        base[k] = [...base[k], ...b[k]]
      } else if (typeof base[k] === 'object' && typeof b[k] === 'object') {
        base[k] = merge(base[k], b[k])
      } else {
        base[k] = b[k]
      }
    } else {
      base[k] = b[k]
    }
  })

  return base
}
