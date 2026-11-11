
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import ProjectIdentification from '../components/ProjectIdentification'
import Problem from '../components/Problem'
import Justification from '../components/Justification'
import Objectives from '../components/Objectives'
import Framework from '../components/Framework'
import Methodology from '../components/Methodology'
import Solution from '../components/Solution'
import Architecture from '../components/Architecture'
import DataManagement from '../components/DataManagement'
import DataAnalysis from '../components/DataAnalysis'
import Knowledge from '../components/Knowledge'
import Decisions from '../components/Decisions'
import Results from '../components/Results'
import References from '../components/References'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Presentación */}
        <div id="inicio" className="scroll-mt-24">
          <Hero />
        </div>

        {/* Acerca del proyecto */}
        <div id="nosotros" className="scroll-mt-24">
          <About />
        </div>

        {/* Identificación y fundamentación */}
        <ProjectIdentification />

        <Problem />

        <Justification />

        <Objectives />

        <Framework />

        <Methodology />

        {/* Solución tecnológica */}
        <div id="solucion" className="scroll-mt-24">
          <Solution />
        </div>

        <Architecture />

        {/* Gestión y análisis de datos */}
        <DataManagement />

        <DataAnalysis />

        {/* Gestión del conocimiento */}
        <Knowledge />

        <Decisions />

        <Results />

        <References />

        {/* Pie de página */}
        <footer
          id="contacto"
          className="bg-[#062331] px-6 py-10 text-center text-white"
        >
          <p className="font-semibold">SmartGreenZone</p>

          <p className="mt-2 text-sm text-slate-300">
            Proyecto de Gestión del Conocimiento · Big Data 701N
          </p>

          <p className="mt-4 text-xs text-slate-400">
            Agricultura inteligente · IoT · Ingeniería de datos
          </p>
        </footer>
      </main>
    </>
  )
}
