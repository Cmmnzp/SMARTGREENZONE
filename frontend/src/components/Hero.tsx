
import {
  ArrowRight,
  Play,
  Sprout,
  Wifi,
  Droplets,
  Leaf,
  Database,
  GraduationCap,
  Cpu,
} from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white"
    >
      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#8BEA00]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#00C8F5]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">

        {/* COLUMNA IZQUIERDA */}
        <div>

          {/* Identificación académica */}
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8BEA00]/40 bg-[#8BEA00]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#68B900]" />

              <span className="text-xs font-bold uppercase tracking-wider text-[#416F00]">
                Proyecto académico · Big Data
              </span>
            </div>
          </div>

          {/* Universidad */}
          <div className="mb-7 border-l-4 border-[#00C8F5] pl-4">
            <p className="text-sm font-extrabold tracking-wide text-[#062331]">
              UNIVERSIDAD DE CUNDINAMARCA
            </p>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Asignatura: Big Data
            </p>
          </div>

          {/* Título principal */}
          <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.12] tracking-tight text-[#062331] sm:text-6xl lg:text-7xl">
            Cultivando el futuro con{' '}
            <span className="text-[#68B900]">
              inteligencia tecnológica.
            </span>
          </h1>

          {/* Descripción */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
            SmartGreenZone es una propuesta de agricultura
            inteligente que integra tecnologías IoT,
            adquisición de datos y análisis de información
            para monitorear variables ambientales, optimizar
            recursos y promover una gestión agrícola más
            eficiente y sostenible.
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-wrap items-center gap-4">

            <a
              href="#solucion"
              className="inline-flex items-center gap-3 rounded-full bg-[#062331] px-7 py-4 font-semibold text-white shadow-lg shadow-[#062331]/15 transition hover:-translate-y-1 hover:bg-[#0B4655]"
            >
              Conocer la solución
              <ArrowRight size={19} />
            </a>

            <a
              href="#arquitectura"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-7 py-4 font-semibold text-[#062331] transition hover:border-[#8BEA00] hover:bg-[#8BEA00]/10"
            >
              <Play size={17} />
              Explorar tecnología
            </a>

          </div>

          {/* Indicadores académicos */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">

            <div>
              <Wifi size={22} className="mb-2 text-[#00A6C7]" />
              <p className="text-xl font-extrabold text-[#062331]">
                IoT
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Conectividad inteligente
              </p>
            </div>

            <div>
              <Database size={22} className="mb-2 text-[#68B900]" />
              <p className="text-xl font-extrabold text-[#062331]">
                Big Data
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Análisis de información
              </p>
            </div>

            <div>
              <GraduationCap size={22} className="mb-2 text-[#00A6C7]" />
              <p className="text-xl font-extrabold text-[#062331]">
                UDEC
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Innovación académica
              </p>
            </div>

          </div>
        </div>

        {/* COLUMNA DERECHA: ILUSTRACIÓN */}
        <div className="relative mx-auto w-full max-w-xl">

          <div className="absolute inset-5 rounded-[3rem] bg-gradient-to-br from-[#8BEA00]/20 via-[#00C8F5]/10 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-gradient-to-br from-[#F4F9F0] to-[#EDF8FA] p-7 shadow-2xl shadow-[#062331]/10 sm:p-10">

            {/* Encabezado */}
            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Smart Agriculture
                </p>

                <p className="mt-1 text-lg font-extrabold text-[#062331]">
                  Ecosistema inteligente
                </p>
              </div>

              <div className="rounded-2xl bg-white p-3 shadow-sm">
                <Sprout size={27} className="text-[#68B900]" />
              </div>

            </div>

            {/* Símbolo central */}
            <div className="relative mt-10 flex h-64 items-center justify-center">

              <div className="absolute h-56 w-56 rounded-full border border-[#8BEA00]/40" />

              <div className="absolute h-44 w-44 rounded-full border border-dashed border-[#00C8F5]/50" />

              <div className="absolute h-32 w-32 rounded-full bg-[#8BEA00]/15 blur-xl" />

              <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] bg-[#062331] shadow-2xl shadow-[#062331]/30">

                <Leaf
                  size={76}
                  className="text-[#8BEA00]"
                  strokeWidth={1.5}
                />

                <span className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#00C8F5] text-[#062331] shadow-lg">
                  <Wifi size={19} />
                </span>

              </div>

              {/* Elementos decorativos */}
              <div className="absolute left-0 top-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg">
                <Droplets className="text-[#00A6C7]" />
              </div>

              <div className="absolute bottom-5 right-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg">
                <Sprout className="text-[#68B900]" />
              </div>

              <div className="absolute right-0 top-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg">
                <Cpu className="text-[#00A6C7]" />
              </div>

            </div>

            {/* Cuatro palabras clave */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

              {/* Conectividad */}
              <div className="flex flex-col items-center justify-center rounded-xl bg-white px-2 py-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <Wifi className="text-[#00A6C7]" size={22} />

                <p className="mt-2 text-[11px] font-bold text-[#062331]">
                  Conectividad
                </p>
              </div>

              {/* Cultivos */}
              <div className="flex flex-col items-center justify-center rounded-xl bg-white px-2 py-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <Sprout className="text-[#68B900]" size={22} />

                <p className="mt-2 text-[11px] font-bold text-[#062331]">
                  Cultivos
                </p>
              </div>

              {/* Recursos */}
              <div className="flex flex-col items-center justify-center rounded-xl bg-white px-2 py-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <Droplets className="text-[#00A6C7]" size={22} />

                <p className="mt-2 text-[11px] font-bold text-[#062331]">
                  Recursos
                </p>
              </div>

              {/* Tecnología sostenible */}
              <div className="flex flex-col items-center justify-center rounded-xl bg-white px-2 py-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <Leaf className="text-[#68B900]" size={22} />

                <p className="mt-2 text-[11px] font-bold leading-4 text-[#062331]">
                  Tecnología sostenible
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
