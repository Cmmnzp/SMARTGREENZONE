import {
  Database,
  Workflow,
  FileSpreadsheet,
  Layers3,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Table2,
  HardDrive,
  Cpu,
  Radio,
  ChartNoAxesCombined,
  CalendarDays,
  Thermometer,
  Droplets,
  Sun,
  Wind,
  Sprout,
  Info,
  Boxes,
  ClipboardCheck,
} from 'lucide-react'

/* =========================================================
   SMARTGREENZONE
   Gestión de datos - Almacenamiento analítico

   Nota de fidelidad:
   - Se conserva el modelo estrella y sus cinco dimensiones.
   - Se documenta SSIS según el flujo visible en la evidencia
     proceso-etl.png.
   - Se señala la advertencia de posible truncamiento observada
     en la tarea Cargar_DimDispositivo.
   - El diagrama relacional se muestra como evidencia del modelo
     de origen; comprobar que corresponda a la versión vigente
     de SmartGreenZoneDB.
========================================================= */

const etlSteps = [
  {
    number: '01',
    title: 'Extracción',
    description:
      'Lectura de los registros de origen y recuperación de los campos necesarios para preparar la información que será analizada.',
    detail:
      'Se consultan las tablas y registros disponibles en la base de datos de SmartGreenZone.',
    icon: FileSpreadsheet,
    color: '#00A8CC',
    bg: '#E5F9FE',
  },
  {
    number: '02',
    title: 'Transformación',
    description:
      'Organización de los datos, revisión de consistencia y preparación de las claves utilizadas por las dimensiones.',
    detail:
      'Se preparan los campos temporales, las clasificaciones y las correspondencias necesarias para el modelo dimensional.',
    icon: Workflow,
    color: '#65B900',
    bg: '#F0F9E4',
  },
  {
    number: '03',
    title: 'Carga',
    description:
      'Almacenamiento de los registros preparados en las dimensiones y en la tabla central de hechos.',
    detail:
      'La carga consolida la información en la estructura analítica utilizada para las consultas.',
    icon: Database,
    color: '#B48A00',
    bg: '#FFF8D9',
  },
]

const dimensions = [
  {
    name: 'DimDispositivo',
    key: 'DispositivoKey',
    description: 'Identificación y características de los dispositivos.',
  },
  {
    name: 'DimFecha',
    key: 'FechaKey',
    description: 'Organización temporal por año, trimestre, mes y día.',
  },
  {
    name: 'DimHora',
    key: 'HoraKey',
    description: 'Clasificación de las mediciones por hora.',
  },
  {
    name: 'DimSensor',
    key: 'SensorKey',
    description: 'Identificación de los sensores y sus características.',
  },
  {
    name: 'DimTipoSensor',
    key: 'TipoSensorKey',
    description: 'Clasificación de los tipos de variables monitoreadas.',
  },
]

const validations = [
  '1.500.000 registros cargados en la tabla de hechos, según la validación reportada.',
  'Verificación de identificadores de medición únicos.',
  'Relaciones dimensionales implementadas.',
  'Modelo estrella visualizado en Azure SQL.',
]

const monitoredVariables = [
  { name: 'Temperatura ambiental', unit: '°C', icon: Thermometer },
  { name: 'Humedad del aire', unit: '%', icon: Droplets },
  { name: 'Humedad del suelo', unit: 'ADC', icon: Sprout },
  { name: 'Iluminación', unit: 'lux', icon: Sun },
  { name: 'Lectura MQ-2', unit: 'ADC', icon: Wind },
  { name: 'Temperatura del suelo', unit: '°C', icon: Thermometer },
]



/* =========================================================
   FIGURA DE EVIDENCIA
   Presenta cada captura grande, centrada y sin recortar.
========================================================= */

function EvidenceImage({
  file,
  alt,
  caption,
}: {
  file: string
  alt: string
  caption: string
}) {
  return (
    <figure className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
      <div className="flex min-h-[260px] items-center justify-center rounded-xl bg-[#F7FAF8] p-2 sm:min-h-[380px] sm:p-5">
        <img
          src={`${import.meta.env.BASE_URL}images/azure-sql/${file}`}
          alt={alt}
          loading="lazy"
          className="mx-auto block h-auto max-h-[720px] w-full object-contain"
        />
      </div>
      <figcaption className="mt-4 border-t border-slate-100 px-2 pt-4 text-center">
        <p className="text-sm font-semibold text-[#062331]">{caption}</p>
        <p className="mt-1 text-[10px] text-slate-400">
          Fuente: elaboración propia.
        </p>
      </figcaption>
    </figure>
  )
}


export default function DataManagement() {
  return (
    <section id="datos" className="bg-white px-6 py-24 text-[#062331]">
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8BEA00] bg-[#F7FBEF] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <Database size={12} />
            Gestión de datos · Almacenamiento analítico
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-5xl">
            De los registros a una
            <span className="text-[#65B900]"> estructura analítica.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            SmartGreenZone integra la adquisición, organización,
            transformación y almacenamiento de mediciones ambientales.
            Esta sección presenta la estructura relacional de origen,
            el modelo dimensional, la simulación de datos y las operaciones
            ETL utilizadas para preparar la información para el análisis.
          </p>
        </div>

        {/* INDICADORES GENERALES */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: '1.5 M',
              label: 'Registros en la tabla de hechos',
              icon: Database,
              color: '#65B900',
            },
            {
              value: '5',
              label: 'Dimensiones implementadas',
              icon: Layers3,
              color: '#00A8CC',
            },
            {
              value: '6',
              label: 'Variables monitoreadas',
              icon: GitBranch,
              color: '#B48A00',
            },
            {
              value: '1',
              label: 'Tabla de hechos',
              icon: Table2,
              color: '#64748B',
            },
          ].map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-[#F7FAF8] p-5"
              >
                <Icon size={23} style={{ color: item.color }} />
                <p className="mt-4 text-3xl font-extrabold text-[#062331]">
                  {item.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* ARQUITECTURA DEL RECORRIDO DE DATOS */}
        <div className="mt-20">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Flujo de información
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#062331] md:text-3xl">
              Arquitectura de gestión de datos
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
              El recorrido conecta los dispositivos de adquisición con
              los servicios de integración, almacenamiento y análisis.
              El esquema representa la organización lógica del proyecto.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {[
              {
                title: 'Sensores IoT',
                description: 'Captura de seis variables.',
                icon: Cpu,
              },
              {
                title: 'ESP32',
                description: 'Lectura y publicación.',
                icon: Radio,
              },
              {
                title: 'MQTT / Node-RED',
                description: 'Recepción e integración.',
                icon: Workflow,
              },
              {
                title: 'Azure SQL',
                description: 'Almacenamiento de datos.',
                icon: Database,
              },
              {
                title: 'Modelo estrella',
                description: 'Organización analítica.',
                icon: Layers3,
              },
              {
                title: 'Analítica',
                description: 'Consultas y visualización.',
                icon: ChartNoAxesCombined,
              },
            ].map((stage, index) => {
              const Icon = stage.icon

              return (
                <div key={stage.title} className="relative">
                  <article className="h-full rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#062331] text-[#8BEA00]">
                      <Icon size={22} />
                    </div>
                    <h4 className="mt-3 text-sm font-bold text-[#062331]">
                      {stage.title}
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {stage.description}
                    </p>
                  </article>
                  {index !== 5 && (
                    <ArrowRight
                      size={17}
                      className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white text-[#65B900] xl:block"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* MODELO RELACIONAL */}
        <div className="mt-20" id="modelo-relacional">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Organización de origen
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#062331] md:text-3xl">
              Modelo relacional
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
              El modelo relacional organiza la información en tablas
              relacionadas mediante identificadores. Esta estructura
              permite registrar las mediciones y mantener referencias
              entre los dispositivos, los sensores y los datos capturados.
            </p>
          </div>

          <div className="mb-8">
            <div className="mb-5 text-center">
              <h4 className="text-lg font-bold text-[#062331]">
                Diagrama del modelo relacional
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Representación de las tablas, claves y relaciones de la
                base de datos operacional.
              </p>
            </div>
            <EvidenceImage
              file="modelo-relacional.png"
              alt="Diagrama del modelo relacional de SmartGreenZone"
              caption="Figura 1. Modelo relacional de SmartGreenZone."
            />
          </div>

          <div className="mt-10">
            <div className="mb-5 text-center">
              <h4 className="text-lg font-bold text-[#062331]">
                Base de datos operacional en Azure SQL
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Vista del explorador de objetos donde se identifican las
                tablas disponibles en SmartGreenZoneDB.
              </p>
            </div>
            <EvidenceImage
              file="base-datos.png"
              alt="Explorador de objetos de la base de datos SmartGreenZoneDB en Azure SQL"
              caption="Figura 2. Estructura de SmartGreenZoneDB en Azure SQL."
            />
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h4 className="flex items-center gap-2 text-sm font-bold text-[#062331]">
                <ShieldCheck size={18} className="text-[#579900]" />
                Integridad relacional
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Las claves primarias identifican cada registro y las claves
                foráneas permiten establecer vínculos entre las tablas.
                Su validación evita referencias a entidades inexistentes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h4 className="flex items-center gap-2 text-sm font-bold text-[#062331]">
                <Boxes size={18} className="text-[#087E9B]" />
                Función dentro del proyecto
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Esta organización permite administrar los registros de
                origen antes de estructurarlos para consultas históricas
                y análisis multidimensional.
              </p>
            </div>
          </div>
        </div>

        {/* SIMULACIÓN DE DATOS */}
        <div className="mt-20" id="simulacion-datos">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Generación del conjunto de datos
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#062331] md:text-3xl">
              Simulación de 1.500.000 mediciones
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
              Para desarrollar y probar el proceso de gestión y analítica
              se construyó un conjunto de datos simulado. Este volumen
              permite trabajar consultas, almacenamiento y análisis sobre
              múltiples variables y registros.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl bg-[#062331] p-7 text-white md:p-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8BEA00]">
                Volumen del conjunto
              </span>
              <p className="mt-4 text-5xl font-extrabold md:text-6xl">
                1.5 M
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Registros simulados de mediciones
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <Cpu size={20} className="text-[#8BEA00]" />
                  <p className="mt-2 text-2xl font-bold">5</p>
                  <p className="text-xs text-slate-300">Sensores físicos</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <GitBranch size={20} className="text-[#00C8F5]" />
                  <p className="mt-2 text-2xl font-bold">6</p>
                  <p className="text-xs text-slate-300">Variables</p>
                </div>
              </div>
              <p className="mt-6 text-xs leading-6 text-slate-300">
                El volumen corresponde a registros almacenados en la
                tabla de hechos, de acuerdo con el avance documentado.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7">
              <h4 className="text-lg font-bold text-[#062331]">
                Variables incluidas en la simulación
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Se contemplan seis variables provenientes de cinco
                sensores físicos.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {monitoredVariables.map((variable) => {
                  const Icon = variable.icon
                  return (
                    <div
                      key={variable.name}
                      className="flex items-center gap-3 rounded-xl bg-[#F7FAF8] p-3"
                    >
                      <div className="rounded-lg bg-[#EAF4F2] p-2 text-[#579900]">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#062331]">
                          {variable.name}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          Unidad: {variable.unit}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-[#F7FAF8] p-5">
              <CalendarDays size={22} className="text-[#579900]" />
              <h5 className="mt-3 text-sm font-bold text-[#062331]">
                Componente temporal
              </h5>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                Los registros se organizan con referencias de fecha y hora
                para permitir análisis cronológicos.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#F7FAF8] p-5">
              <Database size={22} className="text-[#087E9B]" />
              <h5 className="mt-3 text-sm font-bold text-[#062331]">
                Almacenamiento
              </h5>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                Los datos se consolidan en Azure SQL y se preparan para
                su consulta y análisis dimensional.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#F7FAF8] p-5">
              <Info size={22} className="text-[#B48A00]" />
              <h5 className="mt-3 text-sm font-bold text-[#062331]">
                Alcance de la simulación
              </h5>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                Los registros simulados permiten probar el procesamiento,
                pero no representan mediciones reales de un cultivo.
              </p>
            </div>
          </div>
        </div>

        {/* PROCESO ETL */}
        <div className="mt-20" id="proceso-etl">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Integración de información
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#062331] md:text-3xl">
              Proceso ETL: extracción, transformación y carga
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
              El proceso ETL prepara los datos de origen para incorporarlos
              al modelo dimensional. El flujo evidenciado fue organizado
              mediante un paquete de integración con tareas secuenciales
              para limpiar el Data Warehouse, cargar las dimensiones y
              finalmente cargar la tabla de hechos.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {etlSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <article
                  key={step.number}
                  className="relative rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: step.bg,
                        color: step.color,
                      }}
                    >
                      <Icon size={23} />
                    </div>
                    <span className="text-sm font-extrabold text-slate-300">
                      {step.number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-lg font-bold text-[#062331]">
                    {step.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {step.description}
                  </p>

                  <div className="mt-4 rounded-xl bg-[#F7FAF8] p-3">
                    <p className="text-xs leading-6 text-slate-600">
                      {step.detail}
                    </p>
                  </div>

                  {index !== 2 && (
                    <ArrowRight
                      size={18}
                      className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white text-[#65B900] md:block"
                    />
                  )}
                </article>
              )
            })}
          </div>

          <div className="mt-5 rounded-xl border border-[#00C8F5]/30 bg-[#F1FAFC] p-5">
            <div className="flex items-start gap-3">
              <Workflow size={20} className="mt-1 shrink-0 text-[#087E9B]" />
              <div>
                <p className="text-sm font-bold text-[#062331]">
                  Herramienta de integración: SQL Server Integration Services (SSIS)
                </p>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  La evidencia muestra un flujo de integración con tareas
                  de limpieza del Data Warehouse, carga de dimensiones
                  (tiempo, sector, dispositivo, tipo de sensor, estado del
                  evento y sensor) y carga de FactMediciones. Las tareas
                  se encuentran conectadas en una secuencia de ejecución
                  para preparar primero las dimensiones y después los hechos.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-5 text-center">
              <h4 className="text-lg font-bold text-[#062331]">
                Evidencia del proceso de transformación
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Flujo de control del paquete SSIS para la limpieza del Data Warehouse y la carga de dimensiones y hechos.
              </p>
            </div>
            <EvidenceImage
              file="proceso-etl.png"
              alt="Flujo de ejecución del paquete ETL desarrollado en SQL Server Integration Services"
              caption="Figura 3. Flujo ETL implementado mediante SQL Server Integration Services."
            />
          </div>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <Info size={20} className="mt-1 shrink-0 text-amber-700" />
              <div>
                <p className="text-sm font-bold text-amber-900">
                  Observación de ejecución
                </p>
                <p className="mt-1 text-sm leading-7 text-amber-900/80">
                  En la captura se observa una advertencia en la tarea
                  Cargar_DimDispositivo relacionada con el posible
                  truncamiento de la columna Estado. Por ello, aunque
                  varias tareas muestran indicadores verdes, se debe
                  revisar el tamaño y la longitud del campo de destino
                  y confirmar el resultado final de la carga antes de
                  declarar el paquete completamente libre de advertencias.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MODELO ESTRELLA */}
        <div className="mt-20" id="modelo-dimensional">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Almacenamiento analítico
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#062331] md:text-3xl">
              Modelo dimensional: esquema estrella
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
              El Data Warehouse se organiza mediante una tabla central
              de hechos relacionada con cinco dimensiones. Esta estructura
              permite consultar las mediciones desde perspectivas de
              dispositivo, fecha, hora y clasificación del sensor.
            </p>
          </div>

          <EvidenceImage
            file="modelo-estrella.png"
            alt="Diagrama del modelo dimensional estrella de SmartGreenZone"
            caption="Figura 4. Modelo dimensional implementado en Azure SQL."
          />

          {/* TABLA DE HECHOS Y DIMENSIONES */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#062331] p-7 text-white">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#8BEA00]/15 p-3">
                  <Database size={25} className="text-[#8BEA00]" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#8BEA00]">
                    Tabla central
                  </span>
                  <h4 className="text-lg font-extrabold">
                    FactMediciones
                  </h4>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                Almacena los registros de medición y las claves que
                permiten relacionarlos con las dimensiones del modelo.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  'MedicionKey',
                  'FechaKey',
                  'HoraKey',
                  'SensorKey',
                  'TipoSensorKey',
                  'DispositivoKey',
                ].map((field) => (
                  <div
                    key={field}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                  >
                    <span className="text-[10px] text-slate-300">
                      {field}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#E5F9FE] p-3">
                  <Layers3 size={25} className="text-[#009DBD]" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#009DBD]">
                    Tablas relacionadas
                  </span>
                  <h4 className="text-lg font-extrabold text-[#062331]">
                    Dimensiones
                  </h4>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {dimensions.map((dimension) => (
                  <div
                    key={dimension.name}
                    className="rounded-xl bg-[#F7FAF8] p-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#062331]">
                        {dimension.name}
                      </span>
                      <span className="text-[9px] font-semibold text-[#579900]">
                        {dimension.key}
                      </span>
                    </div>
                    <p className="mt-1 text-[10px] leading-5 text-slate-500">
                      {dimension.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h4 className="flex items-center gap-2 text-sm font-bold text-[#062331]">
                <Table2 size={18} className="text-[#579900]" />
                Granularidad
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                La tabla de hechos conserva registros de medición
                individuales. La granularidad debe interpretarse como
                el nivel de detalle de cada registro almacenado.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h4 className="flex items-center gap-2 text-sm font-bold text-[#062331]">
                <ChartNoAxesCombined size={18} className="text-[#087E9B]" />
                Utilidad analítica
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Las dimensiones permiten agrupar, filtrar y comparar
                mediciones por fecha, hora, dispositivo y características
                de los sensores.
              </p>
            </div>
          </div>
        </div>

        {/* VALIDACIÓN Y CALIDAD */}
        <div className="mt-20" id="calidad-datos">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Control de calidad
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#062331] md:text-3xl">
              Validación y trazabilidad de los registros
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
              Se consideran controles sobre el volumen de información,
              la identificación de registros y las relaciones entre
              las tablas, con el propósito de mantener la consistencia
              del conjunto utilizado en el análisis.
            </p>
          </div>

          <div className="grid gap-6">
            <div>
              <EvidenceImage
                file="validacion-registros.png"
                alt="Consulta SQL y resultado de validación de registros"
                caption="Figura 5. Consulta SQL de validación de registros."
              />
            </div>

            <div className="mx-auto w-full max-w-5xl rounded-2xl border border-[#8BEA00]/40 bg-[#F7FBEF] p-7">
              <div className="flex items-center gap-3">
                <ShieldCheck size={27} className="text-[#579900]" />
                <h4 className="text-lg font-bold text-[#062331]">
                  Resultados de validación
                </h4>
              </div>

              <p className="mt-5 text-4xl font-extrabold text-[#062331]">
                1.500.000
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Registros reportados en FactMediciones.
              </p>

              <div className="mt-6 space-y-4">
                {validations.map((validation) => (
                  <div
                    key={validation}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-[#579900]"
                    />
                    <p className="text-xs leading-6 text-slate-600">
                      {validation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-3">
              <ClipboardCheck size={22} className="mt-1 shrink-0 text-[#087E9B]" />
              <div>
                <h4 className="font-bold text-[#062331]">
                  Criterios de calidad recomendados
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Para la revisión integral del conjunto se deben comprobar
                  los valores nulos, duplicados, rangos válidos de cada
                  variable, integridad de las claves y correspondencia
                  entre los registros de origen y los datos cargados.
                  Los resultados de cada control deben respaldarse con
                  consultas o evidencias verificables.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ALCANCE Y LIMITACIONES */}
        <div className="mt-16 rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
          <div className="flex items-start gap-3">
            <Info size={23} className="mt-1 shrink-0 text-amber-700" />
            <div>
              <h3 className="text-lg font-bold text-amber-950">
                Alcance y limitaciones de los datos
              </h3>
              <p className="mt-3 text-sm leading-7 text-amber-950/80">
                El conjunto de 1.500.000 registros se utiliza para
                desarrollar y evaluar el proceso de almacenamiento y
                análisis. Las mediciones simuladas no representan
                condiciones reales de un cultivo. Por esta razón, los
                patrones identificados permiten estudiar el comportamiento
                del conjunto procesado, pero no constituyen diagnósticos
                agronómicos ni demuestran relaciones de causalidad.
              </p>
            </div>
          </div>
        </div>

        {/* CIERRE */}
        <div className="mt-16 flex flex-col gap-5 rounded-2xl bg-[#062331] p-8 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#8BEA00]">
              <HardDrive size={19} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Infraestructura de datos
              </span>
            </div>

            <h3 className="mt-3 text-xl font-bold">
              Información estructurada para el análisis.
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
              La organización relacional y dimensional permite disponer
              de una base para consultar, comparar e interpretar las
              mediciones del ecosistema SmartGreenZone.
            </p>
          </div>

          <a
            href="#analisis"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#8BEA00] px-5 py-3 text-xs font-bold text-[#062331] transition hover:bg-white"
          >
            Explorar análisis
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}