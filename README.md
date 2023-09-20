# Autenticação com NestJS

## Como executar o projeto

- Configure seu .env seguindo os conformes do .env.exemple

- Crie o banco no prisma usando o comando:

```bash
$ pnpm prisma migrate dev
```

- Basta executar o comando de início:

```bash
$ pnpm start:dev
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

- ROTA: /auth/login
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
- headers
  Barear token

### Lista de todos os usuários

- Rota: /me
- Método: GET
- headers
  Barear token
