# CertifyMeWeb - Frontend

---

## Sobre o Projeto

**CertifyMeWeb** é o frontend de um sistema para gerenciamento de eventos desenvolvido como projeto final da disciplina **Sistemas Web** da **Universidade Federal da Bahia (UFBA)**.

Este sistema permite que organizadores criem eventos e compartilhem QR Codes para controle de presenças. Os participantes confirmam presença via QR Code, e os organizadores podem visualizar a lista de participantes para envio posterior dos certificados.

---

## Orientação

Projeto orientado pela professora:

**Laise Cavalcante Oliveira**

---

## Funcionalidades do Frontend

- Interface para login e cadastro de usuários
- Tela para visualização e gerenciamento de eventos pelo organizador
- Visualização do QR Code para confirmação de presença
- Página para confirmação de presença via QR Code (com formulário)
- Navegação protegida para páginas restritas a organizadores

---

## Tecnologias Utilizadas

- React.js com TypeScript
- React Router para roteamento
- Context API e Hooks para gerenciamento de estado
- Axios para comunicação com a API backend

---

## Como Rodar

1. Clone o repositório:

```bash
git clone https://github.com/guelfialho/certifyMeWeb.git
```

2. Instale as dependências:

```bash
npm install
# ou
yarn
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
# ou
yarn start
```

4. Acesse http://localhost:5173/ no navegador.

> ⚠️ É necessário ter o backend da API rodando para que o frontend funcione corretamente.

---

## Estrutura do Projeto

```
/src
  /components    # Componentes reutilizáveis
  /context       # Contextos React para estado global
  /hooks         # Hooks customizados
  /pages         # Páginas do aplicativo
  /provider      # Providers dos contextos
  /services      # Cliente API Axios configurado
  /types         # Tipagens TypeScript
```

---

## Contato

**Guél Fialho**
[https://github.com/guelfialho](https://github.com/guelfialho)

---

## Licença

MIT License

---

**CertifyMeWeb - Frontend** — Projeto final Sistemas Web - UFBA
Orientadora: Laise Cavalcante Oliveira
