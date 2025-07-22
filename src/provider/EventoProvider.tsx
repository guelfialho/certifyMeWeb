import { useEffect, useState } from "react";
import api from "../services/api";
import type { BuscarEvento, ListarEventosResponse } from "../types/evento";
import { EventosContext } from "../context/EventosContext";

interface Props {
  children: React.ReactNode;
}

export function EventosProvider({ children }: Props) {
  const [eventos, setEventos] = useState<BuscarEvento[]>([]);

  useEffect(() => {
    async function carregarEventos() {
      try {
        const resposta = await api.get<ListarEventosResponse>(
          "/eventos/organizador"
        );
        if (resposta.data.sucesso) {
          setEventos(resposta.data.eventos);
        } else {
          console.error("Erro ao carregar eventos");
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }

    carregarEventos();
  }, []);

  return (
    <EventosContext.Provider value={{ eventos }}>
      {children}
    </EventosContext.Provider>
  );
}
