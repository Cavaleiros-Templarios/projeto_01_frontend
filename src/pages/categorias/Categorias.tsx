
interface Categoria {
  id: number;
  nome: string;
  imagem: string;
}

const categoriasMocadas: Categoria[] = [
  {
    id: 1,
    nome: 'Pizzas',
    imagem: 'https://ik.imagekit.io/v5ijt4s2j/projetos/Pizza%20maker-amico.png?updatedAt=1751563291527',
  },
  {
    id: 2,
    nome: 'Hambúrgueres',
    imagem: 'https://ik.imagekit.io/v5ijt4s2j/projetos/Hamburger-bro.png?updatedAt=1751563291719', 
  },
  {
    id: 3,
    nome: 'Japonesa',
    imagem: 'https://ik.imagekit.io/v5ijt4s2j/projetos/Sushi%20cook-bro.png?updatedAt=1751563291577', 
  },
  {
    id: 4,
    nome: 'Saudável',
    imagem: 'https://ik.imagekit.io/v5ijt4s2j/projetos/fruit%20salad-pana.png?updatedAt=1751563291749', 
  },
  {
    id: 5,
    nome: 'Doces',
    imagem: 'https://ik.imagekit.io/v5ijt4s2j/projetos/red%20velvet%20cake-pana.png?updatedAt=1751563291614', 
  },
  {
    id: 6,
    nome: 'Bebidas',
    imagem: 'https://ik.imagekit.io/v5ijt4s2j/projetos/Mulled%20wine-pana.png?updatedAt=1751563291626', 
  },
  {
    id: 7,
    nome: 'Massas',
    imagem: 'https://ik.imagekit.io/v5ijt4s2j/projetos/Pasta-pana.png?updatedAt=1751563291537', 
  },
  {
    id: 8,
    nome: 'Mexicana',
    imagem: 'https://ik.imagekit.io/v5ijt4s2j/projetos/Eating%20healthy%20food-rafiki.png?updatedAt=1751563291539', 
  },
];

function Categorias() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-2">Explore  Nossas Categorias</h2>
      <p className="text-center text-gray-600 mb-8">Encontre seus pratos favoritos por tipo de culinária ou ocasião.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {categoriasMocadas.map((categoria) => (
          <div key={categoria.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
            <img src={categoria.imagem} alt={categoria.nome} className="w-full h-42 object-cover lg:w-full h-42 h-50" />
            <div className="p-3 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{categoria.nome}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;