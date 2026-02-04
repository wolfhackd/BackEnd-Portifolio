# 🚀 Backend do Portfólio de Desenvolvedor
API responsável por gerenciar os dados do meu portfólio de desenvolvedor, incluindo autenticação, projetos, desafios, tecnologias e integrações externas.
<br>

## 🧰 Stack Utilizada

<ul>
<li>Node.js</li>
<li>TypeScript</li>
<li>Fastify</li>
<li>Prisma ORM</li>
<li>PostgreSQL</li>
<li>JWT (Autenticação)</li>
<li>Swagger (Documentação da API)</li>
<li>GitHub OAuth</li>
</ul>

## Estrutura do projeto

O projeto está organizado da seguinte forma:

src/<br>
│<br>
├── modules/            # Módulos principais da aplicação<br>
│   ├── auth/           # Autenticação de usuários<br>
│   ├── category/       # Gerenciamento de categorias<br>
│   ├── challenge/      # Módulo de desafios<br>
│   ├── project/        # Módulo de projetos<br>
│   ├── technology/     # Módulo de tecnologias<br>
│   └── providers/      # Integrações e provedores externos<br>
│       └── github/     # Autenticação via GitHub<br>
│<br>
├── database/           # Configuração de conexão com o banco de dados<br>
│<br>
├── shared/             # Recursos compartilhados em toda a aplicação<br>
│   ├── cookie-service/ # Serviço de manipulação de cookies<br>
│   └── jwtService/     # Serviço de geração e validação de JWT<br>
│<br>
├── prisma/             # Configuração do Prisma ORM<br>
│   └── seed/           # Scripts de seed do banco de dados<br>
│<br>
├── config/             # Arquivos de configuração do ambiente<br>
│<br>
└── types/              # Tipos e interfaces personalizados<br>

## ⚙️ Como Executar o Projeto

### 1️⃣ Pré-requisitos

1. Node.js instalado

2. PostgreSQL rodando

3. Gerenciador de pacotes (npm ou yarn)

### 2️⃣ Clonar o repositório
```
git clone <URL_DO_REPOSITORIO>
cd nome-do-projeto
```

### 3️⃣ Instalar dependências

````
npm install
# ou
yarn install
````

## 4️⃣ Configurar variáveis de ambiente
Crie um arquivo .env baseado no .env.test

## 5️⃣ Rodar migrações do banco
````
npm run prisma:migrate
````
## 6️⃣ Popular o banco (importante para tubir as categorias)
````
npm run prisma:seed
````
## 7️⃣ Iniciar o servidor
````
npm run dev
````

##📘 Documentação da API

A API possui documentação interativa via Swagger:

👉 http://localhost:3000/docs


# 🤝 Contribuição

Contribuições são bem-vindas!
Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias.

# 📄 Licença
Este projeto está licenciado sob a MIT License.
