import InfoPage from "../components/InfoPage";

function Ofertas() {
  const ofertas = [
    {
      title: "Viagens nacionais",
      description:
        "Descubra lugares incríveis no Brasil com opções para diferentes estilos de viagem.",
      illustration: "national",
    },
    {
      title: "Viagens internacionais",
      description:
        "Explore novos países, culturas e experiências com pacotes especiais.",
      illustration: "international",
    },
    {
      title: "Pacotes completos",
      description:
        "Planeje sua viagem com opções que podem incluir passagens, hospedagem e outros serviços.",
      illustration: "package",
    },
  ];

  return (
    <InfoPage
      title="Ofertas especiais"
      intro="Encontre oportunidades para realizar sua próxima viagem e descubra novas possibilidades com a ConnectFlight."
      items={ofertas}
    />
  );
}

export default Ofertas;