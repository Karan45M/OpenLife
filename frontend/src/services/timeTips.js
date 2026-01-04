// Minimal service placeholder for future data fetching
export function fetchTimeTips() {
  // BEGINNER: Swap this stub for a real API call or localStorage read
  return Promise.resolve([
    'Protect one deep work block today.',
    'Group admin tasks into a 20-minute batch.',
    'Celebrate one small win in your summary.',
  ])
}

export function saveTimePreference(preference) {
  // BEGINNER: Write to an API or browser storage here
  console.log('Saving preference (placeholder only):', preference)
}
