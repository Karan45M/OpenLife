// Placeholder daily summary that can grow into charts or stats
export default function DailySummary() {
  // BEGINNER: Swap these sample stats with real calculations or fetched data
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-200/40 hover:bg-white/10 hover:shadow-[0_18px_50px_rgba(15,23,42,0.4)]">
      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Daily Summary</div>
      <ul className="space-y-1 text-sm text-slate-300">
        <li>- Focus blocks: sample data</li>
        <li>- Breaks taken: sample data</li>
        <li>- Wins to celebrate: sample data</li>
      </ul>
      {/* BEGINNER: Replace the list above with live stats, charts, or badges */}
    </div>
  )
}
