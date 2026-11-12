import {
Sprout,
GraduationCap,
Database,
Cpu,
Cloud,
Target,
Layers3,
ArrowUpRight,
Activity,
} from 'lucide-react'
const projectTechnologies = [
{
icon: Cpu,
title: 'Internet de las Cosas',
description:
'Dispositivos ESP32 y sensores para la adquisición de variables ambientales.',
color: 'bg-[#8BEA00]/15 text-[#568F00]',
},
{
icon: Activity,
title: 'Monitoreo ambiental',
description:
'Captura de temperatura, humedad, iluminación y otras variables del entorno.',
color: 'bg-[#00C8F5]/15 text-[#0095B8]',
},
{
icon: Database,
title: 'Ingeniería de datos',
description:
'Organización, almacenamiento y preparación de información mediante Azure SQL.',
color: 'bg-[#FFD400]/20 text-[#997B00]',
},
{
icon: Cloud,
title: 'Analítica de datos',
description:
'Exploración de información y visualización de resultados mediante Power BI.',
color: 'bg-[#062331]/10 text-[#062331]',
},
]
const projectScope = [
'Adquisición de información mediante sensores conectados a dispositivos ESP32.',
'Transmisión y organización de las mediciones generadas por el sistema.',
'Almacenamiento de información en una base de datos Azure SQL.',
'Construcción de un modelo dimensional para el análisis de los datos.',
'Generación de indicadores y conocimientos que apoyen la toma de decisiones.',
]
export default function ProjectIdentification() {
return (
<section
id="proyecto"
className="relative overflow-hidden bg-white py-24 scroll-mt-24"
>
{/* Elementos decorativos */}
<div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#00C8F5]/10 blur-3xl" />
<div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#8BEA00]/10 blur-3xl" />
<div className="relative mx-auto max-w-7xl px-6 lg:px-10">
{/* Encabezado */}
<div className="mb-16 max-w-3xl">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8BEA00]/40 bg-[#8BEA00]/10 px-4 py-2">
<GraduationCap size={16} className="text-[#568F00]" />
<span className="text-xs font-bold uppercase tracking-wider text-[#416F00]">
Identificación del proyecto
</span>
</div>
<h2 className="text-4xl font-extrabold tracking-tight text-[#062331] sm:text-5xl">
Conociendo nuestro{' '}
<span className="text-[#68B900]">proyecto.</span>
</h2>
<p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
SmartGreenZone integra tecnologías de adquisición,
almacenamiento y análisis de datos para desarrollar
un entorno de monitoreo ambiental aplicado a la
agricultura inteligente.
</p>
</div>
{/* Identificación principal */}
<div className="overflow-hidden rounded-[2rem] bg-[#062331] shadow-xl">
<div className="grid lg:grid-cols-[1.4fr_0.6fr]">
<div className="p-8 sm:p-12">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#8BEA00]/15 p-3">
<Sprout size={28} className="text-[#8BEA00]" />
</div>
<span className="text-sm font-semibold uppercase tracking-widest text-[#8BEA00]">
Proyecto académico
</span>
</div>
<h3 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
SmartGreenZone
</h3>
<p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
Sistema de monitoreo ambiental basado en
tecnologías IoT y gestión de datos para
entornos agrícolas.
</p>
<div className="mt-10 flex flex-wrap gap-3">
<span className="rounded-full border border-[#8BEA00]/30 bg-[#8BEA00]/10 px-4 py-2 text-sm font-medium text-[#B8F56A]">
Internet de las Cosas
</span>
<span className="rounded-full border border-[#00C8F5]/30 bg-[#00C8F5]/10 px-4 py-2 text-sm font-medium text-[#76E3F7]">
Big Data
</span>
<span className="rounded-full border border-[#FFD400]/30 bg-[#FFD400]/10 px-4 py-2 text-sm font-medium text-[#FFE77A]">
Agricultura inteligente
</span>
</div>
</div>
<div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B4655] to-[#062331] p-10">
<div className="absolute h-64 w-64 rounded-full border border-[#8BEA00]/20" />
<div className="absolute h-48 w-48 rounded-full border border-[#00C8F5]/20" />
<div className="relative flex h-40 w-40 items-center justify-center rounded-3xl bg-white p-5 shadow-2xl">
<img
src={`${import.meta.env.BASE_URL}images/Escudo_udec.png`}
alt="Escudo de la Universidad de Cundinamarca"
className="h-full w-full object-contain"
loading="lazy"
/>
</div>
<div className="absolute bottom-7 text-center">
<p className="text-xs font-bold uppercase tracking-widest text-slate-300">
Tecnología para el campo
</p>
</div>
</div>
</div>
</div>
{/* Contexto académico */}
<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
<article className="rounded-2xl border border-slate-100 bg-[#F7FAF8] p-6">
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8BEA00]/15">
<GraduationCap size={25} className="text-[#568F00]" />
</div>
<p className="text-xs font-bold uppercase tracking-widest text-slate-400">
Institución
</p>
<h4 className="mt-2 text-lg font-bold text-[#062331]">
Universidad de Cundinamarca
</h4>
<p className="mt-2 text-sm text-slate-500">
Sede Chía
</p>
</article>
<article className="rounded-2xl border border-slate-100 bg-[#F7FAF8] p-6">
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00C8F5]/15">
<Database size={25} className="text-[#0095B8]" />
</div>
<p className="text-xs font-bold uppercase tracking-widest text-slate-400">
Espacio académico
</p>
<h4 className="mt-2 text-lg font-bold text-[#062331]">
Big Data 701N
</h4>
<p className="mt-2 text-sm text-slate-500">
Proyecto de Gestión del Conocimiento
</p>
</article>
<article className="rounded-2xl border border-slate-100 bg-[#F7FAF8] p-6 sm:col-span-2 lg:col-span-1">
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFD400]/20">
<Target size={25} className="text-[#997B00]" />
</div>
<p className="text-xs font-bold uppercase tracking-widest text-slate-400">
Enfoque
</p>
<h4 className="mt-2 text-lg font-bold text-[#062331]">
Gestión de información
</h4>
<p className="mt-2 text-sm text-slate-500">
Transformación de datos en conocimientos útiles.
</p>
</article>

<article className="rounded-2xl border border-slate-100 bg-[#F7FAF8] p-6">
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8BEA00]/15">
<GraduationCap size={25} className="text-[#568F00]" />
</div>
<p className="text-xs font-bold uppercase tracking-widest text-slate-400">
Programa académico
</p>
<h4 className="mt-2 text-lg font-bold text-[#062331]">
Ingeniería de Sistemas y Computación
</h4>
<p className="mt-2 text-sm text-slate-500">Séptimo semestre</p>
</article>

<article className="rounded-2xl border border-slate-100 bg-[#F7FAF8] p-6 sm:col-span-2 lg:col-span-1">
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00C8F5]/15">
<Target size={25} className="text-[#0095B8]" />
</div>
<p className="text-xs font-bold uppercase tracking-widest text-slate-400">
Integrantes
</p>
<h4 className="mt-2 text-base font-bold leading-7 text-[#062331]">
Cristian Mauricio Muñoz<br />
Julieth Alvarado Meriño<br />
Cristhofer Rojas
</h4>
<p className="mt-2 text-sm text-slate-500">Equipo de trabajo</p>
</article>
</div>
{/* Propósito del PGC */}
<div className="mt-20 grid items-start gap-12 lg:grid-cols-2">
<div>
<span className="text-sm font-bold uppercase tracking-widest text-[#68B900]">
Propósito del proyecto
</span>
<h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#062331] sm:text-4xl">
Transformar mediciones en información para la toma de decisiones.
</h3>
<p className="mt-6 text-base leading-8 text-slate-500">
El Proyecto de Gestión del Conocimiento busca
integrar los datos generados por el entorno IoT
con herramientas de almacenamiento y analítica.
De esta manera, la información recopilada puede
organizarse, explorarse e interpretarse para
identificar comportamientos y generar conocimientos.
</p>
<p className="mt-4 text-base leading-8 text-slate-500">
El trabajo articula la adquisición de datos,
la ingeniería de datos y la inteligencia de
negocios en un mismo proceso tecnológico.
</p>
</div>
<div className="rounded-3xl border border-[#00C8F5]/20 bg-[#F7FAF8] p-8 sm:p-10">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#00C8F5]/15 p-3">
<Layers3 size={25} className="text-[#0095B8]" />
</div>
<h4 className="text-xl font-bold text-[#062331]">
Alcance tecnológico
</h4>
</div>
<ul className="mt-8 space-y-5">
{projectScope.map((item, index) => (
<li key={index} className="flex gap-4">
<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8BEA00]/20 text-xs font-bold text-[#416F00]">
{index + 1}
</span>
<p className="text-sm leading-7 text-slate-600">
{item}
</p>
</li>
))}
</ul>
</div>
</div>
{/* Tecnologías principales */}
<div className="mt-24">
<div className="mb-10 text-center">
<span className="text-sm font-bold uppercase tracking-widest text-[#68B900]">
Ecosistema tecnológico
</span>
<h3 className="mt-4 text-3xl font-extrabold text-[#062331] sm:text-4xl">
Tecnologías que integran el proyecto
</h3>
<p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
Una integración de herramientas para adquirir,
almacenar y analizar información ambiental.
</p>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
{projectTechnologies.map((technology) => {
const Icon = technology.icon
return (
<article
key={technology.title}
className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
>
<div className={"mb-6 flex h-14 w-14 items-center justify-center rounded-2xl " + technology.color}>
<Icon size={27} />
</div>
<h4 className="text-lg font-bold text-[#062331]">
{technology.title}
</h4>
<p className="mt-3 text-sm leading-7 text-slate-500">
{technology.description}
</p>
</article>
)
})}
</div>
</div>
{/* Nota de alcance */}
<div className="mt-16 flex flex-col gap-4 rounded-2xl border border-[#FFD400]/40 bg-[#FFD400]/10 p-6 sm:flex-row sm:items-center">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFD400]/25">
<Target size={25} className="text-[#997B00]" />
</div>
<div>
<h4 className="font-bold text-[#062331]">
Alcance de los resultados
</h4>
<p className="mt-1 text-sm leading-7 text-slate-600">
Los análisis de datos de esta actividad utilizan
registros simulados para desarrollar y validar
el proceso de gestión y analítica. Sus resultados
representan el escenario de estudio y no deben
interpretarse como mediciones reales de un cultivo.
</p>
</div>
</div>
{/* Navegación a la siguiente sección */}
<div className="mt-14 flex justify-end">
<a
href="#problema"
className="inline-flex items-center gap-3 rounded-full bg-[#062331] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0B4655]"
>
Conocer la problemática
<ArrowUpRight size={18} />
</a>
</div>
</div>
</section>
)
}