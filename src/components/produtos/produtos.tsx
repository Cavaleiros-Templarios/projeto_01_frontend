import React from 'react';

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

const produtosMocados: Produto[] = [
  {
    id: 1,
    nome: 'Pizza Calabresa',
    descricao: 'Deliciosa pizza de calabresa com queijo e orégano.',
    preco: 45.90,
    imagem: 'https://cdn.pixabay.com/photo/2023/05/08/13/40/pizza-7978641_960_720.jpg',
  },
  {
    id: 2,
    nome: 'Hambúrguer Artesanal',
    descricao: 'Pão brioche, blend de carne, queijo, bacon e molho especial.',
    preco: 32.50,
    imagem: 'https://cdn.pixabay.com/photo/2022/05/12/17/05/hamburger-7191898_960_720.jpg',
  },
  {
    id: 3,
    nome: 'Sushi Combinado (20 peças)',
    descricao: 'Seleção variada de niguiris, sashimis e rolls frescos.',
    preco: 78.00,
    imagem: 'https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_960_720.jpg',
  },
  {
    id: 4,
    nome: 'Salada Caesar',
    descricao: 'Alface americana, frango grelhado, croutons, parmesão e molho Caesar.',
    preco: 28.00,
    imagem: 'https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_960_720.jpg',
  },
  {
    id: 5,
    nome: 'Açaí com Granola e Frutas',
    descricao: 'Açaí puro com granola crocante, banana e morango.',
    preco: 22.00,
    imagem: 'https://cdn.pixabay.com/photo/2015/09/06/00/47/fruits-926734_960_720.jpg',
  },
  {
    id: 6,
    nome: 'Lasanha à Bolonhesa',
    descricao: 'Camadas de massa, molho bolonhesa e queijo gratinado.',
    preco: 38.00,
    imagem: 'https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_960_720.jpg',
  },
  {
    id: 7,
    nome: 'Tacos Mexicanos',
    descricao: 'Tortillas de milho recheadas com carne, queijo e vegetais.',
    preco: 29.90,
    imagem: 'https://cdn.pixabay.com/photo/2023/01/31/21/52/tacos-7759107_960_720.jpg',
  },
  {
    id: 8,
    nome: 'Brownie com Sorvete',
    descricao: 'Brownie quente com uma bola de sorvete de creme.',
    preco: 18.00,
    imagem: 'https://cdn.pixabay.com/photo/2020/07/26/12/16/brownie-5439382_960_720.jpg',
  },
];

function Produtos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Nossos Produtos</h2>
      <p className="text-center text-gray-600 mb-8">Descubra uma variedade de pratos deliciosos feitos com os melhores ingredientes.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtosMocados.map((produto) => (
          <div key={produto.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-md flex flex-col">
            <img src={produto.imagem} alt={produto.nome} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{produto.nome}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{produto.descricao}</p>
              <div className="flex flex-col items-start mt-auto pt-3">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 w-full mb-2">
                  Adicionar
                </button>
                <span className="text-2xl font-bold text-orange-600">R$ {produto.preco.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;