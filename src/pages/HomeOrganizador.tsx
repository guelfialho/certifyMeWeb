import { useEffect, useState } from "react";
import { useEventos } from "../hooks/useEventos";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import CartaoEvento from "../components/CartaoEvento";
import ModalNovoEvento from "../components/ModalNovoEvento";

export default function HomeOrganizador() {
  const { eventos, carregarEventos } = useEventos();
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    carregarEventos();
  }, [carregarEventos]);

  return (
    <>
      <Cabecalho />
      <main className="container">
        <h2>Meus Eventos</h2>
        <button onClick={() => setMostrarModal(true)}>
          + Adicionar Evento
        </button>
        {eventos.map((evento) => (
          <CartaoEvento key={evento.id} evento={evento} />
        ))}
        {mostrarModal && (
          <ModalNovoEvento
            onClose={() => setMostrarModal(false)}
            onCriar={() => setMostrarModal(false)}
          />
        )}
      </main>
      <Rodape />
    </>
  );
}
