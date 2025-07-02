import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"


function Footer() {
  return (
    <div className="
        bg-orange-300
        py-6
        md:py-9
        lg:py-12
        text-center">
        <p className="
        text-sm
        text-gray-600">
        © 2025 Feito por Cavaleiros Templários SA. Todos os direitos reservados.
        </p>
        <div className="
            flex 
            justify-center 
            gap-6 mt-4">
            <a href="" target="_blank"> 
              <LinkedinLogo size={32} color="#01398e" /> 
            </a>
            <a href="https://github.com/Cavaleiros-Templarios/" target="_blank">
              <GithubLogo size={32} color="#01398e" />
            </a>
            <a href="" target="_blank">
              <InstagramLogo size={32} color="#01398e" />
            </a>
        </div>
    </div>
  )
}

export default Footer