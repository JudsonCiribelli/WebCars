🚗 WebCars - Marketplace Automotivo Fullstack
Status do Projeto: Concluído 🚀

Este projeto é uma plataforma robusta de compra e venda de veículos desenvolvida para simular a experiência completa de um ecossistema de marketplace. A aplicação une uma interface de alta performance com a complexidade de gestão de dados em tempo real, garantindo segurança e fluidez tanto para compradores quanto para vendedores.

🌊 Fluxo da Aplicação (User Journey)
O sistema foi arquitetado para guiar o usuário através de três pilares principais:

Exploração e Descoberta (Público):

Acesso ao catálogo dinâmico de veículos com carregamento otimizado.

Visualização detalhada de especificações técnicas e galeria de fotos.

Canal direto de contato com o anunciante via integração externa.

Identidade e Acesso (Autenticação):

Fluxo de login seguro utilizando Firebase Authentication.

Opções híbridas: Social Login (Google) ou autenticação tradicional (E-mail/Senha).

Proteção de rotas: Acesso ao painel de anúncios restrito a usuários autenticados.

Gestão de Inventário (Privado - Dashboard):

Create: Cadastro de veículos com formulários inteligentes e validação rigorosa.

Storage: Upload e processamento de múltiplas imagens via Firebase Storage.

Control: Painel administrativo para edição ou remoção de anúncios (CRUD) com verificação de propriedade do dado.

🛡️ Diferenciais Técnicos e Engenharia
Integridade com Zod: Implementação de schemas para validação de formulários em tempo real, prevenindo a entrada de dados inconsistentes no banco.

Segurança no Firebase: Regras de segurança granulares para garantir que apenas o proprietário de um anúncio possa editá-lo ou deletá-lo.

Estado Global com Context API: Gerenciamento eficiente de sessões de usuário e sincronização de dados de anúncios entre componentes sem "prop drilling".

Arquitetura Clean Code: Organização de pastas baseada em responsabilidades (Components, Pages, Services, Hooks, Contexts), facilitando a manutenção e escalabilidade.

TypeScript Estrito: Tipagem completa de ponta a ponta, reduzindo bugs em tempo de execução e melhorando o IntelliSense durante o desenvolvimento.

🎨 Interface e UX
Tailwind CSS: Design moderno e responsivo focado no conceito Mobile-First.

Feedback Visual: Estados de carregamento (Skeleton screens), notificações de sucesso/erro e tratamentos de formulário amigáveis.

⚙️ Como Executar o Projeto
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/webcars.git
Instale as dependências:

Bash
npm install
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz com suas credenciais do Firebase:

Snippet de código
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
Inicie a aplicação:

Bash
npm run dev
