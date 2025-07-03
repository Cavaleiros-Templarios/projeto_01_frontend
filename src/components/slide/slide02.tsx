function Slide02() {
	return (
		<>
			<div className="flex justify-center px-4 py-8 md:py-16">
				<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-[var(--cor-texto-principal)]">
					<div className="flex flex-col items-center md:items-start justify-center text-center md:text-left gap-4">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Sua fome não pode esperar!</h2>
						<p className="text-base sm:text-lg md:text-xl">Peça pelo FasGen e receba seus pratos favoritos em minutos!</p>

						<div className="flex justify-around gap-4 w-full md:w-auto">
							<div className="flex justify-around gap-4">
								{/* <ModalProduto /> */}
							</div>
						</div>
					</div>

					<div className="flex justify-center">
						<img
							src="https://ik.imagekit.io/dmzx7is6a/Take%20Away-amico%20(1).png?updatedAt=1751551137564"
							alt="Imagem Página Home"
							className="w-full max-w-[70%] sm:max-w-[60%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Slide02