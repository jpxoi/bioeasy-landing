export type CdnImageFormat = 'avif' | 'webp' | 'png'

export function getCdnImageUrl(cdnUrl: string, assetPath: string, format: CdnImageFormat) {
  const normalizedBaseUrl = cdnUrl.endsWith('/') ? cdnUrl : `${cdnUrl}/`
  const normalizedAssetPath = assetPath.replace(/^\//, '')
  const url = new URL(`${normalizedAssetPath}.${format}`, normalizedBaseUrl)
  return url.toString()
}
