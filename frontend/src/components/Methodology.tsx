
import {
  ClipboardList,
  Cpu,
  Radio,
  Database,
  Workflow,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const phases = [
  {
    number: '01',
    icon: Cpu,
    title: 'Adquisición de datos',
    description:
      'Los sensores conectados al ESP32 recopilan información relacionada con las condiciones ambientales del entorno monitoreado.',
    activities: [
      'Lectura de sensores ambientales.',
      'Captura de variables de temperatura, humedad e iluminación.',
      'Organización inicial de las mediciones.',
    ],
    color: '#65B900',
    bg: '#F0F9E4',
  },
  {
    number: '02',
    icon: Radio,
    title: 'Transmisión de información',
    description:
      'Los registros obtenidos se transmiten mediante mecanismos de comunicación para permitir su recepción y posterior procesamiento.',
    activities: [
      'Comunicación entre dispositivos.',
      'Envío de registros de medición.',
      'Recepción de información en la infraestructura.',
    ],
    color: '#00BFEA',
    bg: '#E5F9FE',
  },
  {
    number: '03',
    icon: Database,
    title: 'Almacenamiento de datos',
    description:
      'La información se almacena en Azure SQL, donde se organiza para facilitar su administración, consulta y análisis histórico.',
    activities: [
      'Consolidación de registros.',
      'Organización de tablas.',
      'Implementación del modelo dimensional.',
    ],
    color: '#D6A900',
    bg: '#FFF8D9',
  },
  {
    number: '04',
    icon: Workflow,
    title: 'Transformación e integración',
    description:
      'Los datos pasan por procesos ETL que permiten extraer, transformar y cargar la información en el modelo de almacenamiento analítico.',
    activities: [
      'Extracción de registros.',
      'Transformación y preparación.',
      'Carga de datos en las tablas dimensionales.',
    ],
    color: '#64748B',
    bg: '#EEF2F6',
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'Análisis y visualización',
    description:
      'La información estructurada se utiliza para construir indicadores y visualizaciones que facilitan la interpretación de las variables.',
    activities: [
      'Consultas y análisis de información.',
      'Identificación de tendencias y relaciones.',
      'Construcción de visualizaciones en Power BI.',
    ],
    color: '#00BFEA',
    bg: '#E5F9FE',
  },
]

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-[#F7FAF8] px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#8BEA00] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <ClipboardList size={12} className="mr-2" />
            Metodología
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-4xl">
            ¿Cómo desarrollamos
            <span className="text-[#65B900]"> el proyecto?</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            El desarrollo de SmartGreenZone se estructura en etapas
            consecutivas que conectan los dispositivos IoT con la
            infraestructura de almacenamiento y las herramientas de
            análisis de datos.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon

            return (
              <article
                key={phase.number}
                className="relative grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-[75px_1fr_1fr] md:items-start md:p-8"
              >
                <div className="flex items-center gap-4 md:block">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: phase.bg,
                      color: phase.color,
                    }}
                  >
                    <Icon size={23} />
                  </div>

                  <span className="text-sm font-extrabold text-slate-300 md:mt-3 md:block">
                    ETAPA {phase.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#062331]">
                    {phase.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {phase.description}
                  </p>
                </div>

                <div className="rounded-xl bg-[#F7FAF8] p-5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#579900]">
                    Actividades principales
                  </span>

                  <ul className="mt-4 space-y-3">
                    {phase.activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                      >
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0 text-[#65B900]"
                        />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                {index !== phases.length - 1 && (
                  <div className="absolute -bottom-5 left-[47px] z-10 hidden h-4 w-px bg-[#8BEA00] md:block" />
                )}
              </article>
            )
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-[#062331] p-7 text-white md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8BEA00]/15 text-[#8BEA00]">
              <CheckCircle2 size={25} />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8BEA00]">
                Enfoque de desarrollo
              </span>

              <h3 className="mt-2 text-lg font-bold">
                Integración tecnológica y gestión de información
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                La metodología permite relacionar la captura de datos,
                su procesamiento y su análisis dentro de un flujo de
                información integrado.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="#solucion"
            className="inline-flex items-center gap-2 rounded-full bg-[#062331] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#0C4356]"
          >
            Conocer la solución tecnológica
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}
