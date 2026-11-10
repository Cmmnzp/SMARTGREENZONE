
import {
  Target,
  Eye,
  Sprout,
  Database,
  Cpu,
  Leaf,
  ArrowRight,
} from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Nuestro propósito',
    description:
      'Desarrollar una solución tecnológica que facilite el seguimiento de las condiciones ambientales de los cultivos mediante sensores y adquisición de datos.',
  },
  {
    icon: Database,
    title: 'Gestión de datos',
    description:
      'Integrar tecnologías de almacenamiento y análisis de información para organizar las mediciones y facilitar su consulta.',
  },
  {
    icon: Sprout,
    title: 'Agricultura inteligente',
    description:
      'Aprovechar la tecnología IoT para apoyar el monitoreo agrícola y promover un uso más eficiente de los recursos.',
  },
]

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-[#F7FAF8] py-24"
    >
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#8BEA00]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#00C8F5]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Encabezado */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8BEA00]/40 bg-[#8BEA00]/10 px-4 py-2">
            <Leaf size={15} className="text-[#568F00]" />

            <span className="text-xs font-bold uppercase tracking-wider text-[#416F00]">
              Conoce nuestro proyecto
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#062331] sm:text-5xl">
            Tecnología al servicio de la{' '}
            <span className="text-[#68B900]">
              agricultura.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
            SmartGreenZone es un proyecto académico que
            integra Internet de las Cosas (IoT), sensores
            inteligentes y gestión de datos para contribuir
            al monitoreo de las condiciones ambientales
            en entornos agrícolas.
          </p>

        </div>

        {/* Presentación principal */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <span className="text-sm font-bold uppercase tracking-widest text-[#68B900]">
              ¿Quiénes somos?
            </span>

            <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#062331] sm:text-4xl">
              Una iniciativa que conecta el campo con la tecnología.
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-500">
              SmartGreenZone propone un ecosistema de
              monitoreo agrícola basado en dispositivos
              electrónicos y tecnologías de comunicación.
              Su finalidad es adquirir información del
              entorno, organizar las mediciones y facilitar
              su visualización para apoyar el seguimiento
              de los cultivos.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-500">
              El proyecto se desarrolla en el contexto
              académico de la asignatura Big Data de la
              Universidad de Cundinamarca, relacionando
              la adquisición de datos IoT con su
              almacenamiento, procesamiento y consulta.
            </p>

            <a
              href="#solucion"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#062331] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0B4655]"
            >
              Conocer nuestra solución
              <ArrowRight size={18} />
            </a>

          </div>

          {/* Panel visual */}
          <div className="relative">

            <div className="absolute inset-5 rounded-[2rem] bg-gradient-to-br from-[#8BEA00]/20 to-[#00C8F5]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-[#062331]/5 sm:p-10">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    SmartGreenZone
                  </p>

                  <h4 className="mt-2 text-xl font-extrabold text-[#062331]">
                    Ecosistema IoT
                  </h4>
                </div>

                <div className="rounded-2xl bg-[#8BEA00]/15 p-4">
                  <Sprout size={30} className="text-[#568F00]" />
                </div>

              </div>

              <div className="my-10 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-[#F3F8F0] p-5">
                  <Cpu size={28} className="text-[#68B900]" />

                  <h5 className="mt-4 font-bold text-[#062331]">
                    Dispositivos
                  </h5>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    ESP32 y adquisición de datos.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#EFF9FC] p-5">
                  <Database size={28} className="text-[#00A6C7]" />

                  <h5 className="mt-4 font-bold text-[#062331]">
                    Información
                  </h5>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Almacenamiento y análisis.
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl bg-[#062331] p-5 text-white">
                  <div className="flex items-center gap-3">
                    <Leaf size={25} className="text-[#8BEA00]" />

                    <div>
                      <h5 className="font-bold">
                        Agricultura inteligente
                      </h5>

                      <p className="mt-1 text-xs text-slate-300">
                        Tecnología aplicada al monitoreo agrícola.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-xs font-semibold text-slate-400">
                  Universidad de Cundinamarca
                </span>

                <span className="text-xs font-bold text-[#68B900]">
                  Big Data
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Pilares del proyecto */}
        <div className="mt-24">

          <div className="mb-10 text-center">
            <h3 className="text-3xl font-extrabold text-[#062331]">
              ¿Qué nos impulsa?
            </h3>

            <p className="mt-3 text-slate-500">
              Los pilares que orientan el desarrollo de SmartGreenZone.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {pillars.map((pillar) => {
              const Icon = pillar.icon

              return (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8BEA00]/15">
                    <Icon size={27} className="text-[#568F00]" />
                  </div>

                  <h4 className="text-xl font-bold text-[#062331]">
                    {pillar.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {pillar.description}
                  </p>
                </article>
              )
            })}

          </div>
        </div>

        {/* Identificación académica */}
        <div className="mt-20 rounded-3xl border border-[#00C8F5]/20 bg-white p-8 shadow-sm sm:p-10">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#68B900]">
                Contexto académico
              </span>

              <h3 className="mt-3 text-2xl font-extrabold text-[#062331]">
                Universidad de Cundinamarca
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Asignatura: Big Data
              </p>
            </div>

            <div className="rounded-2xl bg-[#062331] px-7 py-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8BEA00]">
                Proyecto
              </p>

              <p className="mt-2 text-xl font-extrabold">
                SmartGreenZone
              </p>

              <p className="mt-1 text-xs text-slate-300">
                IoT · Datos · Agricultura inteligente
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
