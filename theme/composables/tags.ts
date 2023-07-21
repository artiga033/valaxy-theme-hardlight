import { useTags } from 'valaxy'

/**
 * get utils about tags
 */
export function useHardlightTags() {
  const tags = useTags()

  const getTagStyle = (count: number) => {
    const counts = Array.from(tags.value).map(([_, value]) => value.count)
    const max = Math.max(...counts)
    const min = Math.min(...counts)
    const range = max - min
    const percent = (count - min) / range
    return {
      fontSize: `${percent * 2 + 0.25}rem`,
      padding: `${percent + 0.1}rem`,
      marginRight: `${percent}rem`,
    }
  }

  return {
    tags,
    getTagStyle,
  }
}
