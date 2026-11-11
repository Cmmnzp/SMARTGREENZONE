
import {
  Activity,
  CheckCircle2,
  Database,
  Layers3,
  Radio,
  BarChart3,
  Cpu,
  ArrowUpRight,
  FlaskConical,
} from 'lucide-react'

const results = [
  {
    icon: Cpu,
    title: 'Adquisición de datos IoT',
    description:
      'Integración de un ESP32 con cinco sensores físicos para capturar seis variables relacionadas con las condiciones ambientales y del suelo.',
    status: 'Implementado',
  },
  {
    icon: Radio,
    title: 'Comunicación de dispositivos',
    description:
      'Transmisión de las lecturas mediante MQTT e integración de flujos de procesamiento y visualización en Node-RED.',
    status: 'Implementado',
  },
  {
    icon: Database,
    title: 'Almacenamiento en Azure SQL',
    description:
      'Consolidación de 1.500.000 registros de mediciones en la base de datos SmartGreenZoneDB.',
    status: 'Implementado',
  },
  {
    icon: Layers3,
    title: 'Modelo dimensional',
    description:
      'Construcción de un modelo estrella con una tabla de hechos y cinco dimensiones para organizar la información.',
    status: 'Implementado',
  },
  {
    icon: Activity,
    title: 'Validación y análisis',
    description:
      'Verificación de integridad referencial, registros únicos y consultas analíticas sobre las mediciones almacenadas.',
    status: 'Implementado',
  },
  {
    icon: BarChart3,
    title: 'Integración con Power BI',
    description:
      'Conexión de las seis tablas del modelo dimensional y configuración de relaciones para el análisis de los datos.',
    status: 'En desarrollo',
  },
]

const indicators = [
  { value: '1.500.000', label: 'Registros almacenados' },
  { value: '6', label: 'Variables monitoreadas' },
  { value: '5', label: 'Sensores físicos' },
  { value: '6', label: 'Tablas del modelo estrella' },
]

export default function Results() {
  return (
    <section id="resultados" className="relative overflow-hidden bg-[#062331] px-6 py-24 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8BEA00]/30 bg-[#8BEA00]/10 px-4 py-2 text-sm font-semibold text-[#8BEA00]">
            <CheckCircle2 size={16} />
            Avances del proyecto
          </span>

          <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-5xl">
            Resultados <span className="text-[#8BEA00]">alcanzados</span>
          </h2>

          <p className="text-lg leading-relaxed text-slate-300">
            SmartGreenZone ha permitido integrar la adquisición de datos IoT,
            su almacenamiento en la nube y la estructuración de un entorno de
            análisis basado en Big Data. Los resultados corresponden a la
            implementación y evaluación de un escenario con datos simulados.
          </p>
        </div>

        <div className="mb-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {indicators.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="mb-2 text-3xl font-bold text-[#8BEA00] md:text-4xl">
                {item.value}
              </p>
              <p className="text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {results.map((item, index) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#00C8F5]/50"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-xl bg-[#00C8F5]/10 p-3 text-[#00C8F5]">
                    <Icon size={25} />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      item.status === 'Implementado'
                        ? 'bg-[#8BEA00]'
                        : 'bg-[#FFD400]'
                    }`}
                  />
                  <span
                    className={
                      item.status === 'Implementado'
                        ? 'text-[#8BEA00]'
                        : 'text-[#FFD400]'
                    }
                  >
                    {item.status}
                  </span>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/5 p-7 md:grid-cols-[auto_1fr] md:items-center">
          <div className="rounded-xl bg-[#FFD400]/10 p-4 text-[#FFD400]">
            <FlaskConical size={30} />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold text-[#FFD400]">
              Alcance de los resultados
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Las mediciones utilizadas para la simulación y el análisis no
              representan condiciones reales de un cultivo. Por tanto, los
              patrones y correlaciones identificados describen el conjunto de
              datos procesado y no constituyen diagnósticos agronómicos.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <a
            href="#referencias"
            className="inline-flex items-center gap-2 rounded-full bg-[#8BEA00] px-6 py-3 font-bold text-[#062331] transition hover:bg-white"
          >
            Consultar referencias
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
