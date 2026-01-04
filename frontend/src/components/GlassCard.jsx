export default function GlassCard({ children, className = '', ...props }) {
  return (
    <div
      className={`glass-sheen rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
