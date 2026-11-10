
import { useState } from 'react'
import {
  Menu,
  X,
  ArrowUpRight,
  LayoutDashboard,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Solución IoT', href: '#solucion' },
  { label: 'Arquitectura', href: '#arquitectura' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logotipo */}
        <Link to="/" aria-label="SmartGreenZone, inicio">
          <BrandLogo />
        </Link>

        {/* Navegación escritorio */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#68B900]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botones escritorio */}
        <div className="hidden items-center gap-3 lg:flex">

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-full border border-[#8BEA00]/50 bg-[#8BEA00]/10 px-4 py-3 text-sm font-bold text-[#416F00] transition hover:bg-[#8BEA00]/20"
          >
            <LayoutDashboard size={17} />
            Dashboard
          </Link>

          <a
            href="#solucion"
            className="inline-flex items-center gap-2 rounded-full bg-[#062331] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0B4655]"
          >
            Explorar proyecto
            <ArrowUpRight size={17} />
          </a>

        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-[#062331] hover:bg-slate-100 lg:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-5">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700 hover:text-[#68B900]"
              >
                {link.label}
              </a>
            ))}

            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-[#8BEA00]/50 bg-[#8BEA00]/10 px-5 py-3 font-bold text-[#416F00]"
            >
              <LayoutDashboard size={18} />
              Centro de monitoreo
            </Link>

            <a
              href="#solucion"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#062331] px-5 py-3 font-semibold text-white"
            >
              Explorar proyecto
              <ArrowUpRight size={17} />
            </a>

          </div>
        </div>
      )}
    </header>
  )
}
