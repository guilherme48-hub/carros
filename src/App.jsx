import iconsedans from "./assets/icon-sedans.svg"
import iconsuvs from "./assets/icon-suvs.svg"
import iconluxury from "./assets/icon-luxury.svg"

export default function App () {
  return (
    <main className=" mim-h-svh bg-offwhitebg py-20 px-6">
      <section>
        <div className="bg-orange p-12 rounded-t-lg" >
          <img src={iconsedans} alt="icone dos carros sedan" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-lexend mb-7">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a  className="font-lexend"href="https://www.webmotors.com.br/sedans" target="_blank">veja mais</a>
        </div>

        <div className="bg-green p-12">
        <img src={iconsuvs} alt="icone dos carros suvs" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Suvs</h2>
          <p className="font-lexend mb-7">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road</p>
          <a href="https://www.webmotors.com.br/suvs" target="_blank">veja mais</a>
        </div>

        <div className="bg-dark-green p-12 rounded-b-lg">
        <img src={iconluxury} alt="icone dos carros luxury" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxury</h2>
          <p className="font-lexend mb-7">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-shoulders" href="https://www.webmotors.com.br/carros-novos/estoque/lamborghini?tipoveiculo=carros-novos&marca1=LAMBORGHINI" target="_blank">veja mais</a>
        </div>
      </section>
    </main>
  )
}