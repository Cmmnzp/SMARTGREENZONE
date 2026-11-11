
import {
  BookOpen,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Globe,
  Layers3,
  Radio,
} from 'lucide-react'

const referenceGroups = [
  {
    title: 'Internet de las cosas y agricultura inteligente',
    description:
      'Fundamentos científicos sobre la aplicación de IoT, sensores y tecnologías digitales en entornos agrícolas.',
    icon: Globe,
    references: [
      {
        authors: 'Tao, W., Zhao, L., Wang, G., & Liang, R.',
        year: '2021',
        title:
          'Review of the internet of things communication technologies in smart agriculture and challenges.',
        publication: 'Computers and Electronics in Agriculture, 189, 106352.',
        doi: 'https://doi.org/10.1016/j.compag.2021.106352',
        type: 'Artículo científico',
      },
      {
        authors:
          'Rajak, P., Ganguly, A., Adhikary, S., & Bhattacharya, S.',
        year: '2023',
        title:
          'Internet of Things and smart sensors in agriculture: Scopes and challenges.',
        publication: 'Journal of Agriculture and Food Research, 14, 100776.',
        doi: 'https://doi.org/10.1016/j.jafr.2023.100776',
        type: 'Artículo científico',
      },
    ],
  },
  {
    title: 'Hardware y adquisición de datos',
    description:
      'Documentación técnica relacionada con el microcontrolador utilizado para la adquisición de variables.',
    icon: Cpu,
    references: [
      {
        authors: 'Espressif Systems.',
        year: '2025',
        title: 'ESP32 Series Datasheet.',
        publication: 'Documentación técnica del fabricante.',
        doi: 'https://documentation.espressif.com/esp32_datasheet_en.html',
        type: 'Ficha técnica',
      },
    ],
  },
  {
    title: 'Comunicación e integración IoT',
    description:
      'Estándares y documentación de las tecnologías utilizadas para transmitir e integrar las mediciones.',
    icon: Radio,
    references: [
      {
        authors:
          'Banks, A., Briggs, E., Borgendale, K., & Gupta, R. (Eds.).',
        year: '2019',
        title: 'MQTT Version 5.0.',
        publication: 'OASIS Standard.',
        doi: 'https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html',
        type: 'Estándar técnico',
      },
      {
        authors: 'OpenJS Foundation.',
        year: 's. f.',
        title: 'Node-RED: User Guide.',
        publication: 'Documentación oficial de Node-RED.',
        doi: 'https://nodered.org/docs/user-guide/',
        type: 'Documentación técnica',
      },
    ],
  },
  {
    title: 'Bases de datos y almacenamiento analítico',
    description:
      'Referencias para el almacenamiento en la nube y la estructuración de modelos dimensionales.',
    icon: Database,
    references: [
      {
        authors: 'Microsoft.',
        year: 's. f.',
        title: 'Azure SQL Database documentation.',
        publication: 'Microsoft Learn.',
        doi: 'https://learn.microsoft.com/en-us/azure/azure-sql/database/',
        type: 'Documentación técnica',
      },
      {
        authors: 'Kimball, R., & Ross, M.',
        year: '2013',
        title:
          'The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling (3rd ed.).',
        publication: 'John Wiley & Sons.',
        doi: 'https://www.wiley.com/en-us/The+Data+Warehouse+Toolkit%3A+The+Definitive+Guide+to+Dimensional+Modeling%2C+3rd+Edition-p-9781118732281',
        type: 'Libro especializado',
      },
    ],
  },
  {
    title: 'Inteligencia de negocios y visualización',
    description:
      'Documentación de referencia para la conexión, modelado y presentación de información mediante herramientas BI.',
    icon: Layers3,
    references: [
      {
        authors: 'Microsoft.',
        year: 's. f.',
        title: 'Power BI documentation.',
        publication: 'Microsoft Learn.',
        doi: 'https://learn.microsoft.com/en-us/power-bi/',
        type: 'Documentación técnica',
      },
    ],
  },
]

export default function References() {
  let referenceNumber = 0

  return (
    <section
      id="referencias"
      className="relative overflow-hidden bg-[#F4F8FA] px-6 py-24 text-[#062331] md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00C8F5]/30 bg-[#00C8F5]/10 px-4 py-2 text-sm font-bold text-[#087E9B]">
            <BookOpen size={16} />
            Fuentes documentales
          </span>

          <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-5xl">
            Referencias <span className="text-[#087E9B]">bibliográficas</span>
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            Fuentes académicas, estándares y documentación técnica que
            respaldan los fundamentos conceptuales y las tecnologías
            empleadas en el desarrollo de SmartGreenZone.
          </p>
        </div>

        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <FileText className="mb-3 text-[#087E9B]" size={25} />
            <p className="text-2xl font-bold">
              {referenceGroups.reduce(
                (total, group) => total + group.references.length,
                0
              )}
            </p>
            <p className="text-sm text-slate-500">Fuentes documentales</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <BookOpen className="mb-3 text-[#087E9B]" size={25} />
            <p className="text-2xl font-bold">{referenceGroups.length}</p>
            <p className="text-sm text-slate-500">Categorías temáticas</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <ExternalLink className="mb-3 text-[#087E9B]" size={25} />
            <p className="text-2xl font-bold">APA 7</p>
            <p className="text-sm text-slate-500">Criterio de presentación</p>
          </div>
        </div>

        <div className="space-y-10">
          {referenceGroups.map((group) => {
            const Icon = group.icon

            return (
              <div
                key={group.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="flex items-start gap-4 border-b border-slate-100 bg-slate-50 px-6 py-5 md:px-8">
                  <div className="rounded-xl bg-[#062331] p-3 text-[#8BEA00]">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold md:text-xl">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-slate-100 px-6 md:px-8">
                  {group.references.map((reference) => {
                    referenceNumber += 1

                    return (
                      <article
                        key={reference.title}
                        className="py-7 md:pl-8"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#062331] text-sm font-bold text-[#8BEA00]">
                            {String(referenceNumber).padStart(2, '0')}
                          </span>

                          <div className="min-w-0 flex-1">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              <span className="rounded-full bg-[#00C8F5]/10 px-3 py-1 text-xs font-semibold text-[#087E9B]">
                                {reference.type}
                              </span>
                              <span className="text-xs text-slate-400">
                                {reference.year}
                              </span>
                            </div>

                            <p className="text-sm leading-7 text-slate-700 md:text-base">
                              {reference.authors} ({reference.year}).{' '}
                              <span className="italic">
                                {reference.title}
                              </span>{' '}
                              {reference.publication}
                            </p>

                            <a
                              href={reference.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex max-w-full items-center gap-2 break-all text-sm font-semibold text-[#087E9B] transition hover:text-[#062331]"
                            >
                              Consultar fuente
                              <ExternalLink
                                size={15}
                                className="shrink-0"
                              />
                            </a>
                          </div>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-[#00C8F5]/20 bg-[#062331] p-7 text-white md:p-9">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-[#8BEA00]/10 p-3 text-[#8BEA00]">
              <BookOpen size={25} />
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold">
                Consideración académica
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                Esta recopilación reúne fuentes de apoyo para la descripción
                tecnológica y conceptual del proyecto. La bibliografía
                definitiva debe complementarse con los artículos científicos
                utilizados en el estado del arte y con las fuentes citadas
                dentro del documento académico del Proyecto de Gestión del
                Conocimiento.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs leading-relaxed text-slate-400">
          SmartGreenZone · Proyecto de Gestión del Conocimiento · Big Data 701N
        </p>
      </div>
    </section>
  )
}
