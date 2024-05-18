# Projeto 1 - Node Todolist Fullstack

Projeto criado com o intuíto para estudar a estruturação, organização e conexão entre NodeJS e MySQL, utilizando o Docker.
- Aprendendo a construir api e utilizar o docker

Vídeo 1 Backend: https://www.youtube.com/watch?v=Cdu0WJhI-d8&list=PLdtmpu_1ITQJ1Y2-ZBbE7ROP6u1kU0J5l

#### Pré-requisitos para este projeto
- Visual Studio Code (codar)
- Insomnia (testar as rotas da api)
- Docker (Rodar contentores em cima)
- NodeJS
- MySQL

#### Sistema de Pastas:
- Todolist-fullstack
    - |_ backend
        - |_ src
            - |_ controllers
            - |_ models
            - |_ middlewares
    - |_ frontend
        - |_ css
        - |_ js

#### Dependências do Projeto:
- Iniciar o projeto dentro da pasta "backend"
    - npm init -y
    - npm install express
    - npm install mysql2
    - npm install nodemon -D
    - npm install dotenv
    - npm install cors

- Outras ferramentas
    - npx eslint --init (manter o código limpo, erros e seguir um estilo de código js)

#### Pontos principais:

- Backend
    - Inicio da estrutura do projeto
    - Instalação das dependências
    - Criação da conexão com a base de dados e o ficheiro .env com as informações de conexão.
    - Rotas e conexão com a base de dados
    - Testando a api com o Insomnia
    - Subir um container com o MySQL
    - Criação da Base de Dados (todolist) necessária com as respectivas tabelas (id, title, status, created_at)
    - Inserido um dado na BD e verificar a requisição no Insomnia
    - Finalizado a primeira rota de /tasks
    - Criando uma nova rota para adicionar uma nova task 'post'
    - Criar um pasta para tratar as excepções middlewares
    - Criar rota para apagar tasks usando o método delete
    - Criar rota para atualizar tasks usando o método put
    - API finalizada.

- Frontend
    - Ainda dentro do backend vamos instalar mais uma dependência para permitir os clientes a acessarem nossa aplicação
        - npm install cors
    - Adicionado o cors no app.js
    - Criação da Pasta "frontend" e dentro dela "css" e "js"
    - Criado os ficheiros
        - index.hmtl na raiz do frontend
        - style.css na pasta css
        - scrypt.js na pasta js
    - Ícones utilizados no projeto: https://fonts.google.com/icons
    - Criação do formulário e tabelas
    - Estilização do html


- 1h30

