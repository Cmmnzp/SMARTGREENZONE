
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#062331] text-white px-6 text-center">
      <h1 className="text-6xl font-bold text-[#8BEA00]">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Página no encontrada
      </h2>

      <p className="mt-3 text-slate-300">
        La sección que buscas no está disponible.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-[#8BEA00] px-6 py-3 font-semibold text-[#062331] hover:opacity-90 transition"
      >
        Volver al inicio
      </Link>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
