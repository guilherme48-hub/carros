import iconsuvs from "../assets/icon-suvs.svg"

export default function Suvs() {
    return (
        <section className="bg-green p-12">
        <img src={iconsuvs} alt="icone dos carros suvs" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Suvs</h2>
          <p className="font-lexend mb-7 text-offwhitebg lg-mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road</p>
          <a  className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 borde-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/suvs" target="_blank">veja mais</a>
        </section>
    )
}