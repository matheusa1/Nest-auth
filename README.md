# Autenticação com NestJS

## Como executar o projeto

- Instale as dependencias do projeto:

```bash
pnpm i
```

- Configure seu .env seguindo os conformes do .env.exemple

- Crie o banco no prisma usando o comando:

```bash
pnpm prisma migrate dev
```

- Basta executar o comando de início:

```bash
pnpm start:dev
```

## Rotas disponíveis

### Criação de usuário

- Rota: /user
- Método: POST
- body
  ```json
  {
    "name": "YOUR_NAME",
    "email": "YOUR_EMAIL",
    "password": "YOUR_PASSWORD"
  }
  ```

### Login

- Rota: /auth/login
- Método: POST
- body
  ```json
  {
    "email": "YOUR_EMAIL",
    "password": "YOUR_PASSWORD"
  }
  ```

### Lista de todos os usuários

- Rota: /user
- Método: GET
- Autenticação: Barear token

### Lista de todos os usuários

- Rota: /me
- Método: GET
- Autenticação: Barear token
