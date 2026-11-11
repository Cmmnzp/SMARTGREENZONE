
import {
  Target,
  CheckCircle2,
  Cpu,
  Database,
  BarChart3,
  ArrowRight,
  Sprout,
} from 'lucide-react'

const objectives = [
  {
    icon: Cpu,
    number: '01',
    title: 'Adquirir información ambiental',
    description:
      'Integrar sensores y dispositivos IoT basados en ESP32 para recopilar variables ambientales relacionadas con las condiciones del entorno agrícola.',
  },
  {
    icon: Database,
    number: '02',
    title: 'Almacenar y organizar los datos',
    description:
      'Implementar procesos de almacenamiento y transformación de los registros en una estructura de datos que facilite su consulta y administración.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Analizar la información recopilada',
    description:
      'Aplicar herramientas de análisis y visualización para identificar comportamientos, tendencias y relaciones entre las variables monitoreadas.',
  },
  {
    icon: Sprout,
    number: '04',
    title: 'Apoyar la toma de decisiones',
    description:
      'Generar información organizada y comprensible que sirva como apoyo para interpretar las condiciones ambientales del escenario agrícola monitoreado.',
  },
]

export default function Objectives() {
  return (
    <section id="objetivos" className="bg-[#F7FAF8] px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#8BEA00] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <Target size={12} className="mr-2" />
            Objetivos del proyecto
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-4xl">
            Lo que buscamos
            <span className="text-[#65B900]"> alcanzar.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            SmartGreenZone articula la adquisición, gestión y análisis de
            datos ambientales mediante una solución tecnológica orientada
            al contexto agrícola.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl bg-[#062331] p-8 text-white md:p-10">
          <div className="grid gap-7 md:grid-cols-[1fr_180px] md:items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8BEA00]">
                Objetivo general
              </span>

              <h3 className="mt-4 text-xl font-bold leading-relaxed md:text-2xl">
                Desarrollar una solución tecnológica basada en IoT y gestión
                de datos que permita monitorear variables ambientales,
                almacenar y procesar la información recopilada, y generar
                análisis que apoyen la toma de decisiones en el contexto
                agrícola.
              </h3>
            </div>

            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-[#8BEA00]/40 bg-[#8BEA00]/10">
              <Target size={58} className="text-[#8BEA00]" strokeWidth={1.3} />
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
                Objetivos específicos
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-[#062331]">
                Cuatro líneas de desarrollo
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Cada objetivo representa una etapa del proceso tecnológico
              y de gestión de información del proyecto.
            </p>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {objectives.map((objective) => {
              const Icon = objective.icon

              return (
                <article
                  key={objective.number}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8BEA00]/15 text-[#579900]">
                      <Icon size={22} />
                    </div>

                    <span className="text-sm font-extrabold text-slate-300">
                      {objective.number}
                    </span>
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-[#062331]">
                    {objective.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {objective.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#579900]">
                    <CheckCircle2 size={15} />
                    Línea de desarrollo
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <a
            href="#marco-referencial"
            className="inline-flex items-center gap-2 rounded-full bg-[#062331] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#0C4356]"
          >
            Continuar al marco referencial
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}
