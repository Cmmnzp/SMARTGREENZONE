
import {
  TrendingUp,
  Activity,
  Thermometer,
  Droplets,
  Sun,
  Database,
  ArrowRight,
  Info,
  ChartNoAxesCombined,
  Gauge,
} from 'lucide-react'

const monthlyIndicators = [
  {
    name: 'Temperatura ambiental',
    october: '20.40 °C',
    november: '20.59 °C',
    difference: '+0.19 °C',
    icon: Thermometer,
    color: '#E59B37',
    bg: '#FFF4E5',
  },
  {
    name: 'Humedad del suelo',
    october: '2376.77 ADC',
    november: '2205.01 ADC',
    difference: '-171.76 ADC',
    icon: Droplets,
    color: '#00A8CC',
    bg: '#E5F9FE',
  },
  {
    name: 'Iluminación',
    october: '33267.78 lx',
    november: '42718.82 lx',
    difference: '+9451.04 lx',
    icon: Sun,
    color: '#B48A00',
    bg: '#FFF8D9',
  },
]

const correlations = [
  {
    first: 'Temperatura ambiental',
    second: 'Humedad del aire',
    value: -0.8554,
    interpretation: 'Relación negativa fuerte',
  },
  {
    first: 'Iluminación',
    second: 'Temperatura del suelo',
    value: 0.8923,
    interpretation: 'Relación positiva fuerte',
  },
  {
    first: 'Temperatura ambiental',
    second: 'Iluminación',
    value: 0.6138,
    interpretation: 'Relación positiva moderada',
  },
  {
    first: 'Humedad del aire',
    second: 'MQ-2',
    value: -0.4687,
    interpretation: 'Relación negativa moderada',
  },
  {
    first: 'MQ-2',
    second: 'Iluminación',
    value: -0.4123,
    interpretation: 'Relación negativa moderada',
  },
]

const getCorrelationColor = (value: number) => {
  if (value >= 0.7) return '#65B900'
  if (value <= -0.7) return '#00A8CC'
  return '#D6A900'
}

function CorrelationBar({ value }: { value: number }) {
  const color = getCorrelationColor(value)

  return (
    <div className="mt-3">
      <div className="flex justify-between text-[10px] text-slate-400">
        <span>-1</span>
        <span>0</span>
        <span>+1</span>
      </div>

      <div className="relative mt-2 h-3 rounded-full bg-slate-100">
        <div className="absolute left-1/2 top-0 h-3 w-px bg-slate-400" />

        <div
          className="absolute top-0 h-3 rounded-full"
          style={{
            left: value < 0 ? `${50 + value * 50}%` : '50%',
            width: `${Math.abs(value) * 50}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  )
}

export default function DataAnalysis() {
  return (
    <section id="analisis" className="bg-[#F7FAF8] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8BEA00] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <ChartNoAxesCombined size={13} />
            Análisis de datos
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-4xl">
            Transformando datos en
            <span className="text-[#65B900]"> información.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            El análisis de SmartGreenZone permite explorar el
            comportamiento de las variables monitoreadas, comparar
            periodos e identificar relaciones estadísticas dentro
            del conjunto de datos disponible.
          </p>
        </div>

        {/* CONTEXTO */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-[#00C8F5]/30 bg-white p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-[#E5F9FE] p-3 text-[#009DBD]">
              <Database size={25} />
            </div>
            <div>
              <h3 className="font-bold text-[#062331]">
                Conjunto de datos analizado
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                1.500.000 registros organizados en el modelo dimensional
                de SmartGreenZone.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-[#F0F9E4] px-4 py-2 text-xs font-bold text-[#548F00]">
              6 variables
            </span>
            <span className="rounded-full bg-[#E5F9FE] px-4 py-2 text-xs font-bold text-[#007B94]">
              37 promedios diarios
            </span>
            <span className="rounded-full bg-[#FFF8D9] px-4 py-2 text-xs font-bold text-[#947400]">
              Oct. – Nov. 2026
            </span>
          </div>
        </div>

        {/* COMPARACIÓN MENSUAL */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Comparación temporal
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#062331]">
              Comportamiento de las variables
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Comparación de los promedios registrados durante
              octubre y noviembre de 2026.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {monthlyIndicators.map((indicator) => {
              const Icon = indicator.icon

              return (
                <article
                  key={indicator.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: indicator.bg,
                        color: indicator.color,
                      }}
                    >
                      <Icon size={23} />
                    </div>

                    <TrendingUp
                      size={19}
                      className="text-slate-300"
                    />
                  </div>

                  <h4 className="mt-5 text-sm font-bold text-[#062331]">
                    {indicator.name}
                  </h4>

                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Octubre</span>
                        <span className="font-semibold text-slate-700">
                          {indicator.october}
                        </span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-100">
                        <div
                          className="h-2 w-[75%] rounded-full"
                          style={{ backgroundColor: indicator.color }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Noviembre</span>
                        <span className="font-semibold text-slate-700">
                          {indicator.november}
                        </span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-100">
                        <div
                          className="h-2 w-[82%] rounded-full"
                          style={{ backgroundColor: indicator.color }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-lg bg-[#F7FAF8] p-3">
                    <span className="text-[10px] text-slate-400">
                      Diferencia entre promedios
                    </span>
                    <p className="mt-1 text-sm font-extrabold text-[#062331]">
                      {indicator.difference}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
          <p className="mt-4 text-[11px] leading-5 text-slate-400">
            Nota: los indicadores corresponden a promedios mensuales
            del escenario de datos simulado. Las barras son recursos
            gráficos ilustrativos, no una escala comparativa exacta.
          </p>
        </div>

        {/* CORRELACIONES */}
        <div className="mt-20">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Análisis estadístico
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#062331]">
              Relaciones entre variables
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
              Se calcularon correlaciones de Pearson sobre 37 promedios
              diarios para explorar la relación lineal entre las
              variables del escenario simulado.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {correlations.map((item) => (
              <article
                key={`${item.first}-${item.second}`}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-[#062331]">
                      {item.first}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      con {item.second}
                    </p>
                  </div>

                  <span
                    className="rounded-lg px-3 py-2 text-sm font-extrabold"
                    style={{
                      color: getCorrelationColor(item.value),
                      backgroundColor: `${getCorrelationColor(item.value)}18`,
                    }}
                  >
                    {item.value.toFixed(4)}
                  </span>
                </div>

                <CorrelationBar value={item.value} />

                <p className="mt-4 text-xs font-semibold text-slate-500">
                  {item.interpretation}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#00C8F5]/30 bg-[#F1FAFC] p-5">
            <Info size={19} className="mt-0.5 shrink-0 text-[#009DBD]" />
            <p className="text-xs leading-6 text-slate-600">
              Una correlación indica asociación estadística, no
              causalidad. Los resultados describen el conjunto de
              datos simulado y no demuestran relaciones agronómicas
              en un cultivo real.
            </p>
          </div>
        </div>

        {/* MQ2 */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-2xl bg-[#062331] p-8 text-white">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#00C8F5]/15 p-3">
                <Activity size={24} className="text-[#00C8F5]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8BEA00]">
                Comportamiento del MQ-2
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-extrabold">
              Una variación destacada en octubre.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              En el escenario simulado, el sensor MQ-2 presentó
              promedios diarios cercanos a 506–517 ADC entre el
              1 y el 27 de octubre. Posteriormente se observó
              un incremento entre el 28 y el 31 de octubre.
            </p>

            <div className="mt-7 rounded-xl border border-white/10 bg-white/5 p-5">
              <span className="text-xs text-slate-400">
                Promedio registrado el 30 de octubre
              </span>
              <p className="mt-2 text-4xl font-extrabold text-[#8BEA00]">
                760.50 ADC
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Durante esa fecha se registró también un valor máximo
                de 4095 ADC.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#FFF8D9] p-3 text-[#B48A00]">
                <Gauge size={25} />
              </div>
              <h4 className="text-lg font-bold text-[#062331]">
                Interpretación del comportamiento
              </h4>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Entre el 1 y el 5 de noviembre, los promedios diarios
              volvieron a valores aproximados de 486–494 ADC.
              Este comportamiento representa una variación del
              conjunto de datos analizado.
            </p>

            <div className="mt-6 rounded-xl bg-[#FFF8D9] p-5">
              <p className="text-xs font-bold text-[#806400]">
                Consideración técnica
              </p>
              <p className="mt-2 text-xs leading-6 text-slate-600">
                Los valores ADC no equivalen directamente a una
                concentración de gas. Para realizar esa conversión
                se necesita calibración y caracterización del sensor.
              </p>
            </div>
          </div>
        </div>

        {/* POWER BI */}
        <div className="mt-20">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Inteligencia de negocios
            </span>

            <h3 className="mt-2 text-2xl font-extrabold text-[#062331]">
              Visualización de resultados con Power BI
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
              Los indicadores y las visualizaciones permiten explorar
              los registros del modelo dimensional y presentar los
              resultados de una manera comprensible.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/power-bi/dashboard.png"
              alt="Dashboard de Power BI de SmartGreenZone"
              loading="lazy"
              className="h-auto w-full object-contain"
            />

            <div className="flex flex-col justify-between gap-2 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center">
              <p className="text-xs font-semibold text-[#062331]">
                Figura 3. Dashboard analítico de SmartGreenZone.
              </p>
              <span className="text-[10px] text-slate-400">
                Fuente: elaboración propia.
              </span>
            </div>
          </div>
        </div>

        {/* CONCLUSIÓN */}
        <div className="mt-16 rounded-2xl border border-[#8BEA00]/40 bg-white p-8 md:p-10">
          <div className="flex items-center gap-3">
            <ChartNoAxesCombined size={26} className="text-[#65B900]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#579900]">
              Síntesis del análisis
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-extrabold text-[#062331]">
            Los datos permiten identificar comportamientos y generar conocimiento.
          </h3>

          <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-500">
            El análisis de SmartGreenZone permite comparar variables,
            reconocer asociaciones estadísticas y observar
            comportamientos particulares dentro del conjunto de
            datos. La combinación del modelo dimensional y Power BI
            facilita transformar los registros en información
            organizada para apoyar la interpretación del escenario
            agrícola simulado.
          </p>

          <a
            href="#conocimientos"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#062331] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#0C4356]"
          >
            Continuar a conocimientos
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}
