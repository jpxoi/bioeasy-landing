/** Tailwind breakpoints used by the courses grid (sm / md / xl). */
export const GRID_BREAKPOINTS = {
  sm: 640,
  md: 768,
  xl: 1280,
} as const

export const GRID_COLUMNS = {
  base: 1,
  sm: 2,
  md: 3,
  xl: 4,
} as const

export const MIN_PAGE_SIZE = 4

/** Two full rows; never fewer than MIN_PAGE_SIZE items. */
export function getPageSize(columns: number) {
  return Math.max(columns * 2, MIN_PAGE_SIZE)
}

export function getGridColumnsFromViewport() {
  if (window.matchMedia(`(min-width: ${GRID_BREAKPOINTS.xl}px)`).matches) return GRID_COLUMNS.xl
  if (window.matchMedia(`(min-width: ${GRID_BREAKPOINTS.md}px)`).matches) return GRID_COLUMNS.md
  if (window.matchMedia(`(min-width: ${GRID_BREAKPOINTS.sm}px)`).matches) return GRID_COLUMNS.sm
  return GRID_COLUMNS.base
}
