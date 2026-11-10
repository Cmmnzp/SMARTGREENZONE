
import {
  Activity,
  ArrowLeft,
  Database,
  Droplets,
  Leaf,
  Radio,
  Sprout,
  Thermometer,
  Wifi,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandLogo from '../components/BrandLogo'

const modules = [
  {
    icon: Thermometer,
    title: 'Variables ambientales',
    description: 'Temperatura del aire y del suelo, humedad y condiciones ambientales.',
  },
  {
    icon: Droplets,
    title: 'Humedad del suelo',
    description: 'Consulta de las mediciones de humedad de los cultivos.',
  },
  {
    icon: Radio,
    title: 'Dispositivos IoT',
    description: 'Estado de comunicación de los dispositivos ESP32.',
  },
  {
    icon: Sprout,
    title: 'Sistema de riego',
    description: 'Seguimiento de los modos automático y manual de riego.',
  },
  {
    icon: Database,
    title: 'Datos históricos',
    description: 'Consulta y análisis de los registros almacenados.',
  },
  {
    icon: Activity,
    title: 'Monitoreo',
    description: 'Visualización centralizada de las variables del sistema.',
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F5F8FA]">

      {/* Encabezado */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/">
            <BrandLogo />
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-[#062331] transition hover:bg-slate-50"
          >
            <ArrowLeft size={17} />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-10">

        {/* Presentación */}
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8BEA00]/40 bg-[#8BEA00]/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#68B900]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#416F00]">
              Plataforma de monitoreo IoT
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#062331] sm:text-5xl">
            Centro de monitoreo
            <span className="text-[#68B900]"> SmartGreenZone</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
            Espacio centralizado para supervisar las variables
            ambientales, los dispositivos IoT, el comportamiento
            de los cultivos y el sistema de riego inteligente.
          </p>
        </div>

        {/* Estado de integración */}
        <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-[#00C8F5]/30 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00C8F5]/10">
              <Wifi className="text-[#00A6C7]" size={25} />
            </div>

            <div>
              <h2 className="font-bold text-[#062331]">
                Integración de dispositivos IoT
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                La conexión con los servicios de monitoreo se habilitará posteriormente.
              </p>
            </div>
          </div>

          <span className="w-fit rounded-full bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700">
            En preparación
          </span>
        </div>

        {/* Módulos */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-[#062331]">
            Módulos de la plataforma
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Componentes previstos para el monitoreo y la gestión del sistema.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon

            return (
              <article
                key={module.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8BEA00]/15">
                  <Icon className="text-[#568F00]" size={25} />
                </div>

                <h3 className="text-lg font-bold text-[#062331]">
                  {module.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {module.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <span className="text-xs font-semibold text-slate-400">
                    Módulo pendiente de integración
                  </span>
                </div>
              </article>
            )
          })}
        </div>

        {/* Información académica */}
        <div className="mt-12 rounded-2xl bg-[#062331] p-7 text-white">
          <div className="flex items-center gap-3">
            <Leaf className="text-[#8BEA00]" size={27} />
            <h2 className="text-lg font-bold">
              SmartGreenZone · Big Data
            </h2>
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Proyecto académico desarrollado en el contexto de
            la asignatura Big Data de la Universidad de
            Cundinamarca.
          </p>
        </div>

      </main>
    </div>
  )
}
