export interface CadastroRequest {
  nome: string;
  email: string;
  senha: string;
}

export interface CadastroResponse {
  sucesso: boolean;
  mensagem: string;
  usuario?: {
    id: string;
    nome: string;
    email: string;
  };
}
