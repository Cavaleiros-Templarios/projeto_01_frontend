import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="w-full py-4 bg-white shadow-md">
            <div className="container flex flex-wrap items-center justify-between mx-auto px-4">
                <Link to="/home" className="flex items-center">
                    <img
                        src="https://i.imgur.com/KD8nz0z.png"
                        alt="Logo"
                        className="h-12 w-auto"
                    />
                </Link>
                <div className="flex items-center justify-center w-full md:w-2/5 my-3 md:my-0">
                    <form className="flex items-center justify-center w-full">
                        <input
                            className="w-full px-4 py-2 bg-gray-100 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            type="search"
                            placeholder="Buscar pratos, restaurantes..."
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[var(--cor-primaria)] text-white rounded-r-lg hover:bg-[var(--cor-primaria-hover)] transition-colors duration-300"
                        >
                            <MagnifyingGlassIcon size={20} />
                        </button>
                    </form>
                </div>
                <div className="flex items-center gap-4 md:gap-6 text-orange-500">
                    <Link to="/produtos" className="hover:text-orange-700 transition-colors duration-300">
                        Produtos
                    </Link>
                    <Link to="/categorias" className="hover:text-orange-700 transition-colors duration-300">
                        Categorias
                    </Link>
                    <Link to="/ofertas" className="hover:text-orange-700 transition-colors duration-300">
                        Ofertas
                    </Link>
                    {/* <Link to="/meus-pedidos" className="hover:text-orange-700 transition-colors duration-300">
                        Meus Pedidos
                    </Link> */}
                    <Link to="/sobre" className="hover:text-orange-700 transition-colors duration-300">
                        Sobre
                    </Link>
                    <Link to="/perfil" className="hover:text-orange-700 transition-colors duration-300">
                        <UserIcon size={24} />
                    </Link>
                    <Link to="/carrinho" className="hover:text-orange-700 transition-colors duration-300">
                        <ShoppingCartIcon size={24} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar



