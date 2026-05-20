import { Toaster } from 'sonner'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#140D10]
        text-white
      "
    >
      {/* TOAST PREMIUM */}
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: {
            background: '#2A1B21',
            border: '1px solid rgba(214,161,177,0.2)',
            color: '#F6E7EB',
          },
        }}
      />

      {/* FUNDO GLOBAL */}
      <div
        className="
          fixed
          inset-0
          -z-50
          bg-[linear-gradient(to_bottom,#1b1115_0%,#140D10_40%,#140D10_100%)]
        "
      />

      {/* GLOW SUPERIOR */}
      <div
        className="
          fixed
          -top-62.5
          left-1/2
          -translate-x-1/2
          w-225
          h-150
          rounded-full
          blur-[140px]
          -z-40
          pointer-events-none
        "
      />

      {/* GLOW INFERIOR */}
      <div
        className="
          fixed
          -bottom-75
          -right-25
          w-125
          h-125
          rounded-full
          blur-[120px]
          -z-40
          pointer-events-none
        "
      />

      {/* TEXTURA */}
      <div
        className="
          fixed
          inset-0
          opacity-[0.025]
          pointer-events-none
          -z-30
          bg-[url('/noise.png')]
        "
      />

      {/* CONTEÚDO */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App