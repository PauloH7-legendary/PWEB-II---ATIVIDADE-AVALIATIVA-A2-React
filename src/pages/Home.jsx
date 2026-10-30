import ilustracaoViagem from "../assets/ilustracaoViagem.png";
import "./Home.css";


function Home() {
  return (
    <main className="home-page">
      <section className="home-content">
        <div className="travel-illustration">
  <img
    src={ilustracaoViagem}
    alt="Ilustração de viagem com globo, marcadores de localização e uma viajante"
  />
        </div>

        <h1 className="home-title">
          O seu próximo <span>destino</span> pode estar aqui...
        </h1>

        <p className="home-subtitle">
          Aqui você encontra uma seleção de{" "}

       <strong>pacotes completos</strong> para as suas férias!

</p>

<p className="home-description">

        No <strong>ConnectFlight</strong> você encontra pacotes de viagens
        nacionais e internacionais que incluem: passagens aéreas, hotéis,
        café da manhã, e até seguro viagem com{" "}
       
       <strong>preços arrasadores!</strong>

</p>

<p className="home-note">
  Se você ainda não tem um destino definido, confira nossa seção de
  ofertas.
</p>
      </section>
    </main>
  );
}

export default Home;