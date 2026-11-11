
import {
  Lightbulb,
  Thermometer,
  Droplets,
  Sun,
  Activity,
  TrendingDown,
  TrendingUp,
  Database,
  ArrowRight,
  Info,
  CheckCircle2,
  BrainCircuit,
} from 'lucide-react'

const knowledgeItems = [
  {
    number: '01',
    category: 'Relación entre variables',
    title: 'Temperatura y humedad del aire',
    result: '-0.8554',
    resultLabel: 'Correlación de Pearson',
    description:
      'Se identificó una relación lineal negativa fuerte entre la temperatura ambiental y la humedad del aire en los promedios diarios analizados.',
    interpretation:
      'En el escenario simulado, los días con mayores valores de temperatura tendieron a presentar menores valores de humedad relativa.',
    icon: Thermometer,
    color: '#00A8CC',
    bg: '#E5F9FE',
    trend: TrendingDown,
  },
  {
    number: '02',
    category: 'Relación entre variables',
    title: 'Iluminación y temperatura del suelo',
    result: '+0.8923',
    resultLabel: 'Correlación de Pearson',
    description:
      'Se encontró una relación lineal positiva fuerte entre la intensidad lumínica y la temperatura del suelo.',
    interpretation:
      'Las dos variables presentaron un comportamiento asociado dentro de los datos diarios utilizados para el análisis.',
    icon: Sun,
    color: '#B48A00',
    bg: '#FFF8D9',
    trend: TrendingUp,
  },
  {
    number: '03',
    category: 'Comportamiento temporal',
    title: 'Variación de la humedad del suelo',
    result: '2376.77 → 2205.01',
    resultLabel: 'Promedios ADC',
    description:
      'El promedio de las lecturas de humedad del suelo pasó de 2376.77 ADC en octubre a 2205.01 ADC en noviembre.',
    interpretation:
      'La comparación evidencia una variación entre los dos periodos. Las lecturas ADC no representan directamente un porcentaje de humedad sin calibración.',
    icon: Droplets,
    color: '#00A8CC',
    bg: '#E5F9FE',
    trend: TrendingDown,
  },
  {
    number: '04',
    category: 'Comportamiento del sensor',
    title: 'Variación destacada del MQ-2',
    result: '760.50 ADC',
    resultLabel: 'Promedio del 30 de octubre',
    description:
      'El sensor MQ-2 presentó un incremento en sus promedios diarios entre el 28 y el 31 de octubre, con un máximo registrado de 4095 ADC el 30 de octubre.',
    interpretation:
      'Este comportamiento permite identificar periodos que requieren revisión. No equivale a una concentración específica de gas sin calibración.',
    icon: Activity,
    color: '#65B900',
    bg: '#F0F9E4',
    trend: TrendingUp,
  },
  {
    number: '05',
    category: 'Comparación temporal',
    title: 'Incremento del promedio de iluminación',
    result: '+9451.04 lx',
    resultLabel: 'Diferencia entre periodos',
    description:
      'El promedio de iluminación pasó de 33267.78 lx en octubre a 42718.82 lx en noviembre.',
    interpretation:
      'En el escenario simulado, noviembre presentó un promedio de iluminación superior al de octubre.',
    icon: Sun,
    color: '#B48A00',
    bg: '#FFF8D9',
    trend: TrendingUp,
  },
]

export default function Knowledge() {
  return (
    <section
      id="conocimientos"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8BEA00] bg-[#F7FBEF] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <Lightbulb size={13} />
            Conocimientos generados
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-4xl">
            Cuando los datos se convierten en
            <span className="text-[#65B900]"> conocimiento.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            El análisis de SmartGreenZone permite identificar
            comportamientos, asociaciones estadísticas y variaciones
            entre periodos. Estos hallazgos constituyen conocimientos
            derivados del conjunto de datos utilizado en el proyecto.
          </p>
        </div>

        {/* RESUMEN */}
        <div className="mt-10 grid gap-5 md:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl bg-[#062331] p-7 text-white">
            <div className="flex items-center gap-3">
              <BrainCircuit size={27} className="text-[#8BEA00]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#8BEA00]">
                Gestión del conocimiento
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-extrabold">
              Interpretar para comprender.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Los registros almacenados se convierten en información
              interpretable mediante comparaciones, indicadores y
              análisis estadísticos. Así se facilita la identificación
              de situaciones relevantes dentro del escenario estudiado.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-[#F7FAF8] p-6">
              <Database size={25} className="text-[#65B900]" />
              <p className="mt-5 text-3xl font-extrabold text-[#062331]">
                1.5 M
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Registros disponibles para el análisis.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F7FAF8] p-6">
              <Lightbulb size={25} className="text-[#00A8CC]" />
              <p className="mt-5 text-3xl font-extrabold text-[#062331]">
                05
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Conocimientos identificados.
              </p>
            </div>
          </div>
        </div>

        {/* CINCO CONOCIMIENTOS */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Hallazgos del análisis
            </span>

            <h3 className="mt-2 text-2xl font-extrabold text-[#062331]">
              Cinco conocimientos identificados
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
              Cada hallazgo relaciona un resultado cuantitativo
              con su interpretación dentro del escenario simulado.
            </p>
          </div>

          <div className="space-y-5">
            {knowledgeItems.map((item) => {
              const Icon = item.icon
              const Trend = item.trend

              return (
                <article
                  key={item.number}
                  className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:shadow-lg md:grid-cols-[75px_1fr_230px] md:items-center md:p-8"
                >
                  <div className="flex items-center gap-4 md:block">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: item.bg,
                        color: item.color,
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    <span className="text-sm font-extrabold text-slate-300 md:mt-3 md:block">
                      {item.number}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#65B900]">
                      {item.category}
                    </span>

                    <h4 className="mt-2 text-lg font-bold text-[#062331]">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-start gap-2 rounded-xl bg-[#F7FAF8] p-4">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-[#65B900]"
                      />
                      <p className="text-xs leading-6 text-slate-600">
                        {item.interpretation}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-[#F7FAF8] p-5">
                    <div className="flex items-center gap-2">
                      <Trend size={16} style={{ color: item.color }} />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Resultado
                      </span>
                    </div>

                    <p
                      className="mt-4 break-words text-2xl font-extrabold text-[#062331]"
                    >
                      {item.result}
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-slate-500">
                      {item.resultLabel}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* INTERPRETACIÓN */}
        <div className="mt-12 rounded-2xl border border-[#00C8F5]/30 bg-[#F1FAFC] p-7 md:p-9">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-white p-3 text-[#009DBD]">
              <Info size={25} />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#007B94]">
                Alcance de los conocimientos
              </span>

              <h3 className="mt-2 text-xl font-extrabold text-[#062331]">
                Hallazgos para interpretar, no para generalizar.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Los conocimientos presentados se obtuvieron a partir
                de registros simulados y promedios diarios. Por esta
                razón, permiten demostrar las capacidades de
                almacenamiento, análisis e interpretación del sistema,
                pero no constituyen evidencia de condiciones reales
                de un cultivo ni permiten establecer causalidad.
              </p>
            </div>
          </div>
        </div>

        {/* CIERRE */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-[#062331] p-8 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8BEA00]">
              Del conocimiento a la acción
            </span>

            <h3 className="mt-2 text-xl font-bold">
              Los hallazgos permiten formular decisiones informadas.
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-300">
              El siguiente paso consiste en traducir los conocimientos
              identificados en decisiones y acciones de gestión.
            </p>
          </div>

          <a
            href="#decisiones"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#8BEA00] px-5 py-3 text-xs font-bold text-[#062331] transition hover:bg-white"
          >
            Conocer las decisiones
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}
