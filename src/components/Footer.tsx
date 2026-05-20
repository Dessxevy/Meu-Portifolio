import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[#d6a1b1]/10
        bg-transparent
        py-16
        px-6
      "
    >

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          flex
          flex-col
          items-center
          gap-8
        "
      >

        {/* LOGO */}
        <h2
          className="
            text-3xl
            font-black
            text-[#F6E7EB]
            tracking-wide
          "
        >
          Andressa
          <span className="text-[#d6a1b1]">
            .dev
          </span>
        </h2>

        {/* TEXTO */}
        <p
          className="
            text-[#d8c0c8]
            text-center
            max-w-xl
            leading-relaxed
          "
        >
          Criando experiências modernas,
          delicadas e funcionais.
        </p>

        {/* REDES */}
        <div className="flex items-center gap-5">

          <a
            href="https://github.com/Dessxevy"
            target="_blank"
            className="
              w-14
              h-14
              rounded-2xl
              border
              border-[#d6a1b1]/10
              bg-[#2A1B21]/70
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-[#F6E7EB]
              hover:bg-[#d6a1b1]
              hover:text-white
              hover:-translate-y-1
              transition
              duration-300
            "
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/andressa-andrade-dev/"
            target="_blank"
            className="
              w-14
              h-14
              rounded-2xl
              border
              border-[#d6a1b1]/10
              bg-[#2A1B21]/70
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-[#F6E7EB]
              hover:bg-[#d6a1b1]
              hover:text-white
              hover:-translate-y-1
              transition
              duration-300
            "
          >
            <FaLinkedin size={22} />
          </a>

        </div>

        {/* LINHA */}
        <div
          className="
            w-full
            h-px
          "
        />

        {/* COPYRIGHT */}
        <p
          className="
            text-[#a89299]
            text-sm
            text-center
          "
        >
            © {new Date().getFullYear()} Andressa.dev — Todos os direitos reservados.
        </p>

      </div>

    </footer>
  )
}

export default Footer