import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import CartaoEvento from "../components/CartaoEvento";
import ModalNovoEvento from "../components/ModalNovoEvento";
import { useState } from "react";
import { useEventos } from "../context/EventosContext";

export default function HomeOrganizador() {
  const { eventos, adicionarEvento } = useEventos();
  const [mostrarModal, setMostrarModal] = useState(false);

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
            onCriar={(novo) => {
              adicionarEvento(novo);
              setMostrarModal(false);
            }}
          />
        )}
      </main>
      <Rodape />
    </>
  );
}
