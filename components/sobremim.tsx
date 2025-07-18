import React from "react";
import { FaReact, FaPython, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiTailwindcss, SiAngular, SiPostgresql, SiFigma } from "react-icons/si";

const SobreMim = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-zinc-800 dark:text-white">Sobre Mim</h2>
        <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed mb-6">
          Sou um desenvolvedor fullstack, formado em Análise e Desenvolvimento de Sistemas no Senac DF, Pós-graduado em Desenvolvimento fullstack na Unyleya EAD, estou cursando bacharelado em Engenharia de Software na UCB e sou apaixonado por criar soluções digitais que geram impacto real.
          Já atuei em projetos sociais, no setor público e como freelancer, sempre buscando unir tecnologia com usabilidade.
        </p>
        <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed mb-6">
          Tenho experiência com front-end moderno usando <strong>React, Next.js, Angular</strong> e estilização com <strong>TailwindCSS</strong>,
          além de back-end com <strong>Django (Python)</strong> e <strong>Java (Quarkus e Spring Boot)</strong>.
          Trabalho com bancos de dados como <strong>PostgreSQL, MongoDB e MySQL</strong> e tenho conhecimento em metodologias ágeis e desenvolvo com foco em qualidade de código, acessibilidade e boas práticas.
        </p>
        <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
          Também me preocupo com a experiência do usuário, utilizando ferramentas como o <strong>Figma</strong> para prototipação e alinhamento visual entre design e desenvolvimento.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <FaReact className="text-sky-500" size={36} title="React" />
          <SiNextdotjs className="text-black dark:text-white" size={36} title="Next.js" />
          <SiTailwindcss className="text-cyan-500" size={36} title="Tailwind CSS" />
          <SiAngular className="text-red-600" size={36} title="Angular" />
          <FaPython className="text-yellow-500" size={36} title="Python/Django" />
          <FaJava className="text-orange-600" size={36} title="Java" />
          <SiPostgresql className="text-blue-600" size={36} title="PostgreSQL" />
          <SiFigma className="text-pink-500" size={36} title="Figma" />
        </div>
      </div>
    </section>
  );
};

export default SobreMim;