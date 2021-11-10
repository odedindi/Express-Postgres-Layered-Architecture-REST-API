# CRUD (Create, read, update, delete) Node.js app with an Express server and Postgres database.

basic RESTful API built with love using Express, Postgres, Winston, Module-Alias TSLint, prettier, Jest, supertest and written in typescript in a Layered Architecture.

## Installation

`yarn` or `yarn install`

## to Run the project please follow the next steps:

1. pull

2. have postgres installed locally, updated relevant access details in .env file [read here if needed](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)
3. `yarn dev` runs the app in development mode.

Project structure:

```bash
root
├── dist
├── logs
├── node_modules
├── src
│   ├── __tests__
│   ├── config
│   └── modules
│       └── user
│           ├── controllers
│           ├── repositories
│           └── routes
├── app.ts
└── server.ts
```

## License

[MIT](LICENSE)
