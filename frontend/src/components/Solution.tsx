
import { useState } from 'react'

import {
  Thermometer,
  Droplets,
  Sun,
  Wind,
  Cpu,
  Radio,
  Database,
  Wifi,
  Activity,
  CircuitBoard,
  ArrowRight,
  ImagePlus,
  Monitor,
  Layers3,
  BarChart3,
  Code2,
  Sprout,
} from 'lucide-react'

const sensors = [
  {
    name: 'DHT22',
    variable: 'Temperatura y humedad del aire',
    description: 'Registra la temperatura ambiental y la humedad relativa.',
    unit: '°C · % HR',
    icon: Thermometer,
  },
  {
    name: 'BH1750',
    variable: 'Intensidad de iluminación',
    description: 'Mide la intensidad de luz presente en el entorno.',
    unit: 'Lux (lx)',
    icon: Sun,
  },
  {
    name: 'MQ-2',
    variable: 'Detección de gases y humo',
    description:
      'Genera lecturas analógicas relacionadas con la respuesta del sensor a determinados gases y humo.',
    unit: 'ADC',
    icon: Wind,
  },
  {
    name: 'Sensor capacitivo',
    variable: 'Humedad del suelo',
    description:
      'Obtiene lecturas analógicas relacionadas con la humedad del sustrato.',
    unit: 'ADC',
    icon: Droplets,
  },
  {
    name: 'DS18B20',
    variable: 'Temperatura del suelo',
    description:
      'Permite medir la temperatura del suelo mediante una sonda digital.',
    unit: '°C',
    icon: Thermometer,
  },
]

const architecture = [
  {
    number: '01',
    title: 'Sensores',
    description: 'Captura de las seis variables ambientales y del suelo.',
    icon: Activity,
  },
  {
    number: '02',
    title: 'ESP32',
    description: 'Adquisición y procesamiento inicial de las mediciones.',
    icon: Cpu,
  },
  {
    number: '03',
    title: 'MQTT',
    description: 'Transmisión de información mediante tópicos.',
    icon: Radio,
  },
  {
    number: '04',
    title: 'Node-RED',
    description: 'Recepción, organización y visualización de mensajes.',
    icon: CircuitBoard,
  },
  {
    number: '05',
    title: 'Azure SQL',
    description: 'Base de datos para la gestión y almacenamiento estructurado.',
    icon: Database,
  },
  {
    number: '06',
    title: 'Power BI',
    description: 'Análisis, indicadores y visualización de información.',
    icon: BarChart3,
  },
]

const evidence = [
  {
    title: 'Prototipo físico',
    category: 'Hardware IoT',
    description: 'Fotografía del ESP32 y los sensores conectados.',
    image: '/images/hardware/prototipo-esp32.jpg',
    icon: Cpu,
    folder: 'hardware',
  },
  {
    title: 'Lecturas del Monitor Serie',
    category: 'Arduino IDE',
    description: 'Evidencia de las lecturas obtenidas por los sensores.',
    image: '/images/arduino/monitor-serie.png',
    icon: Code2,
    folder: 'arduino',
  },
  {
    title: 'Flujos de Node-RED',
    category: 'Integración MQTT',
    description:
      'Flujo de nodos utilizado para recibir y procesar información.',
    image: '/images/node-red/flujo-principal.png',
    icon: CircuitBoard,
    folder: 'node-red',
  },
  {
    title: 'Dashboard de Node-RED',
    category: 'Visualización IoT',
    description: 'Interfaz de visualización de las variables recibidas.',
    image: '/images/node-red/dashboard.png',
    icon: Monitor,
    folder: 'node-red',
  },
  {
    title: 'Base de datos Azure SQL',
    category: 'Almacenamiento',
    description: 'Evidencia de tablas, consultas y registros almacenados.',
    image: '/images/azure-sql/base-datos.png',
    icon: Database,
    folder: 'azure-sql',
  },
  {
    title: 'Dashboard Power BI',
    category: 'Business Intelligence',
    description: 'Visualización de indicadores y análisis de los datos.',
    image: '/images/power-bi/dashboard.png',
    icon: BarChart3,
    folder: 'power-bi',
  },
]

function EvidenceCard({
  item,
}: {
  item: (typeof evidence)[number]
}) {
  const [imageError, setImageError] = useState(false)
  const Icon = item.icon

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF0F1]">
        {!imageError ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#EAF4F2] to-[#E8F7FB] p-5 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#579900] shadow-sm">
              <ImagePlus size={27} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#062331]">
                Espacio para evidencia
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Agrega la imagen en la carpeta {item.folder}
              </p>
            </div>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-[#062331]/90 px-3 py-1.5 text-[10px] font-bold text-white">
          {item.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <Icon size={17} className="text-[#579900]" />
          <h4 className="text-sm font-bold text-[#062331]">
            {item.title}
          </h4>
        </div>

        <p className="mt-2 text-xs leading-6 text-slate-500">
          {item.description}
        </p>
      </div>
    </article>
  )
}

export default function Solution() {
  return (
    <section
      id="solucion"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#00C8F5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-[700px] h-96 w-96 rounded-full bg-[#8BEA00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* ENCABEZADO */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00C8F5]/30 bg-[#00C8F5]/10 px-4 py-2">
            <CircuitBoard size={16} className="text-[#008EAA]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#007B94]">
              Nuestra solución tecnológica
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#062331] sm:text-5xl">
            Tecnología IoT para una{' '}
            <span className="text-[#68B900]">
              agricultura inteligente.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
            SmartGreenZone integra sensores, dispositivos ESP32,
            comunicación MQTT, Node-RED y herramientas de gestión
            de datos para monitorear y analizar las condiciones
            ambientales de un entorno agrícola.
          </p>
        </div>

        {/* INTRODUCCIÓN */}
        <div className="mb-20 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#68B900]">
              Monitoreo inteligente
            </span>

            <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#062331] sm:text-4xl">
              Cada medición aporta información para comprender el entorno.
            </h3>

            <p className="mt-6 leading-8 text-slate-500">
              El sistema utiliza cinco sensores físicos conectados
              a una unidad ESP32 para adquirir seis variables:
              temperatura ambiental, humedad del aire, iluminación,
              respuesta del sensor MQ-2, humedad del suelo y
              temperatura del suelo.
            </p>

            <p className="mt-4 leading-8 text-slate-500">
              La información se transmite mediante MQTT y se integra
              con Node-RED para gestionar los mensajes y facilitar
              su visualización. Los datos también forman parte de
              la infraestructura analítica implementada en Azure SQL
              y Power BI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['5 sensores físicos', '6 variables', 'ESP32', 'MQTT', 'Node-RED'].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#8BEA00]/15 px-4 py-2 text-sm font-semibold text-[#416F00]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#062331] p-8 text-white shadow-xl sm:p-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#8BEA00]">
                  SmartGreenZone
                </p>
                <h4 className="mt-2 text-2xl font-extrabold">
                  Ecosistema IoT
                </h4>
              </div>
              <div className="rounded-2xl bg-[#8BEA00]/15 p-4">
                <Sprout size={32} className="text-[#8BEA00]" />
              </div>
            </div>

            <div className="my-9 grid grid-cols-2 gap-4">
              {[
                {
                  value: '02',
                  label: 'Variables térmicas',
                  icon: Thermometer,
                  color: 'text-[#8BEA00]',
                },
                {
                  value: '02',
                  label: 'Variables de humedad',
                  icon: Droplets,
                  color: 'text-[#00C8F5]',
                },
                {
                  value: '01',
                  label: 'Iluminación',
                  icon: Sun,
                  color: 'text-[#FFD400]',
                },
                {
                  value: '01',
                  label: 'Lectura MQ-2',
                  icon: Wind,
                  color: 'text-[#00C8F5]',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <Icon size={25} className={item.color} />
                    <p className="mt-4 text-2xl font-extrabold">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      {item.label}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-xs text-slate-400">
                Adquisición de información
              </span>
              <span className="flex items-center gap-2 text-xs font-bold text-[#8BEA00]">
                <span className="h-2 w-2 rounded-full bg-[#8BEA00]" />
                Arquitectura IoT
              </span>
            </div>
          </div>
        </div>

        {/* SENSORES */}
        <div className="mb-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#68B900]">
                Hardware de adquisición
              </span>
              <h3 className="mt-3 text-3xl font-extrabold text-[#062331]">
                Sensores del sistema
              </h3>
              <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                Cinco dispositivos físicos permiten obtener seis
                variables relacionadas con las condiciones del entorno.
              </p>
            </div>
            <span className="w-fit rounded-xl bg-[#062331] px-5 py-3 text-sm font-bold text-white">
              05 sensores
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sensors.map((sensor, index) => {
              const Icon = sensor.icon

              return (
                <article
                  key={sensor.name}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#8BEA00]/50 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8BEA00]/15 text-[#568F00]">
                      <Icon size={27} />
                    </div>
                    <span className="text-sm font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-widest text-[#68B900]">
                    Sensor de monitoreo
                  </p>

                  <h4 className="mt-2 text-2xl font-extrabold text-[#062331]">
                    {sensor.name}
                  </h4>

                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    {sensor.variable}
                  </p>

                  <p className="mt-4 min-h-20 text-sm leading-7 text-slate-500">
                    {sensor.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <span className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600">
                      {sensor.unit}
                    </span>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* ELECTRÓNICA Y CONECTIVIDAD */}
        <div className="mb-20 rounded-[2rem] bg-[#062331] p-8 text-white sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#8BEA00]">
                Electrónica y conectividad
              </span>

              <h3 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                El hardware que conecta el entorno con los datos.
              </h3>

              <p className="mt-6 leading-8 text-slate-300">
                El ESP32 funciona como unidad de adquisición de las
                mediciones. Mediante conectividad Wi-Fi, los registros
                pueden transmitirse utilizando MQTT hacia la
                infraestructura de integración.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Cpu,
                  title: 'ESP32',
                  description:
                    'Lee y procesa inicialmente las señales de los sensores.',
                },
                {
                  icon: Wifi,
                  title: 'Conectividad Wi-Fi',
                  description:
                    'Permite la comunicación inalámbrica del dispositivo.',
                },
                {
                  icon: Radio,
                  title: 'Protocolo MQTT',
                  description:
                    'Organiza la transmisión mediante tópicos de publicación.',
                },
                {
                  icon: CircuitBoard,
                  title: 'Node-RED',
                  description:
                    'Permite recibir, organizar y visualizar los mensajes.',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <Icon size={30} className="text-[#8BEA00]" />
                    <h4 className="mt-4 text-lg font-bold">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ARQUITECTURA */}
        <div className="mb-20" id="arquitectura">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#68B900]">
              Arquitectura tecnológica
            </span>
            <h3 className="mt-3 text-3xl font-extrabold text-[#062331] sm:text-4xl">
              Del sensor al análisis de información.
            </h3>
            <p className="mt-4 leading-7 text-slate-500">
              Componentes que participan en la adquisición,
              comunicación, almacenamiento y visualización de los datos.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {architecture.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.number}
                  className="rounded-2xl border border-slate-100 bg-[#F7FAF8] p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-xs font-extrabold text-[#68B900]">
                    ETAPA {item.number}
                  </span>

                  <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#062331]">
                    <Icon size={23} className="text-[#8BEA00]" />
                  </div>

                  <h4 className="mt-5 text-lg font-extrabold text-[#062331]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>

        {/* EVIDENCIAS REALES */}
        <div id="evidencias" className="scroll-mt-28">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-[#68B900]">
              Desarrollo y evidencias
            </span>

            <h3 className="mt-3 text-3xl font-extrabold text-[#062331] sm:text-4xl">
              SmartGreenZone en funcionamiento.
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              Evidencias del desarrollo tecnológico, las pruebas
              realizadas y las herramientas utilizadas para integrar
              el ecosistema de monitoreo y gestión de datos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {evidence.map((item) => (
              <EvidenceCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* CIERRE */}
        <div className="mt-20 rounded-3xl border border-[#00C8F5]/20 bg-gradient-to-r from-[#F3FAF0] to-[#EFF9FC] p-8 text-center sm:p-12">
          <Layers3 size={35} className="mx-auto text-[#568F00]" />

          <h3 className="mt-5 text-2xl font-extrabold text-[#062331] sm:text-3xl">
            Hardware, comunicación y datos en un mismo ecosistema.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
            SmartGreenZone conecta la adquisición de variables
            ambientales con herramientas de integración, almacenamiento
            y análisis para convertir las mediciones en información útil.
          </p>

          <a
            href="#arquitectura"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#062331] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#0C4356]"
          >
            Explorar la arquitectura
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
