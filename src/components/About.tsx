import { motion } from 'framer-motion'

function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-32
        px-6
        overflow-hidden
       bg-transparent
      "
    >


      <div
        className="
          absolute
          top-0
          right-0
          w-112.5
          h-112.5
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-87.5
          h-87.5
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-[0.8fr_1.2fr]
          gap-20
          items-center
        "
      >

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
          relative
          flex
          justify-center
          lg:justify-start"
        >

          {/* CARD FOTO */}
          <div
            className="
            relative
            overflow-hidden
            rounded-[35px]
            border
          border-[#d6a1b1]/10
            bg-[{/* GLOW */}#2A1B21]/70
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(214,161,177,0.08)]
            p-3"
          >

            <img
              src="/avatar3.png"
              alt="Andressa"
              className="
        w-70
        md:w-[320px]
        lg:w-85
        h-95
        object-cover
        rounded-[28px]
        opacity-90
        saturate-75
        brightness-90
        contrast-105
        hover:scale-[1.02]
        transition
        duration-500
      "
            />

            {/* OVERLAY */}
            <div
              className="
        absolute
        inset-0
        bg-linear-to-t
        from-[#1A1114]/50
        via-transparent
        to-transparent
        rounded-[35px]
      "
            />

          </div>

        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >

          <span
            className="
              text-[#d6a1b1]
              tracking-[0.3em]
              text-sm
            "
          >
            SOBRE MIM
          </span>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              text-[#F6E7EB]
              leading-tight
            "
          >
            Criando experiências

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
              modernas e encantadoras
            </span>

          </h2>

          {/* CARD */}
          <div
            className="
              bg-[#2A1B21]/80
              border
              border-[#d6a1b1]/10
              backdrop-blur-xl
              rounded-4xl
              p-10
              lg:p-12
              shadow-[0_0_40px_rgba(214,161,177,0.08)]
              space-y-8
              max-w-none
            "
          >

            <p
              className="
                text-[#ecd9df]
                leading-9
                text-[18px]
              "
            >
              Algumas ideias não nascem prontas.
              Elas começam pequenas, leves…
              quase como se estivessem procurando
              um caminho.

              <br />
              <br />

              Eu ajudo a guiá-las.
            </p>

            <p
              className="
                text-[#d8c0c8]
                leading-9
                text-[17px]
              "
            >
              Sou desenvolvedora full stack e
              trabalho nesse espaço entre o imaginar
              e o construir, onde conceitos ganham
              forma, código ganha vida e tudo começa
              a se conectar.
            </p>

            <p
              className="
                text-[#d8c0c8]
                leading-9
                text-[17px]
              "
            >
              Cuido de cada etapa da jornada:
              da lógica invisível até o que o usuário
              vê e sente. Como uma entrega feita
              com cuidado, cada detalhe importa,
              cada parte precisa chegar no seu destino.
            </p>

            <p
              className="
                text-[#d8c0c8]
                leading-9
                text-[17px]
              "
            >
              Uso JavaScript, TypeScript, React
              e Node.js como ferramentas,
              mas o que realmente faço é transformar
              ideias em algo real, com intenção,
              equilíbrio e um pouco de magia.
            </p>

            <p
              className="
                text-[#F6E7EB]
                leading-9
                text-[18px]
                italic
              "
            >
              E, quando tudo se encaixa…
              você percebe que encontrou exatamente
              o que buscava.
            </p>

          </div>

          {/* TECNOLOGIAS */}
          <div className="flex flex-wrap gap-4">

            {[
              'React',
              'Tailwind',
              'TypeScript',
              'Node.js',
              'MySQL',
              'Git e GitHub',
            ].map((tech) => (

              <span
                key={tech}
                className="
                  px-5
                  py-2
                  rounded-full
                  border
                  border-[#d6a1b1]/20
                  text-[#F6E7EB]
                  text-sm
                  backdrop-blur-md
                "
              >
                {tech}
              </span>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default About