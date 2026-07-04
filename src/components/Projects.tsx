import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'VittaLis',
    image: '/projeto1.png',
    description: `O VittaLis é uma plataforma de seguros de vida desenvolvida em equipe durante o Bootcamp Full Stack JavaScript da Generation Brasil.

Atuei como desenvolvedora Full Stack, sendo responsável pela autenticação de usuários no back-end e pelo desenvolvimento das telas de cadastro e login no front-end, realizando a integração com a API.

No projeto, utilizei React, TypeScript, Tailwind CSS, NestJS, TypeORM e MySQL, além de trabalhar com APIs REST, autenticação por token e versionamento com Git e GitHub.`,
    techs: ['React', 'Tailwind CSS', 'TypeScript', 'Node.JS', 'MySQL'],
    deploy: 'https://vittalis.vercel.app/',
    github: 'https://github.com/Grupo-5-JS-14/VittaLis-FrontEnd',
  },
  {
    title: 'ODS 8',
    image: '/projeto2.png',
    description: `O ODS 8 é um projeto acadêmico desenvolvido como parte da graduação, inspirado no Objetivo de Desenvolvimento Sustentável 8 da ONU, que promove o trabalho decente e o crescimento econômico.

Atuei no desenvolvimento Front-end, criando as interfaces da aplicação e priorizando a organização dos conteúdos, a responsividade e a experiência do usuário.

Durante o projeto, utilizei React, TypeScript e Tailwind CSS, aplicando conceitos de componentização, navegação, responsividade e boas práticas de desenvolvimento Front-end.`,
    techs: ['React', 'Tailwind CSS', 'TypeScript'],
    deploy: 'https://ods-8-trabalho-digno.vercel.app/',
    github: 'https://github.com/Dessxevy/ODS8',
  },
  {
    title: 'VittaFit',
    image: '/projeto3.png',
    description: `O VittaFit é uma plataforma inspirada em uma rede social, desenvolvida em equipe durante o Bootcamp Full Stack JavaScript da Generation Brasil.

Atuei como desenvolvedora Full Stack. No front-end, desenvolvi a tela de perfil do usuário. No back-end, fui responsável pelo CRUD completo de dietas e pelo relacionamento entre dietas, treinos e usuários.

Durante o projeto, utilizei React, TypeScript, Tailwind CSS, NestJS, TypeORM e MySQL, aplicando conceitos de integração entre front-end e back-end, APIs REST e versionamento com Git e GitHub.`,
    techs: ['React', 'Tailwind CSS', 'TypeScript', 'Node.JS', 'MySQL'],
    deploy: 'https://vittafit-app-two.vercel.app/',
    github: 'https://github.com/Grupo-5-JS-14/VittaFit-FrontEnd',
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
            Projetos desenvolvidos com foco em design moderno, experiências
            suaves e interfaces encantadoras.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`
                grid
                lg:grid-cols-[1.15fr_1fr]
                gap-14
                lg:gap-20
                items-start

                ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}
              `}
            >
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
                  min-h-[520px]

                  ${index % 2 !== 0 ? 'lg:col-start-2' : ''}
                `}
              >
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
                    h-full
                    min-h-[520px]
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

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  min-h-[520px]
                  space-y-7
                "
              >
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

                <div
                  className="
                    bg-[#2A1B21]/80
                    border
                    border-[#d6a1b1]/10
                    backdrop-blur-xl
                    rounded-4xl
                    p-7
                    shadow-[0_0_40px_rgba(214,161,177,0.08)]
                  "
                >
                  <p
                    className="
                      text-[#ecd9df]
                      leading-relaxed
                      text-base
                      md:text-[17px]
                      whitespace-pre-line
                    "
                  >
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
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
                        bg-white/5
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-5 pt-2">
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
                        border
                        border-[#d6a1b1]/20
                        bg-[#d6a1b1]/80
                        backdrop-blur-md
                        hover:bg-[#bd5a78]/40
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