
import {
  ClipboardList,
  Target,
  Search,
  Database,
  Boxes,
  ShieldCheck,
  Rocket,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Workflow,
  Lightbulb,
  FileCheck2,
} from 'lucide-react'

const phases = [
  {
    number: '01',
    icon: Target,
    title: 'Comprensión del negocio',
    subtitle: 'Business Understanding',
    description:
      'Se identifica la problemática relacionada con el monitoreo de las condiciones ambientales en entornos agrícolas y se establece el propósito de SmartGreenZone como solución tecnológica basada en IoT y gestión de datos.',
    activities: [
      'Identificación de las necesidades de monitoreo agrícola.',
      'Definición del problema y la población beneficiaria.',
      'Establecimiento del objetivo general y los objetivos específicos.',
      'Delimitación del alcance tecnológico y académico.',
    ],
    evidence:
      'Planteamiento del problema, justificación, objetivos y alcance del proyecto.',
    status: 'Completada',
    color: '#65B900',
    bg: '#F0F9E4',
  },
  {
    number: '02',
    icon: Search,
    title: 'Comprensión de los datos',
    subtitle: 'Data Understanding',
    description:
      'Se identifican las fuentes de información, los dispositivos de adquisición y las características de las variables que permiten describir las condiciones ambientales y del suelo.',
    activities: [
      'Identificación de los cinco sensores físicos del sistema.',
      'Caracterización de las seis variables monitoreadas.',
      'Reconocimiento de las fuentes y estructuras de los registros.',
      'Exploración inicial de los datos disponibles y simulados.',
    ],
    evidence:
      'Documentación de sensores, estructura de las mediciones y registros de adquisición.',
    status: 'Completada',
    color: '#00BFEA',
    bg: '#E5F9FE',
  },
  {
    number: '03',
    icon: Database,
    title: 'Preparación de los datos',
    subtitle: 'Data Preparation',
    description:
      'Se organizan y preparan los registros para su almacenamiento y posterior análisis. Esta fase contempla la simulación de mediciones y la revisión de la estructura de la información.',
    activities: [
      'Organización de los registros de medición.',
      'Simulación de 1.500.000 registros para el escenario de estudio.',
      'Revisión de identificadores y estructura de los datos.',
      'Preparación de la información para su integración analítica.',
    ],
    evidence:
      'Registros preparados, consultas SQL y estructura de las tablas de origen.',
    status: 'Completada',
    color: '#D6A900',
    bg: '#FFF8D9',
  },
  {
    number: '04',
    icon: Boxes,
    title: 'Modelado',
    subtitle: 'Modeling',
    description:
      'Se construye una estructura multidimensional que permite organizar las mediciones y consultarlas desde diferentes perspectivas. El modelo implementado utiliza un esquema estrella.',
    activities: [
      'Diseño del modelo dimensional.',
      'Implementación de la tabla de hechos FactMediciones.',
      'Construcción de cinco tablas de dimensiones.',
      'Establecimiento de las relaciones entre las tablas.',
    ],
    evidence:
      'Modelo estrella implementado en Azure SQL con una tabla de hechos y cinco dimensiones.',
    status: 'Completada',
    color: '#64748B',
    bg: '#EEF2F6',
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'Evaluación',
    subtitle: 'Evaluation',
    description:
      'Se comprueba la consistencia de la información almacenada y se realizan análisis exploratorios para identificar comportamientos, variaciones y asociaciones entre las variables del escenario simulado.',
    activities: [
      'Validación del volumen de registros almacenados.',
      'Comprobación de la unicidad de los identificadores.',
      'Revisión de las relaciones dimensionales.',
      'Exploración de tendencias, diferencias y correlaciones.',
      'Interpretación de resultados y sus limitaciones.',
    ],
    evidence:
      'Consultas SQL de validación, resultados estadísticos y cinco conocimientos documentados.',
    status: 'Desarrollada',
    color: '#00BFEA',
    bg: '#E5F9FE',
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Despliegue',
    subtitle: 'Deployment',
    description:
      'Se presentan los resultados del proyecto mediante recursos de visualización y documentación, transformando los análisis en conocimientos que pueden orientar decisiones dentro del escenario agrícola simulado.',
    activities: [
      'Preparación de indicadores y visualizaciones.',
      'Documentación de cinco conocimientos evidentes.',
      'Formulación de dos decisiones sustentadas.',
      'Integración de los resultados en el sitio web.',
      'Publicación y revisión de la solución.',
    ],
    evidence:
      'Sitio web, conocimientos, decisiones y visualizaciones del proyecto.',
    status: 'En desarrollo',
    color: '#8B5CF6',
    bg: '#F3EAFE',
  },
]

const schedule = [
  {
    week: '01',
    title: 'Definición del proyecto',
    phase: 'Comprensión del negocio',
    activities:
      'Identificación de la problemática, necesidades, objetivos y alcance de SmartGreenZone.',
    result: 'Problema y objetivos definidos.',
    color: '#65B900',
  },
  {
    week: '02',
    title: 'Exploración de los datos',
    phase: 'Comprensión de los datos',
    activities:
      'Identificación de sensores, variables ambientales, fuentes y estructuras de información.',
    result: 'Variables y fuentes identificadas.',
    color: '#00BFEA',
  },
  {
    week: '03',
    title: 'Preparación de registros',
    phase: 'Preparación de los datos',
    activities:
      'Organización de las mediciones, simulación de registros y revisión de estructuras.',
    result: 'Datos preparados para el procesamiento.',
    color: '#D6A900',
  },
  {
    week: '04',
    title: 'Organización de información',
    phase: 'Preparación de los datos',
    activities:
      'Revisión de identificadores, estructuras de origen y preparación de la información.',
    result: 'Información organizada.',
    color: '#D6A900',
  },
  {
    week: '05',
    title: 'Construcción del modelo',
    phase: 'Modelado',
    activities:
      'Diseño e implementación del esquema estrella en Azure SQL.',
    result: 'Modelo dimensional implementado.',
    color: '#64748B',
  },
  {
    week: '06',
    title: 'Validación y análisis',
    phase: 'Evaluación',
    activities:
      'Verificación de registros, relaciones y exploración estadística de las variables.',
    result: 'Validaciones y análisis realizados.',
    color: '#00BFEA',
  },
  {
    week: '07',
    title: 'Generación de conocimientos',
    phase: 'Despliegue',
    activities:
      'Preparación de visualizaciones y documentación de los conocimientos obtenidos.',
    result: 'Conocimientos documentados.',
    color: '#8B5CF6',
  },
  {
    week: '08',
    title: 'Decisiones y publicación',
    phase: 'Despliegue',
    activities:
      'Formulación de decisiones, integración de contenidos y revisión del sitio web.',
    result: 'Presentación de resultados del proyecto.',
    color: '#8B5CF6',
  },
]

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-[#F7FAF8] px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* ENCABEZADO */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#8BEA00] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <ClipboardList size={12} className="mr-2" />
            Metodología de desarrollo
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-4xl">
            ¿Cómo desarrollamos
            <span className="text-[#65B900]"> el proyecto?</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            SmartGreenZone adopta CRISP-DM como metodología para organizar
            el desarrollo del Proyecto de Gestión del Conocimiento.
            Este enfoque permite estructurar el trabajo desde la
            comprensión de la problemática y los datos hasta la
            evaluación y presentación de los resultados.
          </p>
        </div>

        {/* INTRODUCCIÓN CRISP-DM */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-[#062331] p-7 text-white md:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#8BEA00]/15 text-[#8BEA00]">
              <Workflow size={30} />
            </div>

            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8BEA00]">
                Metodología de referencia
              </span>

              <h3 className="mt-2 text-2xl font-bold">
                CRISP-DM
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Cross Industry Standard Process for Data Mining es un
                modelo de referencia que organiza los proyectos de
                análisis de datos en seis fases. Su aplicación permite
                relacionar los objetivos del proyecto con la preparación,
                modelado, evaluación y utilización de la información.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <span className="text-xs font-bold text-[#8BEA00]">
                  {phase.number}
                </span>
                <p className="mt-2 text-xs font-semibold leading-5 text-white">
                  {phase.title}
                </p>
                {index !== phases.length - 1 && (
                  <ArrowRight
                    size={13}
                    className="mt-3 hidden text-[#8BEA00] lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FASES CRISP-DM */}
        <div className="mt-16">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Desarrollo metodológico
            </span>

            <h3 className="mt-3 text-2xl font-extrabold text-[#062331] md:text-3xl">
              Las seis fases de CRISP-DM
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Cada fase representa un conjunto de actividades,
              resultados y evidencias que permiten comprender el
              desarrollo de SmartGreenZone.
            </p>
          </div>

          <div className="mt-9 space-y-5">
            {phases.map((phase) => {
              const Icon = phase.icon

              return (
                <article
                  key={phase.number}
                  className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#8BEA00] md:grid-cols-[75px_1fr_1fr] md:items-start md:p-8"
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

                    <div className="md:mt-3">
                      <span className="text-sm font-extrabold text-slate-300">
                        FASE {phase.number}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-bold text-[#062331]">
                        {phase.title}
                      </h4>

                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[9px] font-semibold text-slate-500">
                        {phase.subtitle}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {phase.description}
                    </p>

                    <div className="mt-4">
                      <span
                        className="inline-flex rounded-full px-3 py-1 text-[10px] font-bold"
                        style={{
                          backgroundColor: phase.bg,
                          color: phase.color,
                        }}
                      >
                        {phase.status}
                      </span>
                    </div>
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

                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#062331]">
                        <FileCheck2 size={14} className="text-[#65B900]" />
                        Evidencia o resultado
                      </div>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {phase.evidence}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* CRONOGRAMA */}
        <div className="mt-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
                Planificación del proyecto
              </span>

              <h3 className="mt-3 text-2xl font-extrabold text-[#062331] md:text-3xl">
                Cronograma de desarrollo
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Distribución de referencia de las actividades del
                proyecto en ocho semanas, organizadas de acuerdo con
                las fases de CRISP-DM.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <CalendarDays size={17} className="text-[#65B900]" />
              Planificación por semanas
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-[65px_1fr] border-b border-slate-200 bg-[#062331] px-5 py-4 text-[10px] font-bold uppercase tracking-wider text-white md:grid-cols-[80px_1.1fr_1fr_1fr]">
              <span>Semana</span>
              <span>Actividad</span>
              <span className="hidden md:block">Fase CRISP-DM</span>
              <span className="hidden md:block">Resultado esperado</span>
            </div>

            {schedule.map((item, index) => (
              <div
                key={item.week}
                className={`grid grid-cols-[65px_1fr] gap-3 px-5 py-5 md:grid-cols-[80px_1.1fr_1fr_1fr] md:items-center md:gap-4 ${
                  index !== schedule.length - 1
                    ? 'border-b border-slate-100'
                    : ''
                }`}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-xs font-extrabold"
                  style={{
                    backgroundColor: `${item.color}18`,
                    color: item.color,
                  }}
                >
                  {item.week}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#062331]">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-slate-500 md:hidden">
                    {item.activities}
                  </p>

                  <span className="mt-2 inline-flex rounded-full bg-slate-100 px-2 py-1 text-[9px] font-semibold text-slate-500 md:hidden">
                    {item.phase}
                  </span>
                </div>

                <div className="hidden md:block">
                  <span
                    className="inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold"
                    style={{
                      backgroundColor: `${item.color}18`,
                      color: item.color,
                    }}
                  >
                    {item.phase}
                  </span>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.activities}
                  </p>
                </div>

                <div className="hidden text-xs leading-6 text-slate-500 md:block">
                  <CheckCircle2
                    size={15}
                    className="mb-1 text-[#65B900]"
                  />
                  {item.result}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[11px] leading-6 text-slate-400">
            Nota: este cronograma representa una planificación de
            referencia para organizar las actividades del proyecto.
            La distribución temporal no constituye por sí misma un
            registro de las fechas reales de ejecución.
          </p>
        </div>

        {/* ENFOQUE METODOLÓGICO */}
        <div className="mt-16 rounded-2xl bg-[#062331] p-7 text-white md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8BEA00]/15 text-[#8BEA00]">
              <Lightbulb size={25} />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8BEA00]">
                Integración metodológica
              </span>

              <h3 className="mt-2 text-lg font-bold">
                De la comprensión del problema a la generación de conocimiento
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                La aplicación de CRISP-DM permite organizar el proceso
                de SmartGreenZone desde la identificación de las
                necesidades agrícolas hasta la preparación de
                información analítica. De esta manera, la adquisición
                de datos IoT, el almacenamiento en Azure SQL y la
                interpretación de los resultados se articulan en un
                mismo proceso de gestión del conocimiento.
              </p>
            </div>
          </div>
        </div>

        {/* NAVEGACIÓN */}
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
