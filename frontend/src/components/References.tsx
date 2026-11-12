import {
  BookOpen,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Globe,
  Layers3,
  Radio,
  Sprout,
  Lightbulb,
} from 'lucide-react'

/* =========================================================
   ANTECEDENTES DE INVESTIGACIÓN
   Los aportes se describen a partir del alcance temático
   de las publicaciones citadas; no se atribuyen resultados
   experimentales que no estén documentados en esta sección.
========================================================= */

const researchBackground = [
  {
    number: '01',
    authors: 'Tao, W., Zhao, L., Wang, G., & Liang, R.',
    year: '2021',
    title:
      'Review of the internet of things communication technologies in smart agriculture and challenges.',
    publication: 'Computers and Electronics in Agriculture, 189, 106352.',
    doi: 'https://doi.org/10.1016/j.compag.2021.106352',
    focus:
      'Revisión de las tecnologías de comunicación del Internet de las Cosas aplicadas a la agricultura inteligente y de los desafíos asociados con su implementación.',
    contribution:
      'Aporta un fundamento para comprender la importancia de la comunicación entre dispositivos y plataformas en una solución agrícola conectada.',
    relation:
      'En SmartGreenZone, este antecedente se relaciona con la transmisión de las lecturas capturadas por el ESP32 mediante Wi-Fi y MQTT hacia Node-RED.',
  },
  {
    number: '02',
    authors: 'Rajak, P., Ganguly, A., Adhikary, S., & Bhattacharya, S.',
    year: '2023',
    title:
      'Internet of Things and smart sensors in agriculture: Scopes and challenges.',
    publication: 'Journal of Agriculture and Food Research, 14, 100776.',
    doi: 'https://doi.org/10.1016/j.jafr.2023.100776',
    focus:
      'Aborda el alcance y los desafíos del Internet de las Cosas y de los sensores inteligentes en el contexto agrícola.',
    contribution:
      'Sirve como antecedente para sustentar el uso de sensores y tecnologías conectadas como medios para obtener información del entorno agrícola.',
    relation:
      'Se vincula con la adquisición de seis variables ambientales y del suelo mediante cinco sensores físicos conectados al ESP32.',
  },
]

/* =========================================================
   FUENTES DOCUMENTALES Y TECNOLÓGICAS
========================================================= */

const referenceGroups = [
  {
    title: 'Internet de las cosas y agricultura inteligente',
    description:
      'Investigaciones científicas sobre la aplicación de IoT, sensores y tecnologías digitales en entornos agrícolas.',
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
      'Documentación técnica relacionada con el microcontrolador utilizado para adquirir las variables del sistema.',
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
      'Estándares y documentación de las tecnologías utilizadas para transmitir, recibir e integrar las mediciones.',
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
      'Referencias para el almacenamiento de información y la estructuración de modelos dimensionales.',
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
      'Documentación de referencia para la conexión, el modelado y la presentación de información mediante herramientas BI.',
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
  const totalReferences = referenceGroups.reduce(
    (total, group) => total + group.references.length,
    0,
  )

  return (
    <section
      id="referencias"
      className="relative overflow-hidden bg-[#F4F8FA] px-6 py-24 text-[#062331] md:px-12"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#00C8F5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-[900px] h-96 w-96 rounded-full bg-[#8BEA00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <div className="mb-16 max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00C8F5]/30 bg-[#00C8F5]/10 px-4 py-2 text-sm font-bold text-[#087E9B]">
            <BookOpen size={16} />
            Marco referencial y fuentes
          </span>

          <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-5xl">
            Fundamentos que sustentan{' '}
            <span className="text-[#087E9B]">SmartGreenZone.</span>
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            El marco referencial reúne investigaciones relacionadas con IoT
            y agricultura inteligente, junto con conceptos y documentación
            técnica que fundamentan la adquisición, comunicación,
            almacenamiento y análisis de los datos del proyecto.
          </p>
        </div>

        {/* INDICADORES */}
        <div className="mb-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <FileText className="mb-3 text-[#087E9B]" size={25} />
            <p className="text-2xl font-bold">{totalReferences}</p>
            <p className="text-sm text-slate-500">Fuentes documentales</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <BookOpen className="mb-3 text-[#087E9B]" size={25} />
            <p className="text-2xl font-bold">{researchBackground.length}</p>
            <p className="text-sm text-slate-500">Antecedentes científicos</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <Layers3 className="mb-3 text-[#087E9B]" size={25} />
            <p className="text-2xl font-bold">{referenceGroups.length}</p>
            <p className="text-sm text-slate-500">Categorías temáticas</p>
          </div>
        </div>

        {/* ANTECEDENTES DE INVESTIGACIÓN */}
        <div className="mb-20" id="antecedentes">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-[#68B900]">
              Antecedentes de investigación
            </span>

            <h3 className="mt-3 text-3xl font-extrabold text-[#062331] md:text-4xl">
              Investigaciones que orientan la propuesta.
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Se consideran estudios relacionados con la comunicación IoT,
              los sensores inteligentes y su aplicación en agricultura.
              Estos trabajos aportan referentes para comprender el enfoque
              tecnológico de SmartGreenZone.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {researchBackground.map((study) => (
              <article
                key={study.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#062331] text-sm font-bold text-[#8BEA00]">
                    {study.number}
                  </span>

                  <span className="rounded-full bg-[#00C8F5]/10 px-3 py-1.5 text-xs font-semibold text-[#087E9B]">
                    Artículo científico · {study.year}
                  </span>
                </div>

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {study.authors} ({study.year})
                </p>

                <h4 className="mt-3 text-lg font-bold leading-7 text-[#062331]">
                  {study.title}
                </h4>

                <p className="mt-2 text-sm italic leading-6 text-slate-500">
                  {study.publication}
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#579900]">
                      Enfoque del estudio
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {study.focus}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#579900]">
                      Aporte como antecedente
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {study.contribution}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F3F8F1] p-4">
                    <div className="flex items-center gap-2">
                      <Sprout size={17} className="text-[#579900]" />
                      <p className="text-xs font-bold uppercase tracking-wider text-[#416F00]">
                        Relación con SmartGreenZone
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {study.relation}
                    </p>
                  </div>
                </div>

                <a
                  href={study.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087E9B] transition hover:text-[#062331]"
                >
                  Consultar publicación
                  <ExternalLink size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* FUNDAMENTOS Y FUENTES TECNOLÓGICAS */}
        <div id="fuentes-documentales">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-[#68B900]">
              Fundamentos y fuentes documentales
            </span>

            <h3 className="mt-3 text-3xl font-extrabold text-[#062331] md:text-4xl">
              Referentes conceptuales y tecnológicos.
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Las siguientes fuentes complementan los antecedentes y
              respaldan la selección de tecnologías, estándares y métodos
              utilizados en la arquitectura de la solución.
            </p>
          </div>

          <div className="space-y-8">
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
                      <h4 className="text-lg font-bold md:text-xl">
                        {group.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="divide-y divide-slate-100 px-6 md:px-8">
                    {group.references.map((reference, index) => (
                      <article
                        key={reference.title}
                        className="py-7 md:pl-8"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#062331] text-sm font-bold text-[#8BEA00]">
                            {reference.type === 'Artículo científico'
                              ? '01'
                              : String(index + 1).padStart(2, '0')}
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
                              <span className="italic">
                                {reference.publication}
                              </span>
                            </p>

                            <a
                              href={reference.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex max-w-full items-center gap-2 break-all text-sm font-semibold text-[#087E9B] transition hover:text-[#062331]"
                            >
                              Consultar fuente
                              <ExternalLink size={15} className="shrink-0" />
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ARTICULACIÓN DEL MARCO REFERENCIAL */}
        <div className="mt-16 rounded-3xl border border-[#00C8F5]/20 bg-gradient-to-r from-[#F3FAF0] to-[#EFF9FC] p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-[#062331] p-3 text-[#8BEA00]">
              <Lightbulb size={25} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#062331] md:text-2xl">
                Articulación con la solución propuesta
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Los antecedentes sobre IoT y sensores inteligentes
                sustentan la adquisición de información ambiental. Los
                referentes de comunicación orientan la transmisión mediante
                MQTT y la integración con Node-RED. Por su parte, la
                documentación de Azure SQL y los fundamentos de modelado
                dimensional respaldan la organización de los registros
                para su análisis. Finalmente, Power BI se contempla como
                herramienta de visualización dentro del componente
                analítico del proyecto.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                En conjunto, estas fuentes permiten relacionar la
                investigación previa con las decisiones de diseño e
                implementación de SmartGreenZone, sin atribuir a los
                estudios citados resultados experimentales propios del
                prototipo.
              </p>
            </div>
          </div>
        </div>

        {/* NOTA ACADÉMICA */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h3 className="mb-3 text-lg font-bold text-[#062331]">
            Consideración académica
          </h3>

          <p className="text-sm leading-7 text-slate-600">
            Las publicaciones científicas se presentan como antecedentes
            temáticos y las demás fuentes como referentes conceptuales o
            tecnológicos. Para la versión definitiva del informe académico,
            las afirmaciones específicas sobre resultados de cada
            investigación deben contrastarse con el texto completo de los
            artículos. Las referencias deben conservar correspondencia
            con las citas incluidas en el documento.
          </p>
        </div>

        <p className="mt-10 text-center text-xs leading-relaxed text-slate-400">
          SmartGreenZone · Proyecto de Gestión del Conocimiento · Big Data 701N
        </p>
      </div>
    </section>
  )
}
