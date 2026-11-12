
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


        {/* CINCO CONOCIMIENTOS EVIDENTES */}
        <div id="conocimientos" className="mt-20 scroll-mt-24">
          <div className="mb-8 max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Conocimientos evidentes
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#062331]">
              Cinco conocimientos derivados del análisis
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Cada conocimiento presenta la pregunta de análisis, las variables,
              el procedimiento, la evidencia, el hallazgo, su interpretación,
              utilidad y las limitaciones de los datos disponibles.
            </p>
          </div>

          <div className="space-y-6">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#568F00]">Conocimiento 01 · Análisis univariado</span>
                <span className="rounded-full bg-[#FFF4E5] px-3 py-1 text-xs font-semibold text-[#9A641D]">Temperatura ambiental</span>
              </div>
              <h4 className="mt-3 text-xl font-extrabold text-[#062331]">La temperatura ambiental presentó un ligero incremento entre octubre y noviembre.</h4>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-[#F7FAF8] p-5">
                  <p className="text-xs font-bold uppercase text-slate-400">Evidencia gráfica · Promedio mensual</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div><p className="text-xs text-slate-500">Octubre</p><p className="mt-1 text-2xl font-extrabold text-[#062331]">20,40 °C</p></div>
                    <div><p className="text-xs text-slate-500">Noviembre</p><p className="mt-1 text-2xl font-extrabold text-[#062331]">20,59 °C</p></div>
                  </div>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[50.0%] rounded-full bg-[#E59B37]" />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-[#9A641D]">Diferencia reportada: +0,19 °C</p>
                </div>
                <div className="space-y-3 text-sm leading-6 text-slate-600">
                  <p><strong className="text-[#062331]">1. Pregunta:</strong> ¿Cómo cambió el promedio de temperatura ambiental entre octubre y noviembre y qué aporta al seguimiento del entorno?</p>
                  <p><strong className="text-[#062331]">2. Variables:</strong> temperatura ambiental y periodo de registro (octubre y noviembre de 2026), expresada en °C.</p>
                  <p><strong className="text-[#062331]">3. Procedimiento:</strong> comparación de los promedios mensuales reportados para ambos periodos.</p>
                  <p><strong className="text-[#062331]">4. Resultado:</strong> 20,40 °C en octubre y 20,59 °C en noviembre; diferencia de +0,19 °C.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">5. Hallazgo</p><p className="mt-2 text-sm leading-6 text-slate-600">El promedio mensual aumentó ligeramente en noviembre.</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">6. Interpretación</p><p className="mt-2 text-sm leading-6 text-slate-600">En el conjunto simulado se observa una variación térmica pequeña entre los periodos comparados.</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">7. Utilidad y 8. Limitación</p><p className="mt-2 text-sm leading-6 text-slate-600">Permite hacer seguimiento temporal. No demuestra estrés térmico ni permite inferir efectos sobre un cultivo real.</p></div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#568F00]">Conocimiento 02 · Análisis univariado</span>
                <span className="rounded-full bg-[#E5F9FE] px-3 py-1 text-xs font-semibold text-[#007B94]">Humedad del suelo</span>
              </div>
              <h4 className="mt-3 text-xl font-extrabold text-[#062331]">El valor promedio del sensor de humedad del suelo disminuyó en noviembre.</h4>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-[#F7FAF8] p-5">
                  <p className="text-xs font-bold uppercase text-slate-400">Evidencia gráfica · Promedio mensual</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div><p className="text-xs text-slate-500">Octubre</p><p className="mt-1 text-xl font-extrabold text-[#062331]">2376,77 ADC</p></div>
                    <div><p className="text-xs text-slate-500">Noviembre</p><p className="mt-1 text-xl font-extrabold text-[#062331]">2205,01 ADC</p></div>
                  </div>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[92.8%] rounded-full bg-[#00A8CC]" /></div>
                  <p className="mt-2 text-xs font-semibold text-[#007B94]">Diferencia reportada: -171,76 ADC</p>
                </div>
                <div className="space-y-3 text-sm leading-6 text-slate-600">
                  <p><strong className="text-[#062331]">1. Pregunta:</strong> ¿Cómo varió la lectura del sensor de humedad del suelo entre octubre y noviembre?</p>
                  <p><strong className="text-[#062331]">2. Variables:</strong> lectura del sensor de humedad del suelo en ADC y periodo mensual.</p>
                  <p><strong className="text-[#062331]">3. Procedimiento:</strong> comparación de los promedios mensuales disponibles para octubre y noviembre.</p>
                  <p><strong className="text-[#062331]">4. Resultado:</strong> 2376,77 ADC en octubre y 2205,01 ADC en noviembre; disminución de 171,76 ADC.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">5. Hallazgo</p><p className="mt-2 text-sm leading-6 text-slate-600">La lectura promedio del sensor fue menor en noviembre.</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">6. Interpretación</p><p className="mt-2 text-sm leading-6 text-slate-600">Existe una diferencia entre las lecturas de los dos periodos, según la escala ADC del dispositivo.</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">7. Utilidad y 8. Limitación</p><p className="mt-2 text-sm leading-6 text-slate-600">Orienta el seguimiento de cambios en la señal del sensor. No equivale a porcentaje de humedad sin calibración y conversión.</p></div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#568F00]">Conocimiento 03 · Análisis bivariado</span>
                <span className="rounded-full bg-[#E5F9FE] px-3 py-1 text-xs font-semibold text-[#007B94]">Temperatura y humedad del aire</span>
              </div>
              <h4 className="mt-3 text-xl font-extrabold text-[#062331]">Se observa una asociación lineal negativa fuerte entre temperatura ambiental y humedad del aire.</h4>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-[#F7FAF8] p-5">
                  <p className="text-xs font-bold uppercase text-slate-400">Evidencia gráfica · Correlación de Pearson</p>
                  <p className="mt-3 text-4xl font-extrabold text-[#009DBD]">-0,8554</p>
                  <div className="relative mt-5 h-3 rounded-full bg-slate-200"><div className="absolute left-0 top-0 h-3 w-[42.77%] rounded-full bg-[#00A8CC]" /><div className="absolute left-1/2 top-[-4px] h-5 w-px bg-slate-500" /></div>
                  <div className="mt-2 flex justify-between text-xs text-slate-400"><span>-1</span><span>0</span><span>+1</span></div>
                  <p className="mt-3 text-xs font-semibold text-[#007B94]">37 promedios diarios analizados</p>
                </div>
                <div className="space-y-3 text-sm leading-6 text-slate-600">
                  <p><strong className="text-[#062331]">1. Pregunta:</strong> ¿Qué asociación lineal existe entre la temperatura ambiental y la humedad del aire?</p>
                  <p><strong className="text-[#062331]">2. Variables:</strong> promedios diarios de temperatura ambiental y humedad del aire.</p>
                  <p><strong className="text-[#062331]">3. Procedimiento:</strong> cálculo del coeficiente de correlación de Pearson sobre 37 promedios diarios.</p>
                  <p><strong className="text-[#062331]">4. Resultado:</strong> coeficiente r = -0,8554, correspondiente a una asociación negativa fuerte.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">5. Hallazgo</p><p className="mt-2 text-sm leading-6 text-slate-600">En los datos, los promedios altos de una variable tienden a acompañarse de promedios bajos de la otra.</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">6. Interpretación</p><p className="mt-2 text-sm leading-6 text-slate-600">Las dos variables presentan una asociación lineal inversa en el escenario simulado.</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">7. Utilidad y 8. Limitación</p><p className="mt-2 text-sm leading-6 text-slate-600">Ayuda a explorar variables ambientales conjuntamente. No demuestra causalidad ni permite generalizar a condiciones agrícolas reales.</p></div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#568F00]">Conocimiento 04 · Análisis bivariado</span>
                <span className="rounded-full bg-[#F0F9E4] px-3 py-1 text-xs font-semibold text-[#548F00]">Iluminación y temperatura del suelo</span>
              </div>
              <h4 className="mt-3 text-xl font-extrabold text-[#062331]">La iluminación y la temperatura del suelo presentan una asociación lineal positiva fuerte.</h4>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-[#F7FAF8] p-5">
                  <p className="text-xs font-bold uppercase text-slate-400">Evidencia gráfica · Correlación de Pearson</p>
                  <p className="mt-3 text-4xl font-extrabold text-[#568F00]">+0,8923</p>
                  <div className="relative mt-5 h-3 rounded-full bg-slate-200"><div className="absolute left-1/2 top-0 h-3 w-[44.615%] rounded-full bg-[#65B900]" /><div className="absolute left-1/2 top-[-4px] h-5 w-px bg-slate-500" /></div>
                  <div className="mt-2 flex justify-between text-xs text-slate-400"><span>-1</span><span>0</span><span>+1</span></div>
                  <p className="mt-3 text-xs font-semibold text-[#548F00]">37 promedios diarios analizados</p>
                </div>
                <div className="space-y-3 text-sm leading-6 text-slate-600">
                  <p><strong className="text-[#062331]">1. Pregunta:</strong> ¿Cómo se relacionan los cambios de iluminación con la temperatura del suelo en los registros analizados?</p>
                  <p><strong className="text-[#062331]">2. Variables:</strong> promedios diarios de iluminación (lx) y temperatura del suelo (°C).</p>
                  <p><strong className="text-[#062331]">3. Procedimiento:</strong> cálculo del coeficiente de correlación de Pearson utilizando 37 promedios diarios.</p>
                  <p><strong className="text-[#062331]">4. Resultado:</strong> r = +0,8923, una asociación lineal positiva fuerte.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">5. Hallazgo</p><p className="mt-2 text-sm leading-6 text-slate-600">Los promedios altos de iluminación tienden a coincidir con promedios altos de temperatura del suelo.</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">6. Interpretación</p><p className="mt-2 text-sm leading-6 text-slate-600">Las variables evolucionan de forma asociada dentro del conjunto de datos simulado.</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">7. Utilidad y 8. Limitación</p><p className="mt-2 text-sm leading-6 text-slate-600">Permite identificar variables que conviene observar conjuntamente. No prueba que la iluminación cause el cambio térmico.</p></div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#568F00]">Conocimiento 05 · Análisis temporal y valores extremos</span>
                <span className="rounded-full bg-[#FFF8D9] px-3 py-1 text-xs font-semibold text-[#947400]">Sensor MQ-2</span>
              </div>
              <h4 className="mt-3 text-xl font-extrabold text-[#062331]">El sensor MQ-2 presenta un incremento puntual de sus lecturas al cierre de octubre.</h4>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-[#F7FAF8] p-5">
                  <p className="text-xs font-bold uppercase text-slate-400">Evidencia gráfica · Resumen de lecturas</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between gap-3"><span className="text-xs text-slate-500">1–27 octubre</span><strong className="text-sm text-[#062331]">506–517 ADC</strong></div>
                    <div className="h-2 rounded-full bg-slate-100"><div className="h-full w-[13%] rounded-full bg-[#B48A00]" /></div>
                    <div className="flex items-center justify-between gap-3"><span className="text-xs text-slate-500">30 octubre · promedio</span><strong className="text-sm text-[#062331]">760,50 ADC</strong></div>
                    <div className="h-2 rounded-full bg-slate-100"><div className="h-full w-[19%] rounded-full bg-[#B48A00]" /></div>
                    <div className="flex items-center justify-between gap-3"><span className="text-xs text-slate-500">Máximo registrado</span><strong className="text-sm text-[#062331]">4095 ADC</strong></div>
                    <div className="h-2 rounded-full bg-slate-100"><div className="h-full w-full rounded-full bg-[#D6A900]" /></div>
                    <div className="flex items-center justify-between gap-3"><span className="text-xs text-slate-500">1–5 noviembre</span><strong className="text-sm text-[#062331]">486–494 ADC</strong></div>
                    <div className="h-2 rounded-full bg-slate-100"><div className="h-full w-[12%] rounded-full bg-[#B48A00]" /></div>
                  </div>
                </div>
                <div className="space-y-3 text-sm leading-6 text-slate-600">
                  <p><strong className="text-[#062331]">1. Pregunta:</strong> ¿Se identifican cambios destacados en las lecturas del MQ-2 durante el periodo estudiado?</p>
                  <p><strong className="text-[#062331]">2. Variables:</strong> lectura del MQ-2 en ADC y fecha de registro.</p>
                  <p><strong className="text-[#062331]">3. Procedimiento:</strong> revisión de promedios diarios por fecha y comparación de los periodos antes, durante y después del incremento.</p>
                  <p><strong className="text-[#062331]">4. Resultado:</strong> 506–517 ADC entre el 1 y el 27 de octubre; promedio de 760,50 ADC el 30 de octubre y máximo de 4095 ADC. Entre el 1 y el 5 de noviembre los promedios volvieron a 486–494 ADC.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">5. Hallazgo</p><p className="mt-2 text-sm leading-6 text-slate-600">Se observa un incremento puntual al final de octubre y un retorno a valores promedio inferiores en los primeros días de noviembre.</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">6. Interpretación</p><p className="mt-2 text-sm leading-6 text-slate-600">El comportamiento merece revisión como posible anomalía de lectura, saturación o variación del escenario simulado.</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs font-bold text-[#568F00]">7. Utilidad y 8. Limitación</p><p className="mt-2 text-sm leading-6 text-slate-600">Justifica revisar registros extremos y considerar alertas. ADC no equivale a concentración de gas; se requiere calibración para interpretarlo físicamente.</p></div>
              </div>
            </article>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#00C8F5]/30 bg-[#F1FAFC] p-5">
            <Info size={19} className="mt-0.5 shrink-0 text-[#009DBD]" />
            <p className="text-xs leading-6 text-slate-600">
              Alcance metodológico: los resultados descritos proceden del escenario
              de datos simulado disponible. Las correlaciones expresan asociación,
              no causalidad. Las lecturas ADC del sensor de humedad del suelo y del
              MQ-2 no deben convertirse en porcentajes ni concentraciones sin
              calibración y caracterización. Las visualizaciones de evidencia
              resumen los valores reportados; para una reproducción exacta deben
              contrastarse con los registros y filtros del dashboard.
            </p>
          </div>
        </div>

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

              src={`${import.meta.env.BASE_URL}images/power-bi/dashboard.png`}

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