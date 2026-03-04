# 🍕 WebCars - Marketplace Automotivo Fullstack

![React Js](https://img.shields.io/badge/React_JS-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=firebase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white)

> Ecossistema completo para compra e venda de veículos, focado em experiência do usuário, persistência de dados em nuvem e arquitetura escalável de front-end.

---

## 💻 Sobre o Projeto

Este projeto simula um cenário real de Marketplace Automotivo. A aplicação permite que usuários naveguem por um catálogo dinâmico de veículos, visualizem detalhes técnicos e entrem em contato com vendedores. Para o anunciante, o sistema oferece um dashboard completo para gestão de estoque e anúncios em tempo real.

O foco principal foi aplicar Clean Code, gerenciamento de estado global otimizado e validações rigorosas para garantir a integridade dos dados e uma jornada de compra fluida.

## 🚀 Diferenciais do Projeto

Para elevar o nível de escalabilidade e confiabilidade, foram implementados os seguintes padrões

### ⚡Gestão de Mídia com Firebase Storage

Otimização do fluxo de imagens para garantir que o catálogo seja leve e performático.

- **Upload Assíncrono:** Processamento de múltiplas imagens simultâneas com feedback em tempo real para o usuário.
- **Alta Disponibilidade:** Imagens servidas via CDN do Firebase, garantindo baixa latência na visualização dos anúncios.

### 🛡️ Segurança e Integridade de Dados

- **Validação com Zod:** Implementação de schemas rigorosos em todos os formulários, impedindo o envio de dados inválidos para o banco de dados.
- **Proteção de Recursos (Auth Guards):** Validação de propriedade de recursos, garantindo que apenas o criador de um anúncio tenha permissão para editá-lo ou excluí-lo.
- **Autenticação Híbrida:** Integração segura com Firebase Auth, suportando login social (Google) e tradicional (E-mail/Senha).

### 📊 Arquitetura e Estado Global

- **Context API:** Centralização da lógica de autenticação e dados de anúncios, evitando o prop drilling e melhorando a manutenção do código.
- **Custom Hooks:** Abstração de lógicas complexas para componentes reutilizáveis e código mais limpo.

### 🎨 UI/UX Responsiva (Mobile-First)

- Interface construída com Tailwind CSS, garantindo que a experiência de compra seja idêntica e fluida tanto em dispositivos móveis quanto em desktops.

---

## ⚙️ Funcionalidades

### 🔐 Autenticação e Perfil

- [x] Login e Registro via **Google Social Auth**.
- [x] Login tradicional com e-mail e senha.
- [x] Persistência de sessão para usuários logados.

### 📦 Gestão de Anúncios (Dashboard)

- [x] Cadastro de veículos com dados técnicos (KM, Ano, Modelo, Valor, Numero para contato, descrição).
- [x] Upload de múltiplas fotos via **Firebase Storage**.
- [x] **CRUD Completo:** O usuário pode criar, visualizar e deletar seus próprios veículos.
- [x] Validação de campos obrigatórios e tipos de arquivos com **Zod**.

### 🛒 Catálogo e Negociação

- [x] Listagem dinâmica de veículos cadastrados na plataforma.
- [x] Página de detalhes com galeria de fotos e especificações completas.
- [x] Canal de contato direto com o proprietário do veículo.

---

## 🛠 Tecnologias Utilizadas

- **[React + Vite](https://vite.dev/guide/)**
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática.
- **[Firebase](https://console.firebase.google.com/)** Login e Database.
- **[Zod](https://zod.dev/)** - Validação de Schemas.

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado (v18 ou superior).
- Uma conta no Firebase para configuração das chaves de API.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone (https://github.com/SeuUsuario/WebCars)
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente:**
   **Crie um arquivo .env.local na raiz e adicione suas credenciais do Firebase**
   ```Snippet de código
   VITE_FIREBASE_API_KEY=sua_key
   VITE_FIREBASE_AUTH_DOMAIN=seu_dominio
   VITE_FIREBASE_PROJECT_ID=seu_id
   VITE_FIREBASE_STORAGE_BUCKET=seu_bucket
   ```
4. **Rode o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

- Desenvolvido por Judson Rodrigues Ciribelli Filho 🚀

---
