import InfoPage from "../components/InfoPage";

import rioImagem from "../assets/RiodeJaneiro.jpg";
import gramadoImagem from "../assets/Gramado.jpg";
import parisImagem from "../assets/Paris.jpg";

function Destinos() {
  const destinos = [
    {
      title: "Rio de Janeiro",
      description:
        "Descubra praias, paisagens famosas e a energia de uma das cidades mais conhecidas do Brasil.",
      image: rioImagem,
      imageAlt: "Cristo Redentor no Rio de Janeiro",
    },
    {
      title: "Gramado",
      description:
        "Aproveite o clima aconchegante, a gastronomia e os encantos da Serra Gaúcha.",
      image: gramadoImagem,
      imageAlt: "Rua turística de Gramado",
    },
    {
      title: "Paris",
      description:
        "Conheça monumentos históricos, museus e toda a beleza da capital francesa.",
      image: parisImagem,
      imageAlt: "Torre Eiffel em Paris",
    },
  ];

  return (
    <InfoPage
      title="Explore nossos destinos"
      intro="Encontre o lugar ideal para sua próxima aventura, desde viagens nacionais até experiências internacionais."
      items={destinos}
    />
  );
}

export default Destinos;