
import {
  Droplets,
  FlaskConical,
  ScanEye,
  AlertTriangle,
  ArrowRight,
  Sprout,
} from 'lucide-react'

const problems = [
  {
    icon: Droplets,
    number: '01',
    title: 'Uso ineficiente del agua',
    description:
      'La falta de información continua sobre las condiciones de humedad dificulta determinar cuándo y cuánto regar los cultivos.',
    color: '#00C8F5',
    bg: '#E5F9FE',
  },
  {
    icon: FlaskConical,
    number: '02',
    title: 'Aplicación poco precisa de insumos',
    description:
      'La ausencia de datos organizados sobre las condiciones del entorno puede generar aplicaciones innecesarias de fertilizantes y otros insumos.',
    color: '#D6A900',
    bg: '#FFF8D9',
  },
  {
    icon: ScanEye,
    number: '03',
    title: 'Detección tardía de enfermedades',
    description:
      'La identificación tardía de cambios en las hojas puede dificultar la prevención y el tratamiento oportuno de posibles afectaciones.',
    color: '#69B900',
    bg: '#F0F9E4',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="bg-[#F7FAF8] px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#8BEA00] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <AlertTriangle size={12} className="mr-2" />
            Planteamiento del problema
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-4xl">
            ¿Qué problema busca resolver
            <span className="text-[#65B900]"> SmartGreenZone?</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            La gestión agrícola requiere información oportuna y confiable
            sobre las condiciones del cultivo. Sin un monitoreo constante,
            algunas decisiones relacionadas con el riego, el uso de insumos
            y la identificación de posibles enfermedades pueden realizarse
            sin contar con suficientes datos de apoyo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((problem) => {
            const Icon = problem.icon

            return (
              <article
                key={problem.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: problem.bg, color: problem.color }}
                  >
                    <Icon size={23} />
                  </div>

                  <span className="text-sm font-extrabold text-slate-300">
                    {problem.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#062331]">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {problem.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-[#062331] p-7 text-white md:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#8BEA00]/15 text-[#8BEA00]">
              <Sprout size={28} />
            </div>

            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8BEA00]">
                Necesidad identificada
              </span>

              <h3 className="mt-2 text-xl font-bold">
                Integrar monitoreo, datos y tecnología para apoyar la gestión agrícola.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                SmartGreenZone plantea una solución basada en IoT y gestión
                de datos que permite recopilar, almacenar y analizar
                información ambiental para apoyar la toma de decisiones.
              </p>
            </div>

            <a
              href="#justificacion"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#8BEA00] px-5 py-3 text-xs font-bold text-[#062331] transition hover:bg-white"
            >
              Ver justificación
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <p className="mt-5 text-xs leading-6 text-slate-400">
          Nota: las situaciones descritas corresponden al contexto del
          problema que aborda el proyecto; no representan resultados
          experimentales de un cultivo real.
        </p>

      </div>
    </section>
  )
}
