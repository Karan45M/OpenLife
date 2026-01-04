import { Routes, Route } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contribute from './pages/Contribute'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseLayout title="OpenLife" subtitle="Daily Workflow & Time Management">
            <Home />
          </BaseLayout>
        }
      />
      <Route
        path="/about"
        element={
          <BaseLayout title="About OpenLife">
            <About />
          </BaseLayout>
        }
      />
      <Route
        path="/contribute"
        element={
          <BaseLayout title="Contribute to OpenLife">
            <Contribute />
          </BaseLayout>
        }
      />
    </Routes>
  )
}
