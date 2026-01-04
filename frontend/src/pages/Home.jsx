import Button from '../components/Button'
import GlassCard from '../components/GlassCard'

const Section = ({ title, children }) => (
  <GlassCard className="p-6">
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="text-sm leading-relaxed text-slate-200/85">{children}</div>
    </div>
  </GlassCard>
)

export default function Home() {
  return (
    <div className="space-y-10">
      <GlassCard className="p-8">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">Open source · Productivity</p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              OpenLife
              <span className="block text-lg font-semibold text-emerald-200 sm:text-xl">
                An Open-Source Operating System for Personal Productivity
              </span>
            </h1>
            <p className="text-base text-slate-200/85">
              OpenLife is a community-built personal productivity manager. It helps you map where your time goes, protect deep work,
              and share rituals that keep life organized. Built for curious contributors, researchers, and everyday makers who want
              an open tool they can shape together.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/contribute" variant="primary">
                Get Started
              </Button>
              <Button to="/about" variant="secondary">
                How to Contribute
              </Button>
              <Button variant="outline" to="https://github.com/">
                View on GitHub
              </Button>
            </div>
          </div>
          <div className="grid gap-3 text-sm text-slate-200/85">
            {[
              { title: 'Time you control', body: 'Track focus, admin, and recovery blocks with transparent, privacy-first data.' },
              { title: 'Open by design', body: 'Every component and flow is open for remixing—no black boxes or locked patterns.' },
              { title: 'Built to extend', body: 'Add new cards, animations, or integrations without fighting the codebase.' },
            ].map((item) => (
              <GlassCard key={item.title} className="p-4">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-slate-200/80">{item.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </GlassCard>

      <div className="grid gap-4 lg:grid-cols-2">
        <Section title="What is OpenLife?">
          OpenLife is a minimal, extensible front-end for planning days, capturing habits, and running personal sprints. It combines
          glassmorphism UI with clear, readable code so anyone can add views, animations, or data connectors.
        </Section>
        <Section title="Why Open Source?">
          Productivity should be transparent, not locked behind proprietary dashboards. OpenLife invites contributors to build shared
          rituals, audit how data is handled, and propose improvements that benefit everyone.
        </Section>
      </div>

      <Section title="Planned Features">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            'Time-blocking presets with focus and recovery guards.',
            'Ritual templates for mornings, deep work, and shutdown routines.',
            'Lightweight analytics to spot time leaks without over-collecting data.',
            'Mobile-friendly quick capture for tasks, notes, and interruptions.',
            'Community gallery of UI tweaks, themes, and micro-animations.',
            'Open API layer to sync with calendars and task sources.',
          ].map((item) => (
            <li key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200/90">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Contributor-Friendly Philosophy">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: 'Readable code first',
              body: 'Small components, clear naming, and comments where it saves time for newcomers.',
            },
            {
              title: 'Zero heavy dependencies',
              body: 'Pure Tailwind utilities and React components—no UI kits to unlearn.',
            },
            {
              title: 'Extend, don’t rewrite',
              body: 'Add cards, animations, or routes without touching the foundation.',
            },
            {
              title: 'Design invites changes',
              body: 'Glass cards and gradients are simple to restyle; contributors can iterate fast.',
            },
          ].map((item) => (
            <GlassCard key={item.title} className="p-4">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs text-slate-200/80">{item.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  )
}
