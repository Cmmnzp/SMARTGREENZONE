import {
  Activity, ArrowLeft, BarChart3, CheckCircle2, Database, Droplets,
  ExternalLink, FileSearch, Info, Leaf, Lightbulb, Radio, Sprout,
  Thermometer, Wifi,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandLogo from '../components/BrandLogo'

const POWER_BI_URL =
  'https://app.powerbi.com/view?r=eyJrIjoiOTI4ZGUwMjYtYjU4Mi00Y2MwLWI4OTUtMTkxMWQxMDIxMjhjIiwidCI6IjA3ZGE2N2EwLTFmNDMtNGU4Yy05NzdmLTVmODhiNjQ3MGVlNiIsImMiOjR9'

const modules = [
  { icon: Thermometer, title: 'Variables ambientales', description: 'Temperatura del aire y del suelo, humedad y condiciones ambientales.' },
  { icon: Droplets, title: 'Humedad del suelo', description: 'Consulta de las mediciones de humedad de los cultivos.' },
  { icon: Radio, title: 'Dispositivos IoT', description: 'Estado de comunicación de los dispositivos ESP32.' },
  { icon: Sprout, title: 'Sistema de riego', description: 'Seguimiento de los modos automático y manual de riego.' },
  { icon: Database, title: 'Datos históricos', description: 'Consulta y análisis de los registros almacenados.' },
  { icon: Activity, title: 'Monitoreo', description: 'Visualización centralizada de las variables del sistema.' },
]

const variables = [
  'Temperatura ambiental (°C)',
  'Humedad del aire (unidad reportada por la fuente)',
  'Humedad del suelo (ADC)',
  'Lectura del sensor MQ-2 (ADC)',
  'Iluminación (lux)',
  'Temperatura del suelo (°C)',
]

const questions = [
  ['01', '¿Cómo se comportan las variables ambientales durante el periodo analizado?', 'Identificar tendencias, variaciones y posibles cambios en las condiciones registradas por los sensores.'],
  ['02', '¿Qué diferencias se observan entre los promedios mensuales de las variables?', 'Comparar los periodos disponibles y reconocer variables que presentan aumentos o disminuciones.'],
  ['03', '¿Qué asociaciones se observan entre la temperatura ambiental y la humedad del aire?', 'Explorar el comportamiento conjunto de ambas variables, sin asumir causalidad.'],
  ['04', '¿Qué asociación se observa entre la iluminación y la temperatura del suelo?', 'Examinar la relación estadística entre iluminación y temperatura del suelo.'],
  ['05', '¿Existen lecturas inusuales que requieran revisión, especialmente en el sensor MQ-2?', 'Localizar valores extremos o comportamientos que deban investigarse antes de interpretarlos.'],
]

const indicators = [
  ['Volumen de información', 'Cantidad total de mediciones del Data Warehouse, indicando periodo y filtros aplicados.'],
  ['Temperatura ambiental promedio', 'Promedio de temperatura ambiental en °C para el periodo o subconjunto seleccionado.'],
  ['Humedad del aire promedio', 'Promedio de las lecturas de humedad del aire, respetando la unidad de la fuente.'],
  ['Humedad del suelo promedio', 'Promedio de la señal del sensor capacitivo, expresado en ADC y no como porcentaje calibrado.'],
  ['Iluminación promedio', 'Promedio de iluminación en lux para el periodo o subconjunto seleccionado.'],
]

const analysisGroups = [
  {
    title: 'Tres análisis univariados',
    items: [
      'Distribución y comportamiento de la temperatura ambiental.',
      'Distribución y comportamiento de la humedad del suelo.',
      'Distribución y comportamiento de las lecturas del MQ-2.',
    ],
  },
  {
    title: 'Tres análisis bivariados',
    items: [
      'Temperatura ambiental frente a humedad del aire.',
      'Iluminación frente a temperatura del suelo.',
      'Temperatura ambiental frente a iluminación.',
    ],
  },
  {
    title: 'Análisis multivariado',
    items: [
      'Analizar conjuntamente fecha o periodo, iluminación y temperatura del suelo mediante una agrupación o visualización que calcule la medida sobre los mismos registros.',
      'Si se incorpora una dimensión adicional (por ejemplo, sensor o grupo), debe calcularse dentro de la misma consulta o visualización. Tres gráficos separados no constituyen un análisis multivariado.',
    ],
  },
]

const qualityRules = [
  'Verificar que cada registro tenga una fecha válida y una identificación de sensor reconocible.',
  'Cuantificar valores faltantes y reportar cuántos registros válidos se utilizaron en cada indicador y comparación.',
  'Revisar duplicados e integridad de las claves del modelo antes de calcular los indicadores.',
  'Investigar valores extremos antes de excluirlos. Revisar especialmente el máximo de 4095 ADC del MQ-2.',
  'Conservar las unidades originales: temperatura en °C, iluminación en lux y señales de sensores en ADC cuando corresponda.',
  'No interpretar lecturas ADC como porcentaje de humedad o concentración de gas sin calibración.',
  'Identificar los datos como simulados y presentar las correlaciones como asociaciones, no como causalidad.',
]

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#65B900]" />
          <span className="text-sm leading-6 text-slate-600">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F5F8FA]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/"><BrandLogo /></Link>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-[#062331] transition hover:bg-slate-50">
            <ArrowLeft size={17} /> Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        {/* POWER BI ARRIBA */}
        <section id="power-bi" className="scroll-mt-6">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00C8F5]/30 bg-[#00C8F5]/10 px-4 py-2">
                <BarChart3 size={15} className="text-[#009DBD]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#007F9B]">Inteligencia y análisis de datos</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-[#062331] sm:text-4xl">
                Dashboard analítico <span className="text-[#68B900]">SmartGreenZone</span>
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                Panel interactivo desarrollado en Microsoft Power BI a partir de los datos preparados para el Data Warehouse de SmartGreenZone. Permite explorar indicadores y comportamientos de las variables ambientales del escenario académico simulado.
              </p>
            </div>
            <a href={POWER_BI_URL} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#062331] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#164354]">
              Abrir en Power BI <ExternalLink size={16} />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#062331]">
                  <BarChart3 className="text-[#8BEA00]" size={21} />
                </div>
                <div>
                  <h2 className="font-bold text-[#062331]">SmartGreen · Informe analítico</h2>
                  <p className="text-xs text-slate-500">Microsoft Power BI · Informe interactivo</p>
                </div>
              </div>
              <span className="w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">Publicado</span>
            </div>
            <div className="w-full bg-slate-100">
              <iframe
                title="Dashboard analítico SmartGreenZone - Power BI"
                src={POWER_BI_URL}
                className="block w-full border-0"
                style={{ height: 'clamp(560px, 76vw, 900px)', minHeight: '560px' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-2 border-t border-slate-100 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500">Utiliza los filtros y controles disponibles en el informe para explorar los datos.</p>
              <a href={POWER_BI_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-[#007F9B] hover:underline">
                Ver informe completo <ExternalLink size={14} />
              </a>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <Info size={19} className="mt-0.5 shrink-0 text-amber-700" />
            <p className="text-xs leading-6 text-amber-900">
              El informe utiliza la modalidad de publicación pública de Power BI. 
            </p>
          </div>
        </section>

        {/* ITEM 2: PREPARACIÓN DEL ANÁLISIS */}
        <section className="mt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#65B900]">02 · Preparación del análisis</span>
            <h2 className="mt-2 text-2xl font-extrabold text-[#062331] sm:text-3xl">Fuente, alcance y variables</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              La preparación parte de los registros organizados para el Data Warehouse. La información se utiliza para describir el comportamiento de las variables ambientales y explorar relaciones que puedan orientar el seguimiento del módulo.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Database, label: 'Fuente', value: 'Data Warehouse SmartGreenZone', note: 'Datos preparados desde la base del proyecto y organizados para su análisis.' },
              { icon: Activity, label: 'Periodo documentado', value: 'Octubre – noviembre de 2026', note: 'Periodo reportado en los análisis mensuales y temporales disponibles.' },
              { icon: BarChart3, label: 'Volumen', value: 'Aproximadamente 1,5 millones', note: 'Mediciones simuladas reportadas. Contrastar el total exacto con el Data Warehouse.' },
              { icon: FileSearch, label: 'Base analítica', value: '6 variables', note: 'Variables ambientales y señales de los sensores del módulo.' },
            ].map((card) => {
              const Icon = card.icon
              return (
                <article key={card.label} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Icon className="text-[#65B900]" size={24} />
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400">{card.label}</p>
                  <h3 className="mt-1 font-bold text-[#062331]">{card.value}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{card.note}</p>
                </article>
              )
            })}
          </div>

          <div className="mt-8 grid gap-7 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-[#062331]">Variables utilizadas</h3>
              <BulletList items={variables} />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-[#062331]">Reglas de calidad consideradas</h3>
              <BulletList items={qualityRules} />
              <p className="mt-5 rounded-xl bg-amber-50 p-4 text-xs leading-6 text-amber-900">
                La cantidad exacta de registros válidos por variable, los faltantes y los duplicados deben verificarse mediante consultas sobre la base de datos. No se presentan aquí como cifras confirmadas.
              </p>
            </div>
          </div>
        </section>

        {/* PREGUNTAS DE ANÁLISIS */}
        <section className="mt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#65B900]">Formulación del análisis</span>
            <h2 className="mt-2 text-2xl font-extrabold text-[#062331] sm:text-3xl">Preguntas que orientan el dashboard</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Antes de construir las visualizaciones se formularon preguntas relacionadas con el seguimiento de las condiciones ambientales, la identificación de variaciones y la detección de lecturas inusuales en SmartGreenZone.
            </p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {questions.map(([number, question, purpose]) => (
              <article key={number} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-2xl font-extrabold text-[#8BCB35]">{number}</span>
                <h3 className="mt-3 font-bold leading-6 text-[#062331]">{question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{purpose}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ITEM 3: DASHBOARD Y ANÁLISIS EXPLORATORIO */}
        <section className="mt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#65B900]">03 · Construcción del dashboard</span>
            <h2 className="mt-2 text-2xl font-extrabold text-[#062331] sm:text-3xl">Indicadores y análisis exploratorio</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              La estructura analítica contempla indicadores generales, análisis univariados, bivariados y un análisis multivariado. Las visualizaciones deben permitir explorar los datos mediante filtros pertinentes y mostrar unidades, periodos y subconjuntos analizados.
            </p>
          </div>

          <div className="mt-7">
            <h3 className="text-lg font-bold text-[#062331]">Cinco indicadores generales</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {indicators.map(([title, detail], index) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="text-xs font-bold text-[#65B900]">INDICADOR 0{index + 1}</span>
                  <h4 className="mt-2 font-bold text-[#062331]">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {analysisGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-[#062331]">{group.title}</h3>
                <BulletList items={group.items} />
              </article>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-[#00C8F5]/30 bg-[#F1FAFC] p-6">
            <div className="flex items-start gap-3">
              <Lightbulb size={22} className="mt-0.5 shrink-0 text-[#009DBD]" />
              <div>
                <h3 className="font-bold text-[#062331]">Criterios de interpretación</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Al comparar grupos se deben presentar cantidades absolutas y, cuando corresponda, porcentajes con su denominador. Los promedios deben interpretarse considerando la distribución y los valores extremos. Las correlaciones describen asociaciones y no prueban causalidad. Las lecturas ADC son señales digitales y no equivalen directamente a porcentajes o concentraciones sin calibración.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MÓDULOS DE LA PLATAFORMA */}
        <section className="mt-16">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-[#062331]">Módulos de la plataforma</h2>
            <p className="mt-2 text-sm text-slate-500">Componentes previstos para el monitoreo y la gestión del sistema.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => {
              const Icon = module.icon
              return (
                <article key={module.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8BEA00]/15">
                    <Icon className="text-[#568F00]" size={25} />
                  </div>
                  <h3 className="text-lg font-bold text-[#062331]">{module.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{module.description}</p>
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <span className="text-xs font-semibold text-slate-400">Módulo pendiente de integración</span>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* INFORMACIÓN ACADÉMICA */}
        <div className="mt-12 rounded-2xl bg-[#062331] p-7 text-white">
          <div className="flex items-center gap-3">
            <Leaf className="text-[#8BEA00]" size={27} />
            <h2 className="text-lg font-bold">SmartGreenZone · Big Data</h2>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Proyecto académico desarrollado en el contexto de la asignatura Big Data de la Universidad de Cundinamarca. El dashboard permite comunicar los resultados del análisis exploratorio y documentar cómo los datos pueden orientar decisiones sobre el módulo.
          </p>
        </div>
      </main>
    </div>
  )
}