import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Gauge,
  Lightbulb,
  SearchCheck,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

type ValidationItem = {
  title: string;
  detail: string;
  status: "documentado" | "verificar en BD";
};

const validationItems: ValidationItem[] = [
  {
    title: "Trazabilidad del origen",
    detail:
      "Conservar IdSensor, FechaHora, TipoRegistro, OrigenTabla e IdRegistroOrigen para identificar de dónde procede cada medición.",
    status: "documentado",
  },
  {
    title: "Repetibilidad del análisis",
    detail:
      "Reutilizar el mismo periodo, filtros, agrupación temporal, variables y fórmula. Para las correlaciones se documentó Pearson sobre 37 promedios diarios.",
    status: "documentado",
  },
  {
    title: "Cantidad de registros por grupo",
    detail:
      "Contar las mediciones válidas de cada sensor y de cada mes antes de comparar promedios. El resumen disponible no contiene todos esos conteos desglosados.",
    status: "verificar en BD",
  },
  {
    title: "Datos faltantes y fechas",
    detail:
      "Cuantificar valores NULL por variable, fechas inválidas y registros excluidos; informar el denominador utilizado en cada indicador.",
    status: "verificar en BD",
  },
  {
    title: "Valores atípicos del MQ-2",
    detail:
      "Investigar el máximo de 4095 ADC y el promedio de 760,50 ADC del 30 de octubre antes de excluirlos. Revisar saturación, regla de simulación y registro de origen.",
    status: "documentado",
  },
  {
    title: "Correspondencia de las gráficas",
    detail:
      "Comprobar que cada gráfica use las mismas variables, unidades, periodo y filtros descritos en el hallazgo; ADC debe permanecer identificado como ADC.",
    status: "verificar en BD",
  },
];

const decisions = [
  {
    number: "01",
    category: "Monitoreo y control de sensores",
    title: "Establecer alertas para revisar lecturas atípicas",
    icon: Activity,
    color: "#00A8CC",
    bg: "#E5F9FE",
    finding:
      "El análisis del MQ-2 reportó lecturas entre 506 y 517 ADC del 1 al 27 de octubre; el 30 de octubre registró un promedio de 760,50 ADC y un máximo de 4095 ADC. Entre el 1 y el 5 de noviembre se reportaron valores entre 486 y 494 ADC.",
    action:
      "Definir rangos de referencia para las lecturas simuladas, identificar valores fuera de esos rangos y generar avisos en el tablero de monitoreo para que sean revisados antes de interpretarlos.",
    target:
      "Sensor MQ-2, flujo de adquisición ESP32 y visualización de monitoreo en Node-RED; aplicado a las mediciones ambientales del módulo SmartGreenZone.",
    steps: [
      "Conservar el registro original y su fecha y hora.",
      "Marcar lecturas fuera del rango de revisión configurado.",
      "Mostrar la alerta en Node-RED sin convertir ADC en concentración de gas.",
      "Revisar el valor, el contexto de simulación y la posible saturación antes de clasificarlo.",
    ],
    improvement:
      "Aumentar la oportunidad con la que se identifican lecturas inusuales y evitar que un valor extremo pase inadvertido.",
    indicators: [
      "Número de lecturas atípicas detectadas por semana.",
      "Porcentaje de alertas revisadas = alertas revisadas / alertas generadas × 100.",
    ],
    limitations:
      "4095 ADC puede corresponder al límite del conversor o a saturación de la señal. No demuestra por sí solo una fuga ni una concentración específica. Los rangos deben validarse y el sensor MQ-2 requiere calibración para interpretar concentraciones.",
  },
  {
    number: "02",
    category: "Gestión y calidad de datos",
    title: "Fortalecer los controles de calidad y trazabilidad del modelo",
    icon: Database,
    color: "#65B900",
    bg: "#F0F9E4",
    finding:
      "SmartGreenZone integra aproximadamente 1,5 millones de mediciones de seis variables. La integración de diferentes sensores y su organización para el análisis hacen necesario controlar integridad, duplicados, fechas y valores faltantes.",
    action:
      "Incorporar una revisión de calidad antes de actualizar el modelo analítico y conservar la identificación del registro de origen durante la transformación y carga.",
    target:
      "Proceso de integración de datos, tabla de mediciones y modelo dimensional utilizado por Power BI.",
    steps: [
      "Verificar que cada medición tenga sensor y fecha válidos.",
      "Comprobar unicidad de identificadores y correspondencia de claves dimensionales.",
      "Cuantificar valores faltantes y registros rechazados por variable y periodo.",
      "Conservar OrigenTabla e IdRegistroOrigen para rastrear cada registro.",
    ],
    improvement:
      "Disponer de información más consistente y auditable para comparar periodos, construir indicadores y explicar los resultados del dashboard.",
    indicators: [
      "Porcentaje de registros con claves dimensionales válidas.",
      "Porcentaje de registros con datos faltantes por variable.",
      "Cantidad de duplicados y registros rechazados en cada carga.",
    ],
    limitations:
      "El volumen total de registros no garantiza por sí mismo su calidad. Los porcentajes de completitud, duplicados y claves válidas deben calcularse sobre la base de datos; no se presentan cifras que todavía no hayan sido verificadas.",
  },
];

const reproducibilitySteps = [
  "Seleccionar el mismo periodo de análisis y documentar las fechas inicial y final.",
  "Aplicar los mismos filtros de sensor, variable, tipo de registro y origen.",
  "Contar primero los registros válidos de cada grupo y registrar los excluidos.",
  "Agrupar por día o mes según el análisis y calcular el promedio con la misma unidad.",
  "Para las relaciones bivariadas, utilizar los mismos pares de promedios diarios y la correlación de Pearson.",
  "Comparar los resultados numéricos con la visualización correspondiente del dashboard.",
];

function StatusPill({ status }: { status: ValidationItem["status"] }) {
  const verified = status === "documentado";
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
        verified
          ? "bg-emerald-50 text-emerald-700"
          : "bg-amber-50 text-amber-700"
      }`}
    >
      {verified ? "Documentado" : "Verificar en base de datos"}
    </span>
  );
}

export default function Decisions() {
  return (
    <section id="decisiones" className="bg-[#F7FAF8] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8BEA00] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#548F00]">
            <ClipboardCheck size={13} />
            Validación y decisiones
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062331] md:text-4xl">
            De la evidencia a la{" "}
            <span className="text-[#65B900]">gestión del módulo.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            Esta sección documenta cómo revisar la consistencia de los
            resultados y cómo utilizar los conocimientos obtenidos para
            proponer acciones en el escenario simulado de SmartGreenZone.
          </p>
        </div>

        {/* VALIDACIÓN */}
        <div className="mt-14">
          <div className="mb-7 flex items-start gap-3">
            <div className="rounded-xl bg-[#062331] p-3 text-[#8BEA00]">
              <SearchCheck size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[#062331]">
                Validación de resultados y calidad de datos
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                La validación debe comprobar el origen de cada hallazgo, la
                repetibilidad del procedimiento y la correspondencia entre los
                datos y sus visualizaciones.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {validationItems.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl font-extrabold text-slate-200">
                    0{index + 1}
                  </span>
                  <StatusPill status={item.status} />
                </div>
                <h4 className="mt-4 text-base font-bold text-[#062331]">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          {/* REPETIBILIDAD */}
          <div className="mt-7 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-2xl bg-[#062331] p-7 text-white">
              <BarChart3 size={28} className="text-[#8BEA00]" />
              <h4 className="mt-5 text-xl font-bold">
                Procedimiento reproducible
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Para repetir un análisis se deben conservar los filtros,
                periodos, agrupaciones, variables, unidades y fórmulas
                utilizadas. Las correlaciones documentadas se calcularon sobre
                37 promedios diarios.
              </p>
              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8BEA00]">
                  Regla de interpretación
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Una correlación representa una asociación entre variables;
                  no demuestra que una variable cause cambios en la otra.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h4 className="text-lg font-bold text-[#062331]">
                Pasos para repetir los análisis
              </h4>
              <ol className="mt-5 space-y-4">
                {reproducibilitySteps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0F9E4] text-xs font-extrabold text-[#548F00]">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-600">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* ADVERTENCIA DE CONTEOS */}
          <div className="mt-7 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <AlertTriangle
              size={23}
              className="mt-0.5 shrink-0 text-amber-700"
            />
            <div>
              <h4 className="font-bold text-amber-900">
                Conteos y datos faltantes: verificación necesaria
              </h4>
              <p className="mt-2 text-sm leading-7 text-amber-900/80">
                El resumen de resultados disponible contiene promedios,
                correlaciones y el volumen general aproximado, pero no incluye
                el número exacto de registros válidos de cada grupo ni el
                conteo de valores faltantes por variable. Por rigor, esos
                valores no se estiman ni se inventan: deben obtenerse de la
                base de datos antes de afirmar que la comparación quedó
                completamente validada.
              </p>
              <p className="mt-3 text-sm leading-7 text-amber-900/80">
                Para cada comparación se debe reportar: registros originales,
                registros válidos, registros faltantes o excluidos y tamaño
                final de la muestra. Los valores inusuales deben investigarse
                antes de descartarse.
              </p>
            </div>
          </div>
        </div>

        {/* DECISIONES */}
        <div className="mt-20">
          <div className="mb-8 max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
              Propuestas fundamentadas
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#062331] md:text-3xl">
              Dos decisiones para orientar la gestión
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Las propuestas se derivan de los conocimientos identificados en
              el dashboard y se dirigen a procesos concretos del módulo.
            </p>
          </div>

          <div className="space-y-7">
            {decisions.map((decision) => {
              const Icon = decision.icon;
              return (
                <article
                  key={decision.number}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
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
                          Hallazgo y evidencia
                        </span>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {decision.finding}
                        </p>
                      </div>

                      <div
                        className="mt-6 rounded-xl p-5"
                        style={{ backgroundColor: decision.bg }}
                      >
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: decision.color }}
                        >
                          Acción propuesta
                        </span>
                        <p className="mt-3 text-sm leading-7 text-[#062331]">
                          {decision.action}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#F7FAF8] p-7 md:p-9">
                      <div>
                        <div className="flex items-center gap-2">
                          <Target size={18} className="text-[#65B900]" />
                          <span className="text-xs font-bold uppercase tracking-wider text-[#062331]">
                            Proceso, dispositivo o grupo destinatario
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {decision.target}
                        </p>
                      </div>

                      <div className="mt-7">
                        <div className="flex items-center gap-2">
                          <Lightbulb size={18} className="text-[#65B900]" />
                          <span className="text-xs font-bold uppercase tracking-wider text-[#062331]">
                            Actividades para llevarla a cabo
                          </span>
                        </div>
                        <ul className="mt-4 space-y-3">
                          {decision.steps.map((step) => (
                            <li key={step} className="flex items-start gap-3">
                              <CheckCircle2
                                size={17}
                                className="mt-0.5 shrink-0 text-[#65B900]"
                              />
                              <span className="text-sm leading-6 text-slate-600">
                                {step}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-7 rounded-xl border border-slate-200 bg-white p-5">
                        <div className="flex items-center gap-2">
                          <TrendingUp
                            size={17}
                            className="text-[#65B900]"
                          />
                          <span className="text-xs font-bold text-[#062331]">
                            Mejora esperada
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {decision.improvement}
                        </p>
                      </div>

                      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
                        <div className="flex items-center gap-2">
                          <Gauge size={17} className="text-[#00A8CC]" />
                          <span className="text-xs font-bold text-[#062331]">
                            Indicadores de seguimiento
                          </span>
                        </div>
                        <ul className="mt-3 space-y-2">
                          {decision.indicators.map((indicator) => (
                            <li
                              key={indicator}
                              className="text-sm leading-6 text-slate-600"
                            >
                              • {indicator}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
                        <div className="flex items-center gap-2">
                          <ShieldCheck
                            size={17}
                            className="text-amber-700"
                          />
                          <span className="text-xs font-bold text-amber-900">
                            Limitaciones de aplicación
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-amber-900/80">
                          {decision.limitations}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ALCANCE */}
        <div className="mt-12 flex items-start gap-4 rounded-2xl border border-[#00C8F5]/30 bg-[#F1FAFC] p-6">
          <ShieldCheck
            size={24}
            className="mt-1 shrink-0 text-[#009DBD]"
          />
          <div>
            <h3 className="font-bold text-[#062331]">
              Alcance de la validación y las decisiones
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Los resultados corresponden al escenario de datos simulados de
              SmartGreenZone. Las decisiones son propuestas de gestión y no
              funcionalidades que se afirme que ya están desplegadas. Las
              cantidades de registros por grupo, faltantes y duplicados deben
              confirmarse en la base de datos. Las lecturas ADC no equivalen a
              porcentajes ni concentraciones sin calibración; las asociaciones
              estadísticas no prueban causalidad.
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
              Validar los datos permite decidir con mayor fundamento.
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              SmartGreenZone convierte los resultados del análisis en
              oportunidades de mejora, manteniendo explícitos su alcance y sus
              limitaciones.
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
  );
}
