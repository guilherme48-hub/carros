import iconsedans from "./assets/icon-sedans.svg"
import iconsuvs from "./assets/icon-suvs.svg"
import iconluxury from "./assets/icon-luxury.svg"

export default function App () {
  return (
    <main>
      <section>
        <div className="bg-orange">
          <img src={iconsedans} alt="icone dos carros sedan" />
          <h2 className="text-3xl">SEDANS</h2>
          <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans">veja mais</a>
        </div>

        <div className="bg-green">
        <img src={iconsuvs} alt="icone dos carros suvs" />
          <h2>SUVS</h2>
          <p>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road</p>
          <a href="https://www.webmotors.com.br/suvs">veja mais</a>
        </div>

        <div className="bg-dark-green">
        <img src={iconluxury} alt="icone dos carros luxury" />
          <h2>LUXURY</h2>
          <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-novos/estoque/lamborghini?tipoveiculo=carros-novos&marca1=LAMBORGHINI">veja mais</a>
        </div>
      </section>
    </main>
  )
}