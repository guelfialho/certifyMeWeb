// Interface básica do evento
export interface Evento {
  id: string;
  titulo: string;
  descricao?: string;
  data: string;
  local: string;
}

export interface Participante {
  nome: string;
  email: string;
  cpf: string;
}

export interface BuscarEvento extends Evento {
  participantes: Participante[];
}

export interface ListarEventosResponse {
  sucesso: boolean;
  eventos: BuscarEvento[];
}
