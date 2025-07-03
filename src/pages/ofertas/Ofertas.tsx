import React from 'react';

interface Oferta {
  id: number;
  titulo: string;
  descricao: string;
  precoAntigo?: number; // Preço opcional para mostrar desconto
  precoNovo: number;
  imagem: string;
}

const ofertasMocadas: Oferta[] = [
  {
    id: 1,
    titulo: 'Pizza Grande em Dobro',
    descricao: 'Compre 1 pizza grande e leve a segunda grátis!',
    precoAntigo: 90.00,
    precoNovo: 45.00,
    imagem: 'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_960_720.jpg',
  },
  {
    id: 2,
    titulo: 'Combo Família Hambúrguer',
    descricao: '4 hambúrgueres, 2 batatas grandes e refrigerante 2L.',
    precoAntigo: 120.00,
    precoNovo: 89.90,
    imagem: 'https://cdn.pixabay.com/photo/2021/01/26/16/29/burguer-closeup-5952157_960_720.jpg', 
  },
  {
    id: 3,
    titulo: 'Sushi Rodizio - 20% OFF',
    descricao: 'Rodízio de sushi com desconto especial para o jantar.',
    precoAntigo: 100.00,
    precoNovo: 80.00,
    imagem: 'https://cdn.pixabay.com/photo/2021/07/31/17/14/sushi-6512533_960_720.jpg', 
  },
  {
    id: 4,
    titulo: 'Salada + Suco Natural',
    descricao: 'Qualquer salada do cardápio com suco natural a sua escolha.',
    precoAntigo: 40.00,
    precoNovo: 29.90,
    imagem: 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg', 
  },
  {
    id: 5,
    titulo: 'Sobremesa Grátis',
    descricao: 'Na compra de qualquer prato principal, ganhe uma sobremesa.',
    precoNovo: 0.00, 
    imagem: 'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg', 
  },
  {
    id: 6,
    titulo: 'Entrega Grátis em Pedidos Acima de R$50',
    descricao: 'Aproveite a entrega gratuita para pedidos a partir de R$50.',
    precoNovo: 0.00, 
    imagem: 'https://img.cdndsgni.com/preview/10013312.jpg', 
  },
];

function Ofertas() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-2">Ofertas Especiais</h2>
      <p className="text-center text-gray-600 mb-8">Aproveite nossos descontos e promoções imperdíveis!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {ofertasMocadas.map((oferta) => (
          <div key={oferta.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-md flex flex-col">
            <img src={oferta.imagem} alt={oferta.titulo} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{oferta.titulo}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{oferta.descricao}</p>
              <div className="flex flex-col items-start mt-auto pt-3">
                {oferta.precoAntigo && (
                  <span className="text-sm text-gray-500 line-through">De R$ {oferta.precoAntigo.toFixed(2)}</span>
                )}
                <span className="text-2xl font-bold text-red-600">Por R$ {oferta.precoNovo.toFixed(2)}</span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 w-full mt-3">
                  Ver Oferta
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ofertas;


