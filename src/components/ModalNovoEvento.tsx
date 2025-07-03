import { useState } from "react";

interface Props {
  onClose: () => void;
  onCriar: (evento: {
    nome: string;
    local: string;
    data: string;
    descricao: string;
  }) => void;
}

export default function ModalNovoEvento({ onClose, onCriar }: Props) {
  const [nome, setNome] = useState("");
  const [local, setLocal] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome && local && data && descricao) {
      onCriar({ nome, local, data, descricao });
      onClose();
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2>Criar Novo Evento</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <label>
            Local:
            <input value={local} onChange={(e) => setLocal(e.target.value)} />
          </label>
          <label>
            Data:
            <input value={data} onChange={(e) => setData(e.target.value)} />
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
