import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Grimório Verde',
    image: '/projeto1.jpg',
    description:
      'Farmácia mágica inspirada no universo de Studio Ghibli, alquimia e fantasia, com foco em uma experiência visual imersiva e temática. Atuei no desenvolvimento completo da aplicação, sendo responsável tanto pelo frontend quanto pelo backend, incluindo a criação da estrutura da plataforma, integração entre as camadas e consumo de dados via API própria.',

    techs: ['React', 'Tailwind CSS', 'TypeScript', 'Node.JS', 'Jest'],

    deploy: '',
    github: 'https://github.com/Dessxevy/projeto_final_bloco_02',
  },

  {
    title: 'ODS 8',
    image: '/projeto2.png',
    description:
      'Projeto acadêmico de interface moderna voltado à temática de trabalho digno e crescimento econômico, com foco em organização de informações e experiência de usuário. Desenvolvido exclusivamente no frontend, com atenção à estrutura visual, responsividade e clareza na apresentação dos conteúdos.',

    techs: ['React', 'Tailwind CSS', 'TypeScript'],

    deploy: 'https://ods-8-trabalho-digno.vercel.app/',
    github: 'https://github.com/Dessxevy/ODS8',
  },
  {
    title: 'Jardim do céu',
    image: '/projeto3.png',
    description:
      'Aplicação de clima com estética inspirada em Studio Ghibli, focada em uma experiência visual suave e atmosférica. Desenvolvido exclusivamente no frontend, consumindo API de clima com base na localização informada pelo usuário. A interface foi construída para apresentar dados meteorológicos de forma simples, intuitiva e responsiva.',

    techs: ['HTML', 'CSS', 'JavaScript'],

    deploy: 'https://clima-lac-psi.vercel.app/',
    github: 'https://github.com/Dessxevy/Clima',
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="
        py-32
        px-6
       bg-transparent
        relative
        overflow-hidden
      "
    >

      <div
        className="
          absolute
          bottom-0
          right-0
          w-100
          h-100
          rounded-full
          blur-3xl
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TÍTULO */}
        <div className="text-center mb-28">

          <span
            className="
              text-[#d6a1b1]
              tracking-[0.35em]
              text-sm
            "
          >
            PORTFÓLIO
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
            Projetos em destaque
          </h2>

          <p
            className="
              text-[#e7ccd4]
              mt-6
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Projetos desenvolvidos com foco em
            design moderno, experiências suaves
            e interfaces encantadoras.
          </p>

        </div>

        <div className="space-y-32">

          {projects.map((project, index) => (

            <div
              key={project.title}
              className={`
                grid
                lg:grid-cols-2
                gap-16
                items-center

                ${index % 2 !== 0
                  ? 'lg:grid-flow-dense'
                  : ''
                }
              `}
            >

              {/* IMAGEM */}
              <div
                className={`
    relative
    group
    overflow-hidden
    rounded-[35px]
    border
    border-[#d6a1b1]/10
    bg-[#24181d]
    backdrop-blur-xl
    shadow-[0_0_40px_rgba(214,161,177,0.08)]

    ${index % 2 !== 0
                    ? 'lg:col-start-2'
                    : ''
                  }
  `}
              >

                {/* BORDA GLOW */}
                <div
                  className="
      absolute
      inset-0
      bg-linear-to-br
      from-[#d6a1b1]/10
      via-transparent
      to-[#bd5a78]/10
      opacity-0
      group-hover:opacity-100
      transition
      duration-700
      z-10
    "
                />

                <img
                  src={project.image}
                  alt={project.title}
                  className="
      w-full
      h-105
      object-cover
      object-top

      opacity-80
      brightness-75
      saturate-70
      contrast-110

      group-hover:scale-105
      group-hover:brightness-90
      group-hover:saturate-90

      transition
      duration-700
    "
                />

                {/* OVERLAY CINEMÁTICO */}
                <div
                  className="
      absolute
      inset-0
      bg-linear-to-t
      from-[#1A1114]
      via-[#1A1114]/20
      to-[#1A1114]/10
    "
                />

              </div>
              {/* TEXTO */}
              <div className="space-y-8">

                <span
                  className="
                    text-[#d6a1b1]
                    tracking-[0.25em]
                    text-sm
                  "
                >
                  PROJETO 0{index + 1}
                </span>

                <h3
                  className="
                    text-4xl
                    md:text-5xl
                    font-black
                    text-[#F6E7EB]
                  "
                >
                  {project.title}
                </h3>

                {/* CARD */}
                <div
                  className="
                    bg-[#2A1B21]/80
                    border
                    border-[#d6a1b1]/10
                    backdrop-blur-xl
                    rounded-4xl
                    p-8
                    shadow-[0_0_40px_rgba(214,161,177,0.08)]
                  "
                >

                  <p
                    className="
                      text-[#ecd9df]
                      leading-relaxed
                      text-lg
                    "
                  >
                    {project.description}
                  </p>

                </div>

                {/* TECHS */}
                <div className="flex flex-wrap gap-4">

                  {project.techs.map((tech) => (

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

                {/* BOTÕES */}
                <div className="flex flex-wrap gap-5 pt-3">

                  {project.deploy && (
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
        flex
        items-center
        gap-3
        px-7
        py-4
        rounded-2xl
        bg-[#d6a1b1]
        hover:bg-[#bd5a78]
        transition
        text-[#F6E7EB]
        font-semibold
        shadow-[0_0_30px_rgba(214,161,177,0.2)]
      "
                    >
                      <ExternalLink size={18} />
                      Deploy
                    </a>
                  )}

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      flex
      items-center
      gap-3
      px-7
      py-4
      rounded-2xl
      border
      border-[#d6a1b1]/20
      bg-white/5
      backdrop-blur-md
      hover:bg-white/10
      transition
      text-[#F6E7EB]
    "
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>


                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects