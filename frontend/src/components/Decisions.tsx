
import {
  BrainCircuit,
  ClipboardCheck,
  Activity,
  Database,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Target,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react'

const decisions = [
  {
    number: '01',
    category: 'Monitoreo y control',
    title: 'Establecer alertas para comportamientos atípicos de los sensores',
    problem:
      'El análisis identificó una variación destacada en las lecturas del MQ-2, con un promedio de 760.50 ADC el 30 de octubre y un máximo de 4095 ADC.',
    decision:
      'Incorporar mecanismos de seguimiento que permitan identificar valores fuera de los rangos de referencia definidos para cada sensor y generar alertas para su revisión.',
    actions: [
      'Definir rangos de referencia para las variables.',
      'Identificar valores atípicos en las mediciones.',
      'Visualizar las alertas mediante Node-RED.',
      'Revisar y validar las lecturas antes de interpretarlas.',
    ],
    expected:
      'Facilitar la identificación temprana de lecturas inusuales y mejorar el seguimiento de las variables monitoreadas.',
    icon: Activity,
    color: '#00A8CC',
    bg: '#E5F9FE',
  },
  {
    number: '02',
    category: 'Gestión y calidad de datos',
    title: 'Fortalecer la validación y trazabilidad de la información',
    problem:
      'El sistema integra mediciones provenientes de diferentes sensores y las organiza en un modelo dimensional para su análisis.',
    decision:
      'Mantener controles de calidad y trazabilidad durante los procesos de extracción, transformación y carga de información.',
    actions: [
      'Verificar la integridad de las claves dimensionales.',
      'Controlar la unicidad de los identificadores.',
      'Conservar la identificación del origen de los registros.',
      'Actualizar los indicadores de calidad del modelo.',
    ],
    expected:
      'Disponer de información organizada, consistente y confiable para las consultas y los análisis realizados en Power BI.',
    icon: Database,
    color: '#65B900',
    bg: '#F0F9E4',
  },
]

export default function Decisions() {
  return (
    <section
      id="decisiones"
      className="bg-[#F7FAF8] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8BEA00] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <ClipboardCheck size={13} />
            Decisiones de gestión
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-4xl">
            Del análisis a la
            <span className="text-[#65B900]"> toma de decisiones.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            Los conocimientos identificados permiten formular
            decisiones orientadas a fortalecer el monitoreo de
            variables y la calidad de la información gestionada
            por SmartGreenZone.
          </p>
        </div>

        {/* CONTEXTO */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-[#062331] p-7 text-white">
            <BrainCircuit size={30} className="text-[#8BEA00]" />
            <h3 className="mt-5 text-xl font-bold">
              Conocimiento
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Identificación de comportamientos, tendencias y
              situaciones relevantes mediante el análisis de los
              datos recopilados.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <Target size={30} className="text-[#65B900]" />
            <h3 className="mt-5 text-xl font-bold text-[#062331]">
              Decisión
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Definición de acciones concretas para mejorar el
              seguimiento de las variables y la gestión de la
              información.
            </p>
          </div>
        </div>

        {/* DECISIONES */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Propuestas fundamentadas
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#062331]">
              Dos decisiones estratégicas
            </h3>
          </div>

          <div className="space-y-7">
            {decisions.map((decision) => {
              const Icon = decision.icon

              return (
                <article
                  key={decision.number}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="grid lg:grid-cols-[1fr_1fr]">

                    {/* INFORMACIÓN PRINCIPAL */}
                    <div className="p-7 md:p-9">
                      <div className="flex items-center justify-between">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl"
                          style={{
                            backgroundColor: decision.bg,
                            color: decision.color,
                          }}
                        >
                          <Icon size={25} />
                        </div>

                        <span className="text-3xl font-extrabold text-slate-200">
                          {decision.number}
                        </span>
                      </div>

                      <span className="mt-7 inline-block text-[9px] font-bold uppercase tracking-widest text-[#65B900]">
                        {decision.category}
                      </span>

                      <h4 className="mt-3 text-xl font-extrabold leading-snug text-[#062331]">
                        {decision.title}
                      </h4>

                      <div className="mt-7">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Situación identificada
                        </span>

                        <p className="mt-3 text-sm leading-7 text-slate-500">
                          {decision.problem}
                        </p>
                      </div>

                      <div className="mt-6 rounded-xl p-5" style={{ backgroundColor: decision.bg }}>
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: decision.color }}>
                          Decisión propuesta
                        </span>

                        <p className="mt-3 text-sm leading-7 text-[#062331]">
                          {decision.decision}
                        </p>
                      </div>
                    </div>

                    {/* PLAN DE ACCIÓN */}
                    <div className="flex flex-col justify-between bg-[#F7FAF8] p-7 md:p-9">
                      <div>
                        <div className="flex items-center gap-2">
                          <Lightbulb size={19} className="text-[#65B900]" />
                          <span className="text-xs font-bold uppercase tracking-wider text-[#062331]">
                            Acciones propuestas
                          </span>
                        </div>

                        <ul className="mt-6 space-y-4">
                          {decision.actions.map((action) => (
                            <li
                              key={action}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-0.5 shrink-0 text-[#65B900]"
                              />
                              <span className="text-sm leading-6 text-slate-600">
                                {action}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-9 rounded-xl border border-slate-200 bg-white p-5">
                        <div className="flex items-center gap-2">
                          <TrendingUp size={17} className="text-[#65B900]" />
                          <span className="text-xs font-bold text-[#062331]">
                            Resultado esperado
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-7 text-slate-500">
                          {decision.expected}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* ALCANCE */}
        <div className="mt-12 flex items-start gap-4 rounded-2xl border border-[#00C8F5]/30 bg-[#F1FAFC] p-6">
          <ShieldCheck size={24} className="mt-1 shrink-0 text-[#009DBD]" />
          <div>
            <h3 className="font-bold text-[#062331]">
              Alcance de las decisiones
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Las decisiones presentadas son propuestas derivadas
              del análisis del escenario simulado. Su implementación
              constituye una línea de mejora del sistema y no debe
              interpretarse como una funcionalidad que ya se encuentre
              desplegada.
            </p>
          </div>
        </div>

        {/* CIERRE */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-[#062331] p-8 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8BEA00]">
              Gestión del conocimiento
            </span>

            <h3 className="mt-2 text-xl font-bold">
              El conocimiento adquiere valor cuando orienta acciones.
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-300">
              Las decisiones propuestas permiten establecer
              oportunidades de mejora para la evolución de
              SmartGreenZone.
            </p>
          </div>

          <a
            href="#resultados"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#8BEA00] px-5 py-3 text-xs font-bold text-[#062331] transition hover:bg-white"
          >
            Ver resultados
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}
