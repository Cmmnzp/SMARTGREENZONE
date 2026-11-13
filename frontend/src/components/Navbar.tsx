
import { useEffect, useRef, useState } from 'react'
import {
  Menu,
  X,
  ArrowUpRight,
  LayoutDashboard,
  ChevronDown,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'

const navigationGroups = [
  {
    label: 'Proyecto',
    links: [
      { label: 'Identificación del proyecto', href: '#proyecto' },
      { label: 'Planteamiento del problema', href: '#problema' },
      { label: 'Justificación', href: '#justificacion' },
      { label: 'Objetivos', href: '#objetivos' },
    ],
  },
  {
    label: 'Fundamentación',
    links: [
      { label: 'Marco referencial', href: '#marco-referencial' },
      { label: 'Metodología', href: '#metodologia' },
    ],
  },
  {
    label: 'Solución tecnológica',
    links: [
      { label: 'Solución IoT', href: '#solucion' },
      { label: 'Arquitectura', href: '#arquitectura' },
    ],
  },
  {
    label: 'Gestión de datos',
    links: [
      { label: 'Gestión de datos', href: '#datos' },
      { label: 'Análisis exploratorio', href: '#analisis' },
    ],
  },
  {
    label: 'Conocimiento',
    links: [
      { label: 'Conocimientos identificados', href: '#conocimientos' },
      { label: 'Decisiones sustentadas', href: '#decisiones' },
      { label: 'Resultados', href: '#resultados' },
      { label: 'Referencias', href: '#referencias' },
    ],
  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navbarRef = useRef<HTMLElement>(null)

  // Alternar desplegables: solamente uno puede estar abierto.
  const toggleDropdown = (label: string) => {
    setActiveDropdown((current) =>
      current === label ? null : label
    )
  }

  // Cerrar todos los menús.
  const closeMenus = () => {
    setActiveDropdown(null)
    setMenuOpen(false)
  }

  // Cerrar al hacer clic fuera del Navbar.
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
        setMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenus()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Navegación principal"
      >
        {/* LOGOTIPO */}
        <Link
          to="/"
          onClick={closeMenus}
          aria-label="SmartGreenZone, inicio"
          className="shrink-0"
        >
          <BrandLogo />
        </Link>

        {/* NAVEGACIÓN DE ESCRITORIO */}
        <div className="hidden items-center gap-6 xl:flex">

          <a
            href="#inicio"
            onClick={closeMenus}
            className="text-sm font-semibold text-[#062331] transition hover:text-[#68B900]"
          >
            Inicio
          </a>

          {navigationGroups.map((group) => {
            const isOpen = activeDropdown === group.label

            return (
              <div key={group.label} className="relative">

                {/* BOTÓN DEL DESPLEGABLE */}
                <button
                  type="button"
                  onClick={() => toggleDropdown(group.label)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 text-sm font-medium transition ${
                    isOpen
                      ? 'text-[#416F00]'
                      : 'text-slate-600 hover:text-[#68B900]'
                  }`}
                >
                  {group.label}

                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* CONTENIDO DEL DESPLEGABLE */}
                {isOpen && (
                  <div className="absolute left-0 top-full z-50 w-64 pt-4">
                    <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-xl">

                      {group.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={closeMenus}
                          className="block rounded-lg px-4 py-3 text-sm text-slate-600 transition hover:bg-[#8BEA00]/10 hover:text-[#416F00]"
                        >
                          {link.label}
                        </a>
                      ))}

                    </div>
                  </div>
                )}

              </div>
            )
          })}
        </div>

        {/* BOTONES DE ESCRITORIO */}
        <div className="hidden items-center gap-3 xl:flex">

          <Link
            to="/dashboard"
            onClick={closeMenus}
            className="inline-flex items-center gap-2 rounded-full border border-[#8BEA00]/50 bg-[#8BEA00]/10 px-4 py-3 text-sm font-bold text-[#416F00] transition hover:bg-[#8BEA00]/20"
          >
            <LayoutDashboard size={17} />
            Dashboard
          </Link>

          <a
            href="#proyecto"
            onClick={closeMenus}
            className="inline-flex items-center gap-2 rounded-full bg-[#062331] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0B4655]"
          >
            Explorar proyecto
            <ArrowUpRight size={17} />
          </a>

        </div>

        {/* BOTÓN DE MENÚ MÓVIL */}
        <button
          type="button"
          onClick={() => {
            setMenuOpen((current) => !current)
            setActiveDropdown(null)
          }}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-[#062331] transition hover:bg-slate-100 xl:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </nav>

      {/* MENÚ MÓVIL */}
      {menuOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-slate-100 bg-white px-6 py-5 shadow-lg xl:hidden">

          <div className="flex flex-col gap-4">

            <a
              href="#inicio"
              onClick={closeMenus}
              className="font-semibold text-[#062331]"
            >
              Inicio
            </a>

            {navigationGroups.map((group) => {
              const isOpen = activeDropdown === group.label

              return (
                <div
                  key={group.label}
                  className="border-b border-slate-100 pb-3"
                >

                  <button
                    type="button"
                    onClick={() => toggleDropdown(group.label)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-2 text-left font-semibold text-slate-700"
                  >
                    {group.label}

                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-2 flex flex-col gap-3 pl-4">

                      {group.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={closeMenus}
                          className="text-sm text-slate-600 transition hover:text-[#68B900]"
                        >
                          {link.label}
                        </a>
                      ))}

                    </div>
                  )}

                </div>
              )
            })}

            {/* DASHBOARD MÓVIL */}
            <Link
              to="/dashboard"
              onClick={closeMenus}
              className="flex items-center justify-center gap-2 rounded-full border border-[#8BEA00]/50 bg-[#8BEA00]/10 px-5 py-3 font-bold text-[#416F00]"
            >
              <LayoutDashboard size={18} />
              Centro de monitoreo
            </Link>

            {/* EXPLORAR PROYECTO */}
            <a
              href="#proyecto"
              onClick={closeMenus}
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
