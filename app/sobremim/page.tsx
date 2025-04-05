'use client';
import { motion } from "framer-motion";
import { ParticleCanvas } from "@/hooks/particle";
import Navbar from "@/components/navbar";

export default function SobreMim() {
  return (
    <>
      {/* Impede o scroll horizontal geral */}
      <main className="relative w-full overflow-x-hidden">
        <Navbar />
        <section
          className="relative min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
          id="sobremim"
        >
          {/* Particle Background */}
          <div className="absolute inset-0 -z-10">
            <ParticleCanvas />
          </div>

          {/* Conteúdo principal */}
          <div className="max-w-7xl mx-auto">
            {/* Sobre mim */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-content mb-4 text-center">
                Sobre mim
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto mb-8" />
              <p className="text-lg text-content/80 text-justify max-w-3xl mx-auto">
                Olá, eu sou o Samuel Ricardo dos Santos Ferreira, tenho 20 anos e moro em Brasília-DF. Sou formado em Análise e Desenvolvimento de Sistemas na Faculdade Senac DF, sou Pós-graduando em Desenvolvimento fullstack na Unyleya e atuo como desenvolvedor fullstack. Sou apaixonado por tecnologia e adoro criar soluções que realmente fazem a diferença. No front-end, trabalho com Angular 17 e React JS para desenvolver interfaces modernas e intuitivas. No back-end, utilizo Node JS e Java com frameworks como Spring Boot ou Quarkus, garantindo que tudo funcione de forma eficiente e confiável. Na área de dados, utilizo Python, Airflow, Astro, Docker e AWS para construir ETLs, pipelines e datalakes. Estou sempre em constante aprendizado, buscando conhecer novas tecnologias e aprimorar minhas habilidades. Meu objetivo é entregar projetos que gerem impacto positivo tanto para as pessoas quanto para os negócios.
              </p>
            </motion.div>

            {/* Experiência profissional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-content mb-4 text-center">
                Experiência profissional
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto mb-8" />
              <div className="text-content/80 max-w-3xl mx-auto space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Polícia Federal do Brasil</h3>
                  <p className="text-sm">Desenvolvedor Python • 2023 - 2024</p>
                  <p>
                    Atuei em projetos de automação de dados e construção de relatórios estratégicos. Foco em segurança, performance e confiabilidade dos sistemas desenvolvidos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Projetos Pessoais e Freelancers</h3>
                  <p className="text-sm">2022 - Presente</p>
                  <p>
                    Desenvolvimento de dashboards, landing pages, integrações com back-end, uso de Firebase e autenticação. Experiência com React, Next.js, TailwindCSS, Zustand, ShadcnUI, e integração de dados em projetos com arquitetura moderna.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
