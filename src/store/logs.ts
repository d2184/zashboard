import { useStorage } from '@/composables/use-storage'
import { ref } from 'vue'

export const logFilter = ref('')
export const logTypeFilter = ref('')
export const logFilterRegex = useStorage<string>('config/log-filter-regex', '')
export const logFilterEnabled = useStorage<boolean>('config/log-filter-enabled', false)

export const getLogConnectionID = (payload: string) => {
  const stripped = payload.replace(/\x1b\[[0-9;]*m/g, '')
  return stripped.match(/^\[(\d+)\s[^\]]*\]/)?.[1] ?? null
}
