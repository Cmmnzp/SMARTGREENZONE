
import {
  Cpu,
  Radio,
  Wifi,
  Database,
  BarChart3,
  Layers3,
  ArrowDown,
  ArrowRight,
  Network,
  Workflow,
  CheckCircle2,
} from 'lucide-react'

import ArchitectureGallery from './ArchitectureGallery'

const layers = [
  {
    number: '01',
    title: 'Capa de adquisición',
    technology: 'Sensores + ESP32',
    description:
      'Captura las variables ambientales y del suelo mediante cinco sensores físicos conectados al microcontrolador.',
    details: [
      'DHT22: temperatura y humedad del aire.',
      'BH1750: intensidad lumínica.',
      'MQ-2: lectura analógica del sensor.',
      'Sensor capacitivo: humedad del suelo.',
      'DS18B20: temperatura del suelo.',
    ],
    icon: Cpu,
    color: '#65B900',
    background: '#F0F9E4',
  },
  {
    number: '02',
    title: 'Capa de comunicación',
    technology: 'Wi-Fi + MQTT',
    description:
      'Transporta las mediciones desde el dispositivo hacia los servicios que reciben y procesan la información.',
    details: [
      'Conectividad inalámbrica Wi-Fi.',
      'Publicación de mensajes MQTT.',
      'Organización mediante tópicos.',
      'Recepción de las mediciones.',
    ],
    icon: Radio,
    color: '#00A8CC',
    background: '#E5F9FE',
  },
  {
    number: '03',
    title: 'Capa de integración',
    technology: 'Node-RED',
    description:
      'Gestiona los flujos de información recibidos, organiza los mensajes y permite construir interfaces de monitoreo.',
    details: [
      'Recepción de tópicos MQTT.',
      'Procesamiento de mensajes.',
      'Organización de variables.',
      'Dashboard de monitoreo.',
    ],
    icon: Workflow,
    color: '#B48A00',
    background: '#FFF8D9',
  },
  {
    number: '04',
    title: 'Capa de almacenamiento',
    technology: 'Azure SQL',
    description:
      'Centraliza los registros y proporciona una estructura organizada para las consultas y el análisis histórico.',
    details: [
      'Base de datos SmartGreenZoneDB.',
      'Procesos de transformación ETL.',
      'Modelo dimensional.',
      'Tabla de hechos y dimensiones.',
    ],
    icon: Database,
    color: '#64748B',
    background: '#EEF2F6',
  },
  {
    number: '05',
    title: 'Capa de análisis',
    technology: 'Power BI',
    description:
      'Consume la información estructurada y la transforma en indicadores y visualizaciones para apoyar su interpretación.',
    details: [
      'Conexión con el modelo dimensional.',
      'Medidas e indicadores.',
      'Gráficos y visualizaciones.',
      'Análisis de tendencias.',
    ],
    icon: BarChart3,
    color: '#00A8CC',
    background: '#E5F9FE',
  },
]

const components = [
  {
    icon: Cpu,
    title: 'ESP32',
    description: 'Unidad de adquisición de datos.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi',
    description: 'Conectividad del sistema.',
  },
  {
    icon: Network,
    title: 'MQTT',
    description: 'Protocolo de mensajería.',
  },
  {
    icon: Workflow,
    title: 'Node-RED',
    description: 'Integración y monitoreo.',
  },
  {
    icon: Database,
    title: 'Azure SQL',
    description: 'Almacenamiento analítico.',
  },
  {
    icon: BarChart3,
    title: 'Power BI',
    description: 'Análisis y visualización.',
  },
]

export default function Architecture() {
  return (
    <section
      id="arquitectura"
      className="bg-[#F7FAF8] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* ENCABEZADO */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#8BEA00] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <Layers3 size={12} className="mr-2" />
            Arquitectura del sistema
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-4xl">
            Una arquitectura integrada para
            <span className="text-[#65B900]">
              {' '}gestionar información.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            SmartGreenZone está organizado en cinco capas tecnológicas
            que conectan la adquisición de datos, la comunicación,
            la integración, el almacenamiento y el análisis de
            información ambiental.
          </p>
        </div>

        {/* FLUJO GENERAL */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-[#062331] p-7 text-white md:p-9">
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8BEA00]">
                Flujo general de información
              </span>
              <h3 className="mt-2 text-xl font-bold">
                De la adquisición al conocimiento
              </h3>
            </div>
            <Layers3 size={32} className="text-[#8BEA00]" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {components.map((component, index) => {
              const Icon = component.icon

              return (
                <div key={component.title} className="relative">
                  <div className="h-full rounded-xl border border-white/10 bg-white/5 p-4">
                    <Icon size={25} className="text-[#8BEA00]" />
                    <h4 className="mt-4 text-sm font-bold">
                      {component.title}
                    </h4>
                    <p className="mt-2 text-[11px] leading-5 text-slate-400">
                      {component.description}
                    </p>
                  </div>

                  {index !== components.length - 1 && (
                    <ArrowRight
                      size={15}
                      className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-[#8BEA00] lg:block"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* CAPAS */}
        <div className="mt-14">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Organización tecnológica
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#062331]">
              Capas y responsabilidades
            </h3>
          </div>

          <div className="space-y-4">
            {layers.map((layer, index) => {
              const Icon = layer.icon

              return (
                <div key={layer.number}>
                  <article className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-[75px_1fr_1fr] md:items-center md:p-8">
                    <div className="flex items-center gap-4 md:block">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: layer.background,
                          color: layer.color,
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <span className="text-xs font-extrabold text-slate-300 md:mt-3 md:block">
                        CAPA {layer.number}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#062331]">
                        {layer.title}
                      </h4>

                      <span
                        className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-bold"
                        style={{
                          backgroundColor: layer.background,
                          color: layer.color,
                        }}
                      >
                        {layer.technology}
                      </span>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {layer.description}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#F7FAF8] p-5">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#579900]">
                        Responsabilidades
                      </span>

                      <ul className="mt-4 space-y-3">
                        {layer.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-[#65B900]"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>

                  {index !== layers.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowDown
                        size={19}
                        className="text-[#65B900]"
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* MODELO DE ALMACENAMIENTO */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#00C8F5]/30 bg-white p-7">
            <Database size={29} className="text-[#009DBD]" />

            <h3 className="mt-5 text-xl font-bold text-[#062331]">
              Modelo dimensional
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              El almacenamiento analítico utiliza un modelo estrella
              en Azure SQL, compuesto por una tabla de hechos y
              dimensiones que permiten organizar las mediciones.
            </p>

            <div className="mt-5 rounded-xl bg-[#F1FAFC] p-4">
              <p className="text-xs font-bold text-[#007B94]">
                Tabla de hechos
              </p>
              <p className="mt-1 text-sm font-semibold text-[#062331]">
                dw.FactMediciones
              </p>

              <p className="mt-3 text-xs font-bold text-[#007B94]">
                Dimensiones
              </p>
              <p className="mt-1 text-xs leading-6 text-slate-600">
                DimDispositivo · DimFecha · DimHora · DimSensor · DimTipoSensor
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#8BEA00]/40 bg-white p-7">
            <BarChart3 size={29} className="text-[#65B900]" />

            <h3 className="mt-5 text-xl font-bold text-[#062331]">
              Integración analítica
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Power BI se conecta a las tablas dimensionales para
              construir indicadores, consultar tendencias y explorar
              el comportamiento de las variables monitoreadas.
            </p>

            <div className="mt-5 rounded-xl bg-[#F3F9EA] p-4">
              <p className="text-xs font-bold text-[#548F00]">
                Registros disponibles
              </p>
              <p className="mt-1 text-3xl font-extrabold text-[#062331]">
                1.500.000
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Mediciones cargadas y validadas en el modelo dimensional.
              </p>
            </div>
          </div>
        </div>

        {/* GALERÍA FOTOGRÁFICA */}
        <ArchitectureGallery />

        {/* CIERRE */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-[#062331] p-7 text-white md:flex-row md:items-center md:justify-between md:p-9">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8BEA00]">
              Arquitectura integrada
            </span>

            <h3 className="mt-2 text-xl font-bold">
              Cada capa cumple una función dentro del ecosistema.
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-300">
              La integración tecnológica permite conectar las mediciones
              con su almacenamiento y posterior análisis.
            </p>
          </div>

          <a
            href="#datos"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#8BEA00] px-5 py-3 text-xs font-bold text-[#062331] transition hover:bg-white"
          >
            Gestión de datos
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
