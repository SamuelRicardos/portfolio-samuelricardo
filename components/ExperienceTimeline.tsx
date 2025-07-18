'use client'
import { FaPython, FaReact, FaJava } from 'react-icons/fa'
import {
    SiDjango, SiJquery, SiPostgresql, SiDocker, SiNextdotjs, SiTailwindcss, SiFigma, SiVite, SiAngular,
    SiPrimeng, SiQuarkus, SiJunit5, SiSonarqube, SiGit
} from 'react-icons/si'

const experiences = [
    {
        role: 'Freelancer Frontend',
        company: 'Projetos freelance',
        period: 'Mar 2025 - Até o momento',
        description: `
- Criação de landing pages modernas e sistemas de cadastro para microempresas.
- Foco em responsividade, performance e acessibilidade em todas as entregas.
- Utilizo Next.js com renderização otimizada para garantir um bom rankeamento no Google (SEO).
- TailwindCSS para estilização eficiente e consistente.
- Vite para desenvolvimento rápido e com hot reload inteligente.
- Figma para prototipação de telas e aplicação de design centrado no usuário (UX/UI).
- Utilização de Git para controle de versão e GitHub para armazenamento e revisão de código.
    `.trim(),
        tech: [SiNextdotjs, SiTailwindcss, FaReact, SiVite, SiFigma],
    },
    {
        role: 'Desenvolvedor Fullstack',
        company: 'voluntarios.com.br',
        period: 'Abr 2025 - Jul 2025',
        description: `
- Atuei como desenvolvedor voluntário no projeto social voluntarios.com.br.
- Implementei funcionalidades no back-end utilizando Django com banco de dados PostgreSQL.
- Contribuí para a melhoria da experiência do usuário no front-end com jQuery e HTML/CSS.
- Colaborei com a equipe em ambiente Dockerizado para padronizar o ambiente de desenvolvimento.
- Utilização de Git para controle de versão e GitHub para colaboração em equipe e revisão de código.
    `.trim(),
        tech: [FaPython, SiDjango, SiJquery, SiPostgresql, SiDocker],
    },
    {
        role: 'Estagiário em Desenvolvimento de Software',
        company: 'Polícia Federal',
        period: 'Abr 2024 - Dez 2024',
        description: `
- Transformei ideias em soluções visuais com foco em performance e escalabilidade.
- Aprimorei a experiência do usuário e otimizei entregas de projetos em ambientes ágeis.
- Desenvolvimento de interfaces responsivas e dinâmicas com Angular e PrimeNG.
- Integração eficiente com APIs REST para comunicação com o back-end.
- Criação de endpoints robustos com Java utilizando o framework Quarkus.
- Garantia de qualidade contínua do código com SonarQube, reduzindo débitos técnicos.
- Implementação de testes unitários com JUnit onde alcancei a meta anual de 70% de cobertura de um back-end robusto.
- Colaboração em squads ágeis utilizando metodologias Scrum e Kanban.
- Prototipação de telas e fluxos de usuário com Figma para alinhamento entre times.
- Documentação técnica e Git para controle de versão e GitHub para colaboração em equipe e revisão de código.
    `.trim(),
        tech: [SiAngular, SiPrimeng, FaJava, SiQuarkus, SiJunit5, SiSonarqube, SiGit, SiFigma],
    },
]

export default function ExperienceTimeline() {
    return (
        <section className="py-32 relative bg-background" id="experience">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-content mb-16">
                    Experiência profissional
                </h2>

                <div className="relative border-l border-white/10">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-10 ml-4">
                            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 border-2 border-white"></div>
                            <h3 className="text-xl font-bold text-content">{exp.role}</h3>
                            <span className="text-content/60 text-sm">
                                {exp.company} • {exp.period}
                            </span>
                            <div className="mt-2 text-content/80">
                                {exp.description.split('\n').map((line, idx) => (
                                    <li key={idx} className="mb-1 list-disc list-inside">
                                        {line.replace(/^- /, '')}
                                    </li>
                                ))}
                            </div>
                            <div className="flex gap-2 mt-3">
                                {exp.tech.map((Icon, i) => (
                                    <Icon key={i} className="w-5 h-5 text-content/60 hover:text-primary transition-colors" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
