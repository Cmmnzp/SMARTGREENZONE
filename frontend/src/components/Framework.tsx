
import {
  BookOpen,
  Wifi,
  Database,
  Cloud,
  BarChart3,
  Sprout,
  Layers3,
  ArrowRight,
} from 'lucide-react'

const concepts = [
  {
    icon: Wifi,
    number: '01',
    title: 'Internet de las Cosas (IoT)',
    description:
      'Tecnología que permite conectar dispositivos físicos a través de redes de comunicación para recopilar y transmitir información mediante sensores.',
    application:
      'En SmartGreenZone permite adquirir variables ambientales mediante el ESP32 y sus sensores.',
    color: '#00BFEA',
    bg: '#E5F9FE',
  },
  {
    icon: Sprout,
    number: '02',
    title: 'Agricultura inteligente',
    description:
      'Enfoque que incorpora tecnologías digitales para monitorear condiciones de producción agrícola y mejorar la disponibilidad de información.',
    application:
      'El proyecto aplica este enfoque al monitoreo de variables relacionadas con el entorno agrícola.',
    color: '#65B900',
    bg: '#F0F9E4',
  },
  {
    icon: Database,
    number: '03',
    title: 'Big Data',
    description:
      'Conjunto de tecnologías y prácticas para gestionar, procesar y analizar grandes volúmenes de datos, identificando patrones y tendencias.',
    application:
      'Permite organizar y analizar los registros de sensores recopilados por el sistema.',
    color: '#D6A900',
    bg: '#FFF8D9',
  },
  {
    icon: Layers3,
    number: '04',
    title: 'Almacén de datos (Data Warehouse)',
    description:
      'Repositorio estructurado que integra información organizada para facilitar consultas, análisis históricos y generación de indicadores.',
    application:
      'SmartGreenZone utiliza un modelo dimensional con tablas de hechos y dimensiones en Azure SQL.',
    color: '#64748B',
    bg: '#EEF2F6',
  },
  {
    icon: Cloud,
    number: '05',
    title: 'Computación en la nube',
    description:
      'Modelo de acceso a recursos informáticos y servicios de almacenamiento y procesamiento a través de Internet.',
    application:
      'Azure SQL se utiliza como servicio de base de datos para almacenar la información del proyecto.',
    color: '#00BFEA',
    bg: '#E5F9FE',
  },
  {
    icon: BarChart3,
    number: '06',
    title: 'Inteligencia de negocios (BI)',
    description:
      'Conjunto de herramientas y procesos que transforman datos en información visual para apoyar el análisis y la toma de decisiones.',
    application:
      'Power BI permite representar los indicadores y comportamientos de las variables monitoreadas.',
    color: '#D6A900',
    bg: '#FFF8D9',
  },
]

export default function Framework() {
  return (
    <section id="marco-referencial" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#8BEA00] bg-[#F7FBEF] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <BookOpen size={12} className="mr-2" />
            Marco referencial
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-4xl">
            Los fundamentos detrás de
            <span className="text-[#65B900]"> SmartGreenZone.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            El proyecto integra conceptos de IoT, agricultura inteligente,
            Big Data y análisis de información. Estos fundamentos permiten
            comprender las tecnologías utilizadas y su relación con la
            solución desarrollada.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => {
            const Icon = concept.icon

            return (
              <article
                key={concept.number}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: concept.bg,
                      color: concept.color,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <span className="text-sm font-extrabold text-slate-300">
                    {concept.number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#062331]">
                  {concept.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {concept.description}
                </p>

                <div className="mt-5 flex-1 rounded-xl bg-[#F7FAF8] p-4">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#579900]">
                    Aplicación en el proyecto
                  </span>

                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    {concept.application}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-[#062331] p-8 text-white md:p-9">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8BEA00]">
            Integración conceptual
          </span>

          <h3 className="mt-3 text-xl font-bold">
            Tecnologías conectadas en un mismo ecosistema
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            IoT permite adquirir los datos; la infraestructura de
            almacenamiento permite organizarlos; los procesos de Big Data
            facilitan su gestión y Power BI permite convertirlos en
            visualizaciones para su interpretación.
          </p>
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="#metodologia"
            className="inline-flex items-center gap-2 rounded-full bg-[#062331] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#0C4356]"
          >
            Continuar a metodología
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}
