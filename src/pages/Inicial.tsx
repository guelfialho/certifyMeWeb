import { Link } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

export default function Inicial() {
  return (
    <>
      <Cabecalho />
      <main className="container landing">
        <section className="hero">
          <h1>
            Bem-vindo ao <span className="destaque">CertifyMe</span>
          </h1>
          <p>
            Simplifique a gestão de eventos acadêmicos.
            <br />
            Crie eventos, confirme presenças e emita certificados com
            facilidade.
          </p>
          <Link to="/login">
            <button className="cta">Começar agora</button>
          </Link>
        </section>
      </main>
      <Rodape />
    </>
  );
}
