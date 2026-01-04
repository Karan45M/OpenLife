import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contribute from './pages/Contribute'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950/60 text-slate-100">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-12 pt-2 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
