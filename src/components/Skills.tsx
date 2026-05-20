import { motion } from 'framer-motion'

const skills = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'JavaScript',
  'HTML',
  'CSS',
  'Git',
  'MySQL',
]

function Skills() {
  return (
    <section
      id="skills"
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
          bottom-0
          right-0
          w-87.5
          h-87.5
          rounded-full
          blur-3xl
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span
            className="
              text-[#d6a1b1]
              tracking-[0.3em]
              text-sm
            "
          >
            TECNOLOGIAS
          </span>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              text-[#F6E7EB]
              mt-6
            "
          >
            Ferramentas que
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
              transformam ideias
            </span>
          </h2>

        </motion.div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
          "
        >

          {skills.map((skill, index) => (

            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-[#d6a1b1]/10
                bg-[#2A1B21]/70
                backdrop-blur-xl
                p-8
                text-center
                shadow-[0_0_30px_rgba(214,161,177,0.05)]
                hover:-translate-y-2
                hover:border-[#d6a1b1]/30
                transition
                duration-500
              "
            >

              {/* GLOW HOVER */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-linear-to-br
                  from-[#d6a1b1]/10
                  via-transparent
                  to-[#bd5a78]/10
                "
              />

              <div className="relative z-10">

                <h3
                  className="
                    text-[#F6E7EB]
                    text-lg
                    font-semibold
                    tracking-wide
                  "
                >
                  {skill}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills