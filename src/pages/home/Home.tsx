import SlideMain from "../../components/slide/slideMain"
import Produtos from "../../components/produtos/produtos"; // <--- Importe o componente Produtos aqui. Ajuste o caminho conforme a localização do seu arquivo Produtos.tsx

function Home() {
  return (
    <>
            <div>
                <SlideMain />
            </div>
          
            {/* Onde você tinha <ListarProdutos />, agora você pode usar: */}
            <Produtos /> {/* <--- Adicione o componente Produtos aqui para renderizar os produtos */}
        </>
  )
}

export default Home



