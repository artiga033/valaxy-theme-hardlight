import { useRoute } from 'vue-router'
import { computed } from 'vue'
import type { FriendsPageFrontMatter } from 'types'

/**
 *  get friends data from frontmatter
*/
export function useFriendsFrontMatter() {
  const route = useRoute()
  return computed<Partial<FriendsPageFrontMatter>>(() => route.meta.frontmatter || {})
}
