import { useParams } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

export default function ConfirmarPresenca() {
  const { id } = useParams();

  return (
    <>
      <Cabecalho />
      <main className="container">
        <h2>Confirmar presença no evento #{id}</h2>
        <form>
          <label>Nome completo</label>
          <input type="text" placeholder="Seu nome" required />

          <label>CPF</label>
          <input type="text" placeholder="000.000.000-00" required />

          <label>Email</label>
          <input type="email" placeholder="seu@email.com" required />

          <button type="submit">Confirmar presença</button>
        </form>
      </main>
      <Rodape />
    </>
  );
}
