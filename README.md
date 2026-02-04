# Este é o repositório do backend do meu portifólio de desenvolvedor.

## Stack

<ul>
<li>Tecnologias</li>
<li>Node.js</li>
<li>TypeScript</li>
<li>Fastify</li>
<li>Prisma</li>
<li>PostgreSQL</li>
<li>JWT</li>
<li>Swagger</li>
<li>GitHub OAuth</li>
</ul>

## Estrutura do projeto

O projeto está organizado da seguinte forma:

src: contém a lógica do aplicativo
modules: contém os módulos do aplicativo
auth: módulo de autenticação
category: módulo de categorias
challenge: módulo de desafios
project: módulo de projetos
technology: módulo de tecnologias
providers: módulo de provedores
github: módulo de autenticação com GitHub
database: contém a configuração do banco de dados
shared: contém componentes compartilhados
cookie-service: serviço de cookies
jwtService: serviço de JWT
prisma: contém o arquivo de configuração do Prisma
config: contém os arquivos de configuração do ambiente
seed: contém scripts de seed para o Prisma
types: contém tipos personalizados
Como executar o projeto
Certifique-se de ter o Node.js e o TypeScript instalados em sua máquina.
Clone o repositório em sua máquina local.
Instale as dependências do projeto executando npm install ou yarn install.
Configure as variáveis de ambiente de acordo com o arquivo .env.example.
Execute npm run prisma:migrate ou yarn prisma:migrate para gerar as migrações do Prisma.
Execute npm run dev ou yarn dev para iniciar o servidor.
Como usar a API
A API está documentada usando o Swagger. Você pode acessá-la em http://localhost:3000/docs.

# Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias ou correções.

# Licença

Este projeto está licenciado sob a MIT License.
