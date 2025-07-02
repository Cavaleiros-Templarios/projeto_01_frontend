

function Slide01() {
	return (
		<>
			<div className="flex justify-center">
				<div className="container grid grid-cols-2 text-[var(--cor-texto-principal)]">
					<div className="flex flex-col items-center justify-center gap-4 py-4">
						<h2 className="text-5xl font-bold">O que você quer comer agora?</h2>
						<p className="text-xl ">Encontre, peça e receba com a entrega mais rápida da cidade.</p>

						<div className="flex justify-around gap-4">
							<div className="flex justify-around gap-4">
								{/* <ModalProduto /> */}
							</div>
						</div>
					</div>

					<div className="flex justify-center">
						<img
							src="https://ik.imagekit.io/dmzx7is6a/Order%20food-pana%20(1).png?updatedAt=1751485869840"
							alt="Imagem Página Home"
							className="w-2/3"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Slide01
