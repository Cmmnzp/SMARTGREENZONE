
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
} from 'lucide-react'

const etlSteps = [
  {
    number: '01',
    title: 'Extracción',
    description:
      'Obtención de los registros almacenados en las tablas de origen de SmartGreenZone.',
    icon: FileSpreadsheet,
    color: '#00A8CC',
    bg: '#E5F9FE',
  },
  {
    number: '02',
    title: 'Transformación',
    description:
      'Organización de los datos, preparación de claves y asociación con las dimensiones correspondientes.',
    icon: Workflow,
    color: '#65B900',
    bg: '#F0F9E4',
  },
  {
    number: '03',
    title: 'Carga',
    description:
      'Inserción de los registros preparados en la tabla de hechos y las tablas dimensionales del DW.',
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
  '1.500.000 registros cargados en la tabla de hechos.',
  '1.500.000 identificadores de medición únicos.',
  'Relaciones dimensionales implementadas.',
  'Modelo estrella visualizado en Azure SQL.',
]

export default function DataManagement() {
  return (
    <section id="datos" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8BEA00] bg-[#F7FBEF] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <Database size={12} />
            Gestión de datos
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-4xl">
            De los registros a una
            <span className="text-[#65B900]"> estructura analítica.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            SmartGreenZone utiliza procesos de gestión y transformación
            de datos para organizar las mediciones obtenidas por los
            dispositivos IoT en una estructura dimensional que facilita
            su consulta y análisis.
          </p>
        </div>

        {/* INDICADORES */}
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

        {/* PROCESO ETL */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Integración de información
            </span>

            <h3 className="mt-2 text-2xl font-extrabold text-[#062331]">
              Proceso ETL
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              El proceso ETL permite extraer los registros de origen,
              transformarlos y cargarlos en la estructura dimensional
              implementada en Azure SQL.
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
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-[#062331]">
                Herramienta de implementación:
              </strong>{' '}
              las operaciones de extracción, transformación y carga
              se ejecutaron mediante consultas SQL en Azure SQL.
            </p>
          </div>
        </div>

        {/* MODELO ESTRELLA */}
        <div className="mt-20">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Almacenamiento analítico
            </span>

            <h3 className="mt-2 text-2xl font-extrabold text-[#062331]">
              Modelo dimensional: esquema estrella
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
              El Data Warehouse se organiza mediante una tabla central
              de hechos relacionada con cinco dimensiones. Esta
              estructura permite analizar las mediciones desde
              diferentes perspectivas.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F7FAF8] p-3 sm:p-5">
            <img
              src="/images/azure-sql/modelo-estrella.png"
              alt="Diagrama real del modelo dimensional de SmartGreenZone"
              loading="lazy"
              className="h-auto w-full rounded-xl object-contain"
            />

            <div className="flex flex-col justify-between gap-2 border-t border-slate-200 px-2 pt-4 sm:flex-row sm:items-center">
              <p className="text-xs font-semibold text-[#062331]">
                Figura 1. Modelo dimensional implementado en Azure SQL.
              </p>
              <span className="text-[10px] text-slate-400">
                Fuente: elaboración propia.
              </span>
            </div>
          </div>

          {/* TABLA DE HECHOS */}
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
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

            {/* DIMENSIONES */}
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
        </div>

        {/* VALIDACIÓN */}
        <div className="mt-20">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Control de calidad
            </span>

            <h3 className="mt-2 text-2xl font-extrabold text-[#062331]">
              Validación de los registros
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Se realizaron consultas SQL para comprobar el volumen
              de información y la unicidad de los identificadores
              de medición.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img
                src="/images/azure-sql/validacion-registros.png"
                alt="Consulta SQL y resultado de validación de registros"
                loading="lazy"
                className="h-auto w-full object-contain"
              />

              <div className="border-t border-slate-100 px-5 py-4">
                <p className="text-xs font-semibold text-[#062331]">
                  Figura 2. Consulta SQL de validación de registros.
                </p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Fuente: elaboración propia.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#8BEA00]/40 bg-[#F7FBEF] p-7">
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
                Registros almacenados en FactMediciones.
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
              La organización dimensional permite disponer de una
              base consistente para construir indicadores y
              visualizaciones en las herramientas de análisis.
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
