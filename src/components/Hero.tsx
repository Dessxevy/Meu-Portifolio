import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        px-6
        pt-32
        bg-transparent
      "
    >

      {/* BACKGROUND */}
      <img
        src="/Fundo.png"
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          scale-105
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-b
          from-[#1A1114]/40
          via-[#1A1114]/65
          to-[#140D10]
        "
      />

      {/* PARTÍCULAS */}
      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
          z-0
        "
      >

        {/* PETALA 1 */}
        <div
          className="
            absolute
            top-[-10%]
            left-[10%]
            text-[#f7c8d6]/60
            text-xl
            animate-[fall_12s_linear_infinite]
          "
        >
          ❀
        </div>

        {/* PETALA 2 */}
        <div
          className="
            absolute
            top-[-20%]
            left-[30%]
            text-[#d6a1b1]/50
            text-2xl
            animate-[fall_16s_linear_infinite]
          "
        >
          ✿
        </div>

        {/* PETALA 3 */}
        <div
          className="
            absolute
            top-[-15%]
            left-[55%]
            text-[#d6a1b1]/40
            text-lg
            animate-[fall_14s_linear_infinite]
          "
        >
          ❀
        </div>

        {/* PETALA 4 */}
        <div
          className="
            absolute
            top-[-25%]
            left-[80%]
            text-[#bd5a78]/50
            text-xl
            animate-[fall_18s_linear_infinite]
          "
        >
          ✿
        </div>

        
        {/* PETALA 5 */}
        <div
          className="
            absolute
            top-[-10%]
            left-[95%]
            text-[#d6a1b1]/50
            text-2xl
            animate-[fall_16s_linear_infinite]
          "
        >
          ✿
        </div>

      </div>

      {/* CONTEÚDO */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          w-full
          flex
          items-center
        "
      >

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            space-y-8
            max-w-3xl
          "
        >

          <h1
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-tight
              text-[#F6E7EB]
            "
          >
            Olá, eu sou a Andressa

            <span
              className="
                block
                bg-linear-to-r
                from-[#f7c8d6]
                via-[#d6a1b1]
                to-[#bd5a78]
                text-transparent
                bg-clip-text
              "
            >
              Desenvolvedora Full Stack Júnior
            </span>

          </h1>

          <p
            className="
              text-[#ecd9df]
              text-lg
              leading-relaxed
              max-w-xl
            "
          >
            Transformando ideias em interfaces 
            modernas e experiências encantadoras.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap gap-5 relative z-20">

            <a
              href="#projects"
              className="
                px-8
                py-4
                rounded-2xl
                border-[#d6a1b1]/20
                bg-[#d6a1b1]/80
                backdrop-blur-md
                hover:bg-[#bd5a78]/25
                transition
                duration-300
                text-[#F6E7EB]
                font-semibold
              "
            >
              Ver Projetos
            </a>

            <a
              href="/curriculo.pdf"
              download
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-[#d6a1b1]/20
                bg-[#24181D]/80
                backdrop-blur-md
                hover:bg-[#2f1f26]
                transition
                duration-300
                text-[#F6E7EB]
                font-semibold
              "
            >
              Baixar CV
            </a>

            <a
              href="#contact"
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-[#d6a1b1]/20
                bg-white/5
                backdrop-blur-md
                hover:bg-white/10
                transition
                duration-300
                text-[#F6E7EB]
              "
            >
              Contato
            </a>

          </div>

        </motion.div>

      </div>

      {/* FADE BOTTOM */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-60
          bg-linear-to-b
          from-transparent
          to-[#140D10]
          z-20
          pointer-events-none
        "
      />

    </section>
  )
}

export default Hero