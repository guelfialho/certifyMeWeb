// provider/EventoProvider.tsx
import { useEffect, useState, useCallback } from "react";
import api from "../services/api";
import type {
  BuscarEvento,
  CriarEventoResponse,
  ListarEventosResponse,
  NovoEvento,
} from "../types/evento";
import { EventosContext } from "../context/EventosContext";

interface Props {
  children: React.ReactNode;
}

export function EventosProvider({ children }: Props) {
  const [eventos, setEventos] = useState<BuscarEvento[]>([]);

  const carregarEventos = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    carregarEventos();
  }, [carregarEventos]);

  async function criarNovoEvento(novoEvento: NovoEvento) {
    const resposta = await api.post<CriarEventoResponse>(
      "/eventos",
      novoEvento
    );
    if (resposta.data.sucesso) {
      await carregarEventos();
    } else {
      throw new Error(resposta.data.mensagem);
    }
  }

  return (
    <EventosContext.Provider
      value={{ eventos, criarNovoEvento, carregarEventos }}
    >
      {children}
    </EventosContext.Provider>
  );
}
