

function Slide01() {
	return (
		<>
			<div className="flex justify-center">
				<div className="container grid grid-cols-2 text-[var(--cor-texto-principal)]">
					<div className="flex flex-col items-center justify-center gap-4 py-4">
						<h2 className="text-5xl font-bold">Sua fome não pode esperar!</h2>
						<p className="text-xl ">Peça pelo FasGen e receba seus pratos favoritos em minutos!</p>

						<div className="flex justify-around gap-4">
							<div className="flex justify-around gap-4">
								{/* <ModalProduto /> */}
							</div>
						</div>
					</div>

					<div className="flex justify-center">
						<img
							src="https://ik.imagekit.io/dmzx7is6a/Take%20Away-amico.png?updatedAt=1751488182043"
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
