import iconsedans from "./assets/icon-sedans.svg"
import iconsuvs from "./assets/icon-suvs.svg"
import iconluxury from "./assets/icon-luxury.svg"

export default function App () {
  return (
    <main className=" min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center">

      <section className="lg:flex max-w-[920px]">

        <div className="bg-orange p-12 max-lg rounded-t-lg lg:rounded-l-lg" >

          <img src={iconsedans} alt="icone dos carros sedan" className="mb-7"/>

          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>

          <p className="font-lexend mb-7 text-offwhitebg lg-mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>

          <a  className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange border-2 borde-offwhitebg hover:bg-orange hover:text-offwhitebg "href="https://www.webmotors.com.br/sedans" target="_blank">veja mais</a>

        </div>

        <div className="bg-green p-12">

        <img src={iconsuvs} alt="icone dos carros suvs" className="mb-7" />

          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Suvs</h2>

          <p className="font-lexend mb-7 text-offwhitebg lg-mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road</p>

          <a  className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 borde-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/suvs" target="_blank">veja mais</a>

        </div>

        <div className="bg-dark-green p-12 max-lg rounded-b-lg lg:rounded">

        <img src={iconluxury} alt="icone dos carros luxury" className="mb-7"/>

          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxury</h2>

          <p className="font-lexend mb-7 text-offwhitebg lg-mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>

          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green  border-2 borde-offwhitebg hover:bg-dark-green hover:text-offwhitebg" href="https://www.webmotors.com.br/carros-novos/estoque/lamborghini?tipoveiculo=carros-novos&marca1=LAMBORGHINI" target="_blank">veja mais</a>

        </div>
      </section>
    </main>
  )
}