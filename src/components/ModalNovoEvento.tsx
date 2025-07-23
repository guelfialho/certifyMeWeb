import { useState } from "react";
import { useEventos } from "../hooks/useEventos";
import type { NovoEvento } from "../types/evento";

interface Props {
  onClose: () => void;
  onCriar: () => void;
}

export default function ModalNovoEvento({ onClose, onCriar }: Props) {
  const { criarNovoEvento } = useEventos();

  const [titulo, setTitulo] = useState("");
  const [local, setLocal] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!titulo || !local || !data || !descricao) {
      alert("Preencha todos os campos");
      return;
    }

    const novoEvento: NovoEvento = {
      titulo,
      local,
      data,
      descricao,
    };

    try {
      await criarNovoEvento(novoEvento);
      onCriar();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2>Criar Novo Evento</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </label>
          <label>
            Local:
            <input value={local} onChange={(e) => setLocal(e.target.value)} />
          </label>
          <label>
            Data:
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </label>
          <label>
            Descrição:
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </label>
          <div className="botoes">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Criar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
