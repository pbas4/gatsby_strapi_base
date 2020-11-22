import { useContext } from 'react'
import { ResolutionContext } from '../providers/ResolutionProvider'

/**
 * based on a switcher return the key of the first that has a smaller resolution than the current
 * useAdaptive({ desktop: { width: 1920, height: 1080 }, mobile: null })
 * @param {object} switcher the switcher
 * @returns {string}
 */
export default function useAdaptive(switcher) {
  const resolution = useContext(ResolutionContext)
  return Object.keys(switcher).find(key => {
    const switchResolution = switcher[key]
    return (
      (!switchResolution?.width ||
        switchResolution.width <= resolution.width) &&
      (!switchResolution?.height ||
        switchResolution.height <= resolution.height)
    )
  })
}
