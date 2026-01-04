import DailySummary from '../components/DailySummary'
import Tasks from '../components/Tasks'
import Timer from '../components/Timer'

const Card = ({ title, children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_50px_rgba(15,23,42,0.35)]">
    <h2 className="mb-2 text-lg font-semibold text-white">{title}</h2>
    <p className="text-sm leading-relaxed text-slate-300">{children}</p>
  </div>
)

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Welcome</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">OpenLife (Daily Workflow & Time Management)</h1>
        <p className="mt-2 text-sm text-slate-200">
          A beginner-friendly, open-source workspace where you can plan your day, protect focus time, and learn how to build React
          components alongside the community.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card title="What OpenLife is">
          OpenLife is a simple dashboard starter for mapping your day. You get clear sections for tasks, a timer, and a daily recap
          you can extend with your own ideas.
        </Card>
        <Card title="Why time awareness matters">
          Seeing where your time goes helps you stay calm and focused. Even a small timer or checklist can reveal patterns you can
          improve each week.
        </Card>
        <Card title="How beginners can contribute">
          Start by editing the placeholder components below. Swap the text, add inputs, and try new layouts. Small pull requests are
          perfect here.
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Tasks />
        <Timer />
        <DailySummary />
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
        <p className="font-semibold text-white">Next steps for beginners</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Pick one placeholder above and add a tiny improvement.</li>
          <li>Use Tailwind classes to style buttons, inputs, or cards.</li>
          <li>Share your change as a pull request and ask for feedback.</li>
        </ul>
        {/* BEGINNER: Add your own quick-start steps or learning resources here */}
      </div>
    </div>
  )
}
