import { useMemo } from 'react'

// Small demo hook that returns sample tasks
export default function useStarterTasks() {
  // BEGINNER: Replace these examples with real state, localStorage, or server data
  return useMemo(
    () => [
      { id: 1, title: 'Plan today in 5 minutes', status: 'ready' },
      { id: 2, title: 'Set a 25-minute focus timer', status: 'ready' },
      { id: 3, title: 'Write a short recap', status: 'ready' },
    ],
    [],
  )
}
