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

    image: `${import.meta.env.BASE_URL}images/sensores/dht22.png`,

  },

  {

    name: 'BH1750',

    variable: 'Intensidad de iluminación',

    description: 'Mide la intensidad de luz presente en el entorno.',

    unit: 'Lux (lx)',

    icon: Sun,

    image: `${import.meta.env.BASE_URL}images/sensores/bh1750.png`,

  },

  {

    name: 'MQ-2',

    variable: 'Detección de gases y humo',

    description:

      'Genera lecturas analógicas relacionadas con la respuesta del sensor a determinados gases y humo.',

    unit: 'ADC',

    icon: Wind,

    image: `${import.meta.env.BASE_URL}images/sensores/mq2.png`,

  },

  {

    name: 'Sensor capacitivo',

    variable: 'Humedad del suelo',

    description:

      'Obtiene lecturas analógicas relacionadas con la humedad del sustrato.',

    unit: 'ADC',

    icon: Droplets,

    image: `${import.meta.env.BASE_URL}images/sensores/sensor-capacitivo.png`,

  },

  {

    name: 'DS18B20',

    variable: 'Temperatura del suelo',

    description:

      'Permite medir la temperatura del suelo mediante una sonda digital.',

    unit: '°C',

    icon: Thermometer,

    image: `${import.meta.env.BASE_URL}images/sensores/ds18b20.png`,

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

    image: `${import.meta.env.BASE_URL}images/hardware/prototipo-esp32.jpg`,

    icon: Cpu,

    folder: 'hardware',

    status: 'Implementado',

  },

  {

    title: 'Lecturas del Monitor Serie',

    category: 'Arduino IDE',

    description: 'Evidencia de las lecturas obtenidas por los sensores.',

    image: `${import.meta.env.BASE_URL}images/arduino/monitor-serie.png`,

    icon: Code2,

    folder: 'arduino',

    status: 'Validado',

  },

  {

    title: 'Flujos de Node-RED',

    category: 'Integración MQTT',

    description:

      'Flujo de nodos utilizado para recibir y procesar información.',

    image: `${import.meta.env.BASE_URL}images/node-red/flujo-principal.png`,

    icon: CircuitBoard,

    folder: 'node-red',

    status: 'Implementado',

  },

  {

    title: 'Dashboard de Node-RED',

    category: 'Visualización IoT',

    description: 'Interfaz de visualización de las variables recibidas.',

    image: `${import.meta.env.BASE_URL}images/node-red/dashboard.png`,

    icon: Monitor,

    folder: 'node-red',

    status: 'Validado',

  },

  {

    title: 'Base de datos Azure SQL',

    category: 'Almacenamiento',

    description: 'Evidencia de tablas, consultas y registros almacenados.',

    image: `${import.meta.env.BASE_URL}images/azure-sql/base-datos.png`,

    icon: Database,

    folder: 'azure-sql',

    status: 'Implementado',

  },

  {

    title: 'Dashboard Power BI',
    category: 'Business Intelligence',
    description:
      'Dashboard desarrollado para visualizar indicadores y analizar los datos. Su visualización está limitada por los permisos de las cuentas institucionales.',
    image: `${import.meta.env.BASE_URL}images/power-bi/dashboard.png`,
    icon: BarChart3,
    folder: 'power-bi',
    status: 'Implementado',

  },

];

function EvidenceCard({
  item,
}: {
  item: (typeof evidence)[number]
}) {
  const [imageError, setImageError] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)
  const Icon = item.icon

  const statusStyles = {
    Implementado: 'bg-emerald-100 text-emerald-700',
    Validado: 'bg-cyan-100 text-cyan-700',
    'En desarrollo': 'bg-amber-100 text-amber-700',
  }

  const statusClass =
    statusStyles[item.status as keyof typeof statusStyles] ??
    'bg-slate-100 text-slate-700'

  return (
    <>
      <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#8BEA00]/60 hover:shadow-xl">
        <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#EAF0F1]">
          {!imageError ? (
            <button
              type="button"
              onClick={() => setImageOpen(true)}
              className="h-full w-full cursor-zoom-in"
              aria-label={`Ampliar evidencia: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                onError={() => setImageError(true)}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </button>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#EAF4F2] to-[#E8F7FB] p-5 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#579900] shadow-sm">
                <ImagePlus size={30} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#062331]">
                  Espacio para evidencia
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Agrega la imagen en la carpeta {item.folder}
                </p>
              </div>
            </div>
          )}

          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#062331]/90 px-3 py-2 text-[10px] font-bold text-white shadow">
            {item.category}
          </span>

          {!imageError && (
            <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-2 rounded-lg bg-[#062331]/85 px-3 py-2 text-[10px] font-semibold text-white">
              <ImagePlus size={13} />
              Ampliar imagen
            </span>
          )}
        </div>

        <div className="p-6">
          <div className="mb-4">
            <span
              className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold ${statusClass}`}
            >
              {item.status}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8BEA00]/15 text-[#579900]">
              <Icon size={21} />
            </div>
            <h4 className="text-base font-bold text-[#062331]">
              {item.title}
            </h4>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            {item.description}
          </p>
        </div>
      </article>

      {imageOpen && !imageError && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#062331]/95 p-4 sm:p-8"
          onClick={() => setImageOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Evidencia ampliada: ${item.title}`}
        >
          <div
            className="relative flex max-h-full w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex w-full items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  {item.category}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setImageOpen(false)}
                className="shrink-0 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Cerrar ✕
              </button>
            </div>

            <div className="flex max-h-[80vh] w-full items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[78vh] max-w-full object-contain"
              />
            </div>

            <p className="mt-4 text-center text-xs text-slate-300">
              Evidencia del desarrollo tecnológico de SmartGreenZone.
            </p>
          </div>
        </div>
      )}
    </>
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

          {/* USUARIOS Y BENEFICIARIOS */}

          <div className="mb-20" id="usuarios">

            <div className="mb-10 max-w-3xl">

              <span className="text-sm font-bold uppercase tracking-widest text-[#68B900]">

                Usuarios y beneficiarios

              </span>

              <h3 className="mt-3 text-3xl font-extrabold text-[#062331] sm:text-4xl">

                Tecnología al servicio de quienes gestionan el campo.

              </h3>

              <p className="mt-4 leading-7 text-slate-500">

                SmartGreenZone está orientado a facilitar el acceso a información

                ambiental organizada para diferentes perfiles relacionados con

                la producción agrícola, la gestión tecnológica y el análisis de datos.

              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {[

                {

                  icon: Sprout,

                  title: 'Productores agrícolas',

                  description:

                    'Pueden consultar información de las condiciones ambientales para apoyar el seguimiento de sus cultivos.',

                },

                {

                  icon: Cpu,

                  title: 'Administradores del sistema',

                  description:

                    'Supervisan el funcionamiento de los dispositivos, la comunicación y la infraestructura tecnológica.',

                },

                {

                  icon: BarChart3,

                  title: 'Analistas de datos',

                  description:

                    'Exploran los registros almacenados, comparan variables e identifican comportamientos en la información.',

                },

                {

                  icon: Database,

                  title: 'Comunidad académica',

                  description:

                    'Utiliza el proyecto como escenario de aprendizaje e investigación en IoT, Big Data y gestión de información.',

                },

              ].map((item) => {

                const Icon = item.icon

                return (

                  <article

                    key={item.title}

                    className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#8BEA00] hover:shadow-lg"

                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8BEA00]/15 text-[#579900]">

                      <Icon size={24} />

                    </div>

                    <h4 className="mt-5 text-base font-bold text-[#062331]">

                      {item.title}

                    </h4>

                    <p className="mt-3 text-sm leading-7 text-slate-500">

                      {item.description}

                    </p>

                  </article>

                )

              })}

            </div>

            <p className="mt-5 text-xs leading-6 text-slate-400">

              Nota: estos perfiles representan los usuarios y beneficiarios

              potenciales de la solución. No implican que todos dispongan

              actualmente de cuentas o accesos implementados.

            </p>

          </div>

        {/* PROCESOS DEL SISTEMA */}

        <div className="mb-20" id="procesos">

          <div className="mb-10 max-w-3xl">

            <span className="text-sm font-bold uppercase tracking-widest text-[#68B900]">

              Procesos del sistema

            </span>

            <h3 className="mt-3 text-3xl font-extrabold text-[#062331] sm:text-4xl">

              Del entorno agrícola a la información.

            </h3>

            <p className="mt-4 leading-7 text-slate-500">

              El sistema desarrolla un flujo de procesamiento que conecta

              la adquisición de las mediciones con su transmisión,

              integración, almacenamiento y posterior análisis.

            </p>

          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {[

              {

                number: '01',

                icon: Activity,

                title: 'Adquisición',

                description:

                  'Los cinco sensores capturan seis variables relacionadas con la temperatura, humedad, iluminación y respuesta del sensor MQ-2.',

                technology: 'Sensores físicos',

                color: '#65B900',

              },

              {

                number: '02',

                icon: Cpu,

                title: 'Procesamiento inicial',

                description:

                  'El ESP32 recibe las señales de los sensores y organiza inicialmente las mediciones para su transmisión.',

                technology: 'ESP32 DevKit V1',

                color: '#00BFEA',

              },

              {

                number: '03',

                icon: Radio,

                title: 'Transmisión',

                description:

                  'Los registros se envían mediante conectividad inalámbrica y mensajes organizados en tópicos.',

                technology: 'Wi-Fi y MQTT',

                color: '#D6A900',

              },

              {

                number: '04',

                icon: CircuitBoard,

                title: 'Integración',

                description:

                  'Los flujos reciben los mensajes, organizan las variables y facilitan su visualización y procesamiento.',

                technology: 'Node-RED',

                color: '#64748B',

              },

              {

                number: '05',

                icon: Database,

                title: 'Almacenamiento',

                description:

                  'La información se organiza en estructuras relacionales y dimensionales para facilitar su consulta.',

                technology: 'Azure SQL',

                color: '#00BFEA',

              },

              {

                number: '06',

                icon: BarChart3,

                title: 'Análisis',

                description:

                  'Los registros estructurados permiten construir indicadores, comparar variables e interpretar comportamientos.',

                technology: 'Modelo dimensional y Power BI',

                color: '#8B5CF6',

              },

            ].map((process) => {

              const Icon = process.icon

              return (

                <article

                  key={process.number}

                  className="relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"

                >

                  <div className="flex items-center justify-between">

                    <div

                      className="flex h-12 w-12 items-center justify-center rounded-xl"

                      style={{

                        backgroundColor: `${process.color}18`,

                        color: process.color,

                      }}

                    >

                      <Icon size={24} />

                    </div>

                    <span className="text-2xl font-extrabold text-slate-200">

                      {process.number}

                    </span>

                  </div>

                  <h4 className="mt-5 text-lg font-bold text-[#062331]">

                    {process.title}

                  </h4>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-slate-500">

                    {process.description}

                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">

                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#579900]">

                      Tecnología asociada

                    </span>

                    <p className="mt-2 text-xs font-bold text-[#062331]">

                      {process.technology}

                    </p>

                  </div>

                </article>

              )

            })}

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

              return (

                <article

                  key={sensor.name}

                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#8BEA00]/50 hover:shadow-xl"

                >

<div className="relative mb-6 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#F4F8F2] to-[#EAF4F2] p-5">

  <img

    src={sensor.image}

    alt={`Sensor ${sensor.name} de SmartGreenZone`}

    loading="lazy"

    className="h-full w-full object-contain transition duration-500 hover:scale-110"

  />

  <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#062331] shadow-sm">

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

                  title: 'ESP32 DevKit V1',

                  description:

                    'Unidad central de adquisición que recibe las señales de los cinco sensores y procesa inicialmente las mediciones.',

                  image: `${import.meta.env.BASE_URL}images/sensores/esp32.png`,

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

                    {item.image ? (

                      <img

                        src={item.image}

                        alt={item.title}

                        loading="lazy"

                        className="h-24 w-full object-contain rounded-lg"

                      />

                    ) : (

                      <Icon size={30} className="text-[#8BEA00]" />

                    )}

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