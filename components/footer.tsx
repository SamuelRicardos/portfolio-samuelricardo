import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedInIcon } from "./social-icons";



export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6
         lg:px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Objetivo</h3>
                        <p className="text-gray-400">
                            Criar experiências digitais modernas com tecnologia atual e design de qualidade.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#projects" className="text-gray-400
                         hover:text-white transition-colors">Projetos</a></li>
                            <li><a href="#about" className="text-gray-400
                         hover:text-white transition-colors">Sobre mim</a></li>
                            <li><a href="#contact" className="text-gray-400
                         hover:text-white transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Redes e contato</h3>
                        <ul className="flex space-x-4">
                            <GithubIcon className="text-gray-400 h-6 w-6
                        hover:text-white transition-colors"/>
                            <LinkedInIcon className="text-gray-400 h-6 w-6
                        hover:text-white transition-colors"/>
                            <EnvelopeIcon className="text-gray-400 h-6 w-6
                        hover:text-white transition-colors"/>


                        </ul>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                        <p className="text-gray-400">
                            &copy; {new Date().getFullYear()} Samuel Ricardo
                        </p>
                    </div>
                </div>

            </div>

        </footer>
    )
}