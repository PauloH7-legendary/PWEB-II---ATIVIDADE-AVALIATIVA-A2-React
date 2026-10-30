import InfoPage from "../components/InfoPage";

function Contato() {
  const contatos = [
    {
      title: "E-mail",
      description:
        "Entre em contato pelo e-mail atendimento@connectflight.com.br para tirar suas dúvidas.",
      illustration: "email",
    },
    {
      title: "Atendimento",
      description:
        "Nossa equipe está pronta para ajudar você a planejar sua próxima viagem.",
      illustration: "support",
    },
    {
      title: "Planeje sua viagem",
      description:
        "Conte com a ConnectFlight para encontrar opções de viagens nacionais e internacionais.",
      illustration: "planning",
    },
  ];

  return (
    <InfoPage
      title="Entre em contato"
      intro="Tem dúvidas sobre destinos ou pacotes de viagem? Estamos aqui para ajudar você a planejar sua próxima experiência."
      items={contatos}
    />
  );
}

export default Contato;