
import {
  Sprout,
  Cpu,
  GraduationCap,
  Database,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const reasons = [
  {
    icon: Sprout,
    number: '01',
    title: 'Aporte agrícola',
    description:
      'Promueve el monitoreo de condiciones ambientales que pueden influir en el desarrollo de los cultivos, facilitando decisiones mejor fundamentadas.',
    color: '#69B900',
    bg: '#F0F9E4',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Aporte tecnológico',
    description:
      'Integra dispositivos IoT, sensores y herramientas de comunicación para automatizar la adquisición de información ambiental.',
    color: '#00B9E5',
    bg: '#E5F9FE',
  },
  {
    icon: Database,
    number: '03',
    title: 'Aporte en Big Data',
    description:
      'Organiza grandes volúmenes de registros mediante procesos de transformación, almacenamiento y modelado dimensional para facilitar su análisis.',
    color: '#D6A900',
    bg: '#FFF8D9',
  },
  {
    icon: GraduationCap,
    number: '04',
    title: 'Aporte académico',
    description:
      'Permite aplicar conocimientos de ingeniería, Internet de las Cosas y gestión de datos en el desarrollo de una solución tecnológica integrada.',
    color: '#64748B',
    bg: '#EEF2F6',
  },
]

export default function Justification() {
  return (
    <section id="justificacion" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#8BEA00] bg-[#F7FBEF] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <CheckCircle2 size={12} className="mr-2" />
            Justificación
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-4xl">
            ¿Por qué es importante
            <span className="text-[#65B900]"> SmartGreenZone?</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            SmartGreenZone surge como una propuesta que integra tecnologías
            de monitoreo y gestión de datos para aportar información
            organizada al contexto agrícola. Su importancia radica en
            conectar la adquisición de datos con su almacenamiento,
            procesamiento y análisis.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <article
                key={reason.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: reason.bg,
                      color: reason.color,
                    }}
                  >
                    <Icon size={23} />
                  </div>

                  <span className="text-sm font-extrabold text-slate-300">
                    {reason.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#062331]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {reason.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 grid gap-8 rounded-2xl border border-[#00C8F5]/40 bg-[#F5FCFE] p-7 md:grid-cols-[1fr_280px] md:items-center md:p-9">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#009DC2]">
              Valor de la propuesta
            </span>

            <h3 className="mt-3 text-xl font-bold text-[#062331]">
              De los datos ambientales al conocimiento útil
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              El proyecto busca demostrar cómo los datos recopilados por
              sensores pueden convertirse en información estructurada y
              visualizaciones que faciliten la interpretación de las
              condiciones monitoreadas.
            </p>
          </div>

          <div className="rounded-xl bg-[#062331] p-6 text-white">
            <TrendingUp size={25} className="text-[#8BEA00]" />

            <p className="mt-4 text-sm font-bold">
              Una solución integrada
            </p>

            <div className="mt-4 space-y-3 text-xs text-slate-300">
              {[
                'Adquisición de datos',
                'Almacenamiento organizado',
                'Transformación de información',
                'Análisis y visualización',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0 text-[#8BEA00]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="#objetivos"
            className="inline-flex items-center gap-2 rounded-full bg-[#062331] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#0C4356]"
          >
            Conocer los objetivos
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}
