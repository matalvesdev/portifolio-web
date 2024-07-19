"use client";
import { Github, Linkedin, Mail, Download, Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";

interface Project {
  name: string;
  description: string;
  stack: string[];
  image: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    name: "Portfólio Web - 2024",
    description:
      "Portfólio pessoal, criado com NextJS e TailwindCSS para estilização, além do uso do shadcn/UI para componentizar alguns elementos.",
    stack: ["NextJS", "TailwindCSS", "Shadcn/UI"],
    image: "https://i.imgur.com/cG5ySfO.jpeg",
    githubLink: "https:github.com/matalvesdev/portifolio-web",
  },
  {
    name: "NLW Journey - Rocketseat",
    description:
      "Planejador de Viagens feito em ReactJS, TailwindCSS e consumindo a API do projeto feita na trilha de NodeJS..",
    stack: ["ReactJS", "TailwindCSS", "NodeJS"],
    image: "/nlw-journey.jpg",
    githubLink: "https:github.com/matalvesdev/nlw-journeyfront-rocket",
  },
];

interface ProjectDialogProps {
  project: Project;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project }) => (
  <Dialog>
    <DialogTrigger asChild>
      <a href="#projetos" className="project-link">
        <img
          src={project.image}
          alt={`${project.name}`}
          className="w-auto h-96 cursor-pointer transition-transform transform hover:scale-105"
        />
      </a>
    </DialogTrigger>
    <DialogContent className="p-6 rounded-lg shadow-lg bg-white max-w-lg mx-auto">
      <DialogHeader className="mb-2 border-b border-gray-200 pb-2">
        <DialogTitle className="text-2xl font-bold text-gray-800 mb-4">
          {project.name}
        </DialogTitle>
        <DialogDescription className="text-gray-600 text-lg">
          {project.description}
        </DialogDescription>
      </DialogHeader>
      <div>
        <h4 className="font-semibold text-lg text-gray-800 mb-2">
          Stack Usada:
        </h4>
        <ul className="list-disc list-inside text-gray-700">
          {project.stack.map((tech: string, index: number) => (
            <li key={index} className="pl-1">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end mt-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 bg-black text-white rounded-lg hover:bg-slate-900 transition duration-300 flex items-center justify-center"
        >
          Ver no GitHub
        </a>
      </div>
    </DialogContent>
  </Dialog>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-white w-full">
        <header className="fixed top-0 left-0 right-0 bg-inherit w-full h-[128px] flex items-center justify-between px-4 md:px-64 py-2">
          <div className="text-3xl">
            <a href="#inicio" className="text-black font-bold">
              M
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-2 md:space-x-4 text-lg md:text-2xl font-normal">
            <a href="#inicio" className="nav-link">
              Inicio
            </a>
            <a href="#sobre-mim" className="nav-link">
              Sobre Mim
            </a>
            <a href="#experiencia" className="nav-link">
              Experiência
            </a>
            <a href="#projetos" className="nav-link">
              Projetos
            </a>
            <a href="#contato" className="nav-link">
              Contato
            </a>
          </nav>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </header>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-4 z-50 md:hidden">
            <a
              href="#inicio"
              className="nav-link text-2xl"
              onClick={toggleMenu}
            >
              Inicio
            </a>
            <a
              href="#sobre-mim"
              className="nav-link text-2xl"
              onClick={toggleMenu}
            >
              Sobre Mim
            </a>
            <a
              href="#experiencia"
              className="nav-link text-2xl"
              onClick={toggleMenu}
            >
              Experiência
            </a>
            <a
              href="#projetos"
              className="nav-link text-2xl"
              onClick={toggleMenu}
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="nav-link text-2xl"
              onClick={toggleMenu}
            >
              Contato
            </a>
          </div>
        )}
        <main className="text-black flex flex-col px-4 md:px-64 gap-16">
          <section
            id="inicio"
            className="flex flex-col py-80 md:py-80 text-left"
          >
            <h1 className="space-y-4 mb-8">
              <p className="text-3xl md:text-5xl">Olá.</p>
              <p className="text-3xl md:text-5xl font-bold">
                Eu sou o Mateus Alves.
              </p>
              <p className="text-3xl md:text-5xl">Sou Desenvolvedor Web.</p>
            </h1>
            <div className="text-xl md:text-2xl font-normal">
              <p className="space-y-6 mb-4">
                Com 2+ anos de Experiência no Desenvolvimento de Aplicações Web.
              </p>
              <p>
                Conectando tecnologia com as necessidades do usuário de maneira
                responsiva e intuitiva.
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/matalvesdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
              >
                <Github className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/matfalves/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
              >
                <Linkedin className="cursor-pointer" />
              </a>
              <a
                href="https://github.com/matalvesdev/Curriculum/archive/refs/heads/main.zip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
              >
                <Download className="cursor-pointer" />
              </a>
            </div>
          </section>

          <section
            id="sobre-mim"
            className="flex flex-col md:flex-row items-center justify-between py-80 md:py-80"
          >
            <div className="md:pr-12 mb-8 md:mb-0">
              <img
                src="/profile.jpg"
                alt="Profile-Pic"
                className="w-48 h-48 md:w-96 md:h-96 rounded-full"
              />
            </div>
            <div className="space-y-10">
              <h1 className="mb-4 text-3xl md:text-5xl">Quem sou eu?</h1>
              <div className="text-xl md:text-2xl font-normal mb-4">
                <p className="mb-2">
                  Desenvolvedor Web, formado em Análise e Desenvolvimento de
                  Sistemas
                </p>
                <p className="mb-2">
                  com especialização em DevOps pela Udemy e especialização em
                  Fullstack
                </p>
                <p className="mb-2">
                  pela Oracle (One Next Education - Alura).
                </p>
                <p>
                  Atualmente tenho me especializado em FullStack pela Rocketseat
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/matalvesdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  <Github className="cursor-pointer" />
                </a>
                <a
                  href="https://www.linkedin.com/in/matfalves/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  <Linkedin className="cursor-pointer" />
                </a>
                <a
                  href="https://github.com/matalvesdev/Curriculum/archive/refs/heads/main.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  <Download className="cursor-pointer" />
                </a>
              </div>
            </div>
          </section>

          <section id="experiencia" className="py-32 md:py-40">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-5xl mb-6 font-semibold">
                Experiência
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-xl md:text-2xl">
                    Elev Solutions
                  </h2>
                  <p className="font-bold text-md md:text-lg">
                    Desenvolvedor FullStack - Abril/2024 → Presente
                  </p>
                  <p className="font-normal text-md md:text-lg">
                    - Contribuindo para o desenvolvimento de soluções web
                    robustas utilizando ReactJS, NodeJS, e outras tecnologias.
                  </p>
                  <p className="font-normal text-md md:text-lg">
                    - Implementação de práticas de DevOps para melhoria contínua
                    e integração contínua.
                  </p>
                  <p className="font-normal text-md md:text-lg">
                    - Colaborando com equipes multidisciplinares para entregar
                    projetos de alta qualidade.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold text-xl md:text-2xl mb-3">
                    Tecnologias:
                  </h2>
                  <p className="font-normal text-md md:text-lg">
                    ReactJS, NextJS, TypeScript, JavaScript, TailwindCSS,
                    PostgreSQL, AWS, Azure, Google Cloud, MongoDB, NodeJS,
                    NestJS, Terraform, Docker.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <a
                      href="https://github.com/matalvesdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black transition-colors"
                    >
                      <Github className="cursor-pointer" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/matfalves/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black transition-colors"
                    >
                      <Linkedin className="cursor-pointer" />
                    </a>
                    <a
                      href="https://github.com/matalvesdev/Curriculum/archive/refs/heads/main.zip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black transition-colors"
                    >
                      <Download className="cursor-pointer" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-xl md:text-2xl">Formação:</h2>
                  <p className="font-bold text-md md:text-lg">
                    Universidade Presbiteriana Mackenzie (EAD): Tecnólogo em
                    Análise e Desenvolvimento de Sistemas
                  </p>
                  <p>Janeiro/2022 → Junho/2024</p>
                  <p className="font-bold text-md md:text-lg">
                    ONE - Oracle Next Education by Alura
                  </p>
                  <p>Janeiro/2022 → Junho/2022</p>
                  <p className="font-bold text-md md:text-lg">
                    Rocketseat - Formação FullStack
                  </p>
                  <p>Março/2024 → Presente</p>
                </div>
              </div>
            </div>
          </section>

          <section id="projetos" className="py-32 md:py-80">
            <div className="flex items-center justify-center mb-12">
              <h1 className="text-4xl md:text-6xl font-semibold">
                Projetos Recentes
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-4 md:space-y-0">
              {projects.map((project, index) => (
                <ProjectDialog key={index} project={project} />
              ))}
            </div>
          </section>

          <section id="contato" className="py-80 md:py-80">
            <div className="flex mb-10">
              <h1 className="text-4xl md:text-5xl font-semibold">Contato</h1>
            </div>
            <div className="text-left mb-4">
              <h2 className="font-semibold text-2xl p-1">
                Quer conversar comigo?
              </h2>
              <p className="p-2">
                Vamos bater um papo, entre em contato comigo através dos links
                abaixo.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="mailto:mateusalvesbassanelli@gmail.com"
                className="flex items-center space-x-2"
              >
                <Mail />
                <span>mateusalvesbassanelli@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/matfalves/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Linkedin className="cursor-pointer" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/matalvesdev/Curriculum/archive/refs/heads/main.zip"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Download className="cursor-pointer" />
                <span>Download - CV</span>
              </a>
            </div>
          </section>
        </main>
      </div>
      <footer className="bg-slate-50 text-black flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-4">
        <p className="">
          Copyright © 2024 Mateus Alves. Todos os direitos reservados.
        </p>
        <p className="">
          Precisa de um Desenvolvedor Web? Entre em contato comigo.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/matalvesdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors"
          >
            <Github className="cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/matfalves/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors"
          >
            <Linkedin className="cursor-pointer" />
          </a>
          <a
            href="https://github.com/matalvesdev/Curriculum/archive/refs/heads/main.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors"
          >
            <Download className="cursor-pointer" />
          </a>
        </div>
      </footer>
    </>
  );
}
