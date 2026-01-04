export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-slate-950/40 py-6 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>OpenLife · Open-source personal productivity manager.</p>
        <p className="text-slate-400">
          Built for contributors. Extend it, remix it, share improvements.
        </p>
      </div>
    </footer>
  )
}
