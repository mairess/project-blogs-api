# <p align="center">Projeto Blogs API</p>

## Contexto

Este projeto consiste em uma `API REST` feita em `Node.js` com `Express` e `javascript` que simula um blog. Sendo possível fazer `CRUD` dos posts, mas para isso, é necessário fazer login pois a api conta rotas protegidas com `jwt` para autenticação do usuário, além de contar com o `bcrypt` para fazer o hash da senha deixando a aplicação mais segura. Para a manipulação do banco de dados o `ORM` utilizado foi  o `sequelize` e o banco de dados é o `MySQL`.

<details>

<summary><strong>Rode o projeto localmente</strong></summary><br>

> ⚠️ É preciso ter o [Node](https://nodejs.org/en) instalado em sua máquina.
>
> ⚠️ É preciso criar um arquivo `.env` na raiz do projeto, siga o exemplo do arquivo [`env.example`](./env.example).
>

1. Clone o repositório:

```BASH
git clone git@github.com:mairess/project-blogs-api.git
```

2. Instale as dependências:

```BASH
npm install
```

3. Inicie o container do banco de dados:

```BASH
docker compose up -d db
```

4. Crie o banco e rode as migrations:

```BASH
env $(cat .env) npm run predev
```

5. Rode os seeders:

```BASH
env $(cat .env) npm run seed
```

6. Inicie o servidor:

```BASH
env $(cat .env) npm run dev
```

7. O servidor estará disponível na porta `3001`

</details>

<details>

<summary><strong>Rode o projeto com o docker</strong></summary><br>

> ⚠️ É preciso ter o [Docker](https://www.docker.com/get-started/) instalado em sua máquina.

1. Clone o repositório:

```BASH
git clone git@github.com:mairess/project-blogs-api.git
```

2. Suba os containers:

```BASH
docker compose up -d
```

3. Acesse o terminal iterativo do container `blogs_api`:

```BASH
docker exec -it blogs_api sh 
```

4. Crie o banco e rode as migrations:

```BASH
npm run predev 
```

5. Rode os seeders:

```BASH
npm run seed
```

6. Inicie o servidor:

```BASH
npm run dev
```

7. O servidor estará disponível na porta `3001`

</details>

## Documentação da API

A documentação desta api está disponível na rota `/api-docs`

## Tecnologias utilizadas

- Javascript
- Node
- Express
- Sequelize
- MySQL
- JWT
- Bcrypt
- Joi
- Docker
- Swagger-ui
