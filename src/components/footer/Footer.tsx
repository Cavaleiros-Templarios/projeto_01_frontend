import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"


function Footer() {
  return (
    <div className="
        bg-[var(--cor-texto-claro)]
        py-6
        md:py-9
        lg:py-12
        text-center 
        shadow-md">
        <p className="
        text-sm
        text-gray-600">
        © 2025 Feito por Cavaleiros Templários SA. Todos os direitos reservados.
        </p>
        <div className="
            flex 
            justify-center 
            gap-6 mt-4
            ">
            <a href="" target="_blank"> 
              <LinkedinLogo size={32} color="#f97316" /> 
            </a>
            <a href="https://github.com/Cavaleiros-Templarios/" target="_blank">
              <GithubLogo size={32} color="#f97316" />
            </a>
        </div>
    </div>
  )
}

export default Footer