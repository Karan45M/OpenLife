import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent px-[var(--page-gutter)] py-6 backdrop-blur">
      <div className="flex w-full flex-col items-center justify-between gap-4 text-xs text-slate-400 md:flex-row">
        
        {/* Left Side: Tech Stack */}
        <div className="flex items-center gap-2">
          <span>Built with React + Vite + Tailwind</span>
        </div>

        {/* Center/Right: Navigation Links */}
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/contribute" className="hover:text-white transition-colors">Contribute</Link>
          <Link to="/showcase" className="hover:text-white transition-colors">Showcase</Link>
        </nav>

        {/* Right Side: Copyright/Status */}
        <div>
          <span>&copy; {new Date().getFullYear()} OpenLife</span>
        </div>
        
      </div>
    </footer>
  );
}
