import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
      "
    >

      {/* BACKDROP */}
      <div
        className="
          absolute
          inset-0
          backdrop-blur-xl
         bg-transparent
          border-b
          border-[#d6a1b1]/10
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          py-5
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO + NOME */}
<a
  href="#home"
  className="flex items-center gap-2"
>

  <img
    src="/navicon.png"
    alt="Logo Andressa.dev"
    className="w-10 h-10 object-contain"
  />

  <h1
    className="
      text-2xl
      font-black
      text-[#F6E7EB]
      tracking-wide
    "
  >
    Andressa
    <span className="text-[#d6a1b1]">
      .dev
    </span>
  </h1>

</a>

        {/* DESKTOP */}
        <nav
          className="
            hidden
            md:flex
            items-center
            gap-10
            text-[#d8c0c8]
            font-medium
          "
        >

          {[
            'home',
            'about',
            'projects',
            'skills',
            'contact',
          ].map((item) => (

            <a
              key={item}
              href={`#${item}`}
              className="
                relative
                hover:text-[#F6E7EB]
                transition
                duration-300
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-0.5
                after:w-0
                after:bg-[#d6a1b1]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item === 'home' && 'Início'}
              {item === 'about' && 'Sobre'}
              {item === 'projects' && 'Projetos'}
              {item === 'skills' && 'Skills'}
              {item === 'contact' && 'Contato'}
            </a>

          ))}

        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-[#F6E7EB]
            relative
            z-20
          "
        >

          {open
            ? <X size={28} />
            : <Menu size={28} />
          }

        </button>

      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              relative
              z-10
              mx-4
              mt-2
              rounded-[30px]
              border
              border-[#d6a1b1]/10
              bg-[#2A1B21]/90
              backdrop-blur-2xl
              shadow-[0_0_40px_rgba(214,161,177,0.08)]
              overflow-hidden
            "
          >

            <div
              className="
                flex
                flex-col
                p-6
                text-[#F6E7EB]
              "
            >

              {[
                ['Início', '#home'],
                ['Sobre', '#about'],
                ['Projetos', '#projects'],
                ['Skills', '#skills'],
                ['Contato', '#contact'],
              ].map(([label, href]) => (

                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="
                    py-4
                    border-b
                    border-[#d6a1b1]/10
                    last:border-none
                    hover:text-[#d6a1b1]
                    transition
                  "
                >
                  {label}
                </a>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  )
}

export default Navbar