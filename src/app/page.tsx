"use client";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import React from "react";


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
    githubLink: "https://github.com/matalvesdev/portifolio-web",
  },
];

interface ProjectDialogProps {
  project: Project;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project }) => (
  <Dialog>
    <DialogTrigger asChild>
      <a href="#" className="project-link">
        <img
          src={project.image}
          alt={`${project.name}`}
          className="w-110 h-96 cursor-pointer transition-transform transform hover:scale-105"
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
  return (
    <>
      <div className="bg-white w-auto">
        <header className="flex justify-between items-center px-8 md:px-64 py-2 bg-inherit w-[1920px] h-[128px] fixed">
          <div className="text-3xl">
            <a href="#inicio" className="text-black font-bold">
              M
            </a>
          </div>
          <nav className="flex items-center space-x-4 text-2xl font-normal">
            <a href="#inicio" className="nav-link">
              Inicio
            </a>
            <a href="#sobre-mim" className="nav-link">
              Sobre Mim
            </a>
            <a href="#projetos" className="nav-link">
              Projetos
            </a>
            <a href="#contato" className="nav-link">
              Contato
            </a>
          </nav>
        </header>
        <main className="text-black flex flex-col justify-center md:p-64 gap-8">
          <section id="inicio" className="items-center mb-80 w-90 h-90">
            <h1 className="space-y-4 mb-8 mt-48">
              <p className="text-5xl">Olá.</p>
              <p className="text-5xl w-auto font-bold">
                Eu sou o Mateus Alves.
              </p>
              <p className="text-5xl">Sou Desenvolvedor Web.</p>
            </h1>
            <div className="text-2xl font-normal py-4">
              <p className="space-y-6">
                Com 2+ anos de Experiência no Desenvolvimento de Aplicações Web.
              </p>
              <p>
                Conectando tecnologia com as necessidades do usuário de maneira
                responsiva e intuitiva.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/matalvesdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/matfalves/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/matfalves/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="cursor-pointer" />
              </a>
            </div>
          </section>

          <section id="sobre-mim" className="flex items-center justify-end mb-80 w-auto">
            <div className="pr-28">
              <img src="/profile.jpg" alt="Profile-Pic" className="w-96 h-96 rounded-full" />
            </div>
            <div className="space-y-6 flex flex-col">
              <h1 className="mb-4 text-5xl">Quem sou eu?</h1>
              <div className="text-2xl font-normal mb-4">
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
                >
                  <Github className="cursor-pointer" />
                </a>
                <a
                  href="https://www.linkedin.com/in/matfalves/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="cursor-pointer" />
                </a>
                <a
                  href="https://www.linkedin.com/in/matfalves/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="cursor-pointer" />
                </a>
              </div>
            </div>
          </section>

          <section id="sobre-mim" className="mb-80">
            <div className="">
              <div className="grid grid-cols-2 gap-20 mb-4 items-start text-2xl">
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold">Experiência:</h2>
                  <p className="font-bold">
                    Elev Solutions: Desenvolvedor FullStack
                  </p>
                  <p>Março/2024 → Presente</p>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold">Stack:</h2>
                  <p className="">
                    Nextjs, ReactJS, TypeScript, JavaScript, TailwindCSS,
                    PostgreSQL, AWS, Azure, Google Cloud, MongoDB, NodeJS,
                    NestJS, Terraform.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold">Formação:</h2>
                  <p className="font-bold">
                    Universidade Presbiteriana Mackenzie (EAD): Tecnólogo em
                    Análise e Desenvolvimento de Sistemas
                  </p>
                  <p>Janeiro/2022 → Junho/2024</p>
                  <p className="font-bold">
                    ONE - Oracle Next Education by Alura
                  </p>
                  <p>Janeiro/2022 → Junho/2022</p>
                  <p className="font-bold">Rocketseat - Formação FullStack</p>
                  <p>Março/2024 → Presente</p>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/matalvesdev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="cursor-pointer" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/matfalves/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="cursor-pointer" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/matfalves/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="projetos" className="mb-80">
            <div className="flex items-center">
              <h1 className="mb-10 text-5xl font-semibold">
                Projetos recentes
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-10">
            <h3 className="text-2xl font-semibold">Portifólio Web - 2024</h3>
              {projects.map((project, index) => (
                <ProjectDialog key={index} project={project} />
              ))}
            </div>
          </section>

          <section  id="contato" className="grid grid-cols-3 gap-2">
            <div className="col-span-3 flex items-center">
              <h1 className="mb-10 text-5xl font-semibold">Contato</h1>
            </div>
            <div className="col-span-3">
              <h2 className="font-semibold text-2xl p-1">
                Quer conversar comigo?
              </h2>
              <p className="p-2">
                Vamos bater um papo, entre em contato comigo através dos links
                abaixo.
              </p>
            </div>
            <div className="col-span-1 flex items-center p-2 space-x-10">
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
            </div>
            <div className="col-span-2 flex items-center">
              <a
                href="https://www.linkedin.com/in/matfalves/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Download className="cursor-pointer" />
                <span>Download - Cv</span>
              </a>
            </div>
          </section>
        </main>
      </div>
      <div>
        <footer className="bg-slate-50 text-black flex justify-between items-center px-20 md:px-64 py-2 bg-inherit w-full md:w-[1920px] h-[90px]">
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
            >
              <Github className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/matfalves/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/matfalves/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="cursor-pointer" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
