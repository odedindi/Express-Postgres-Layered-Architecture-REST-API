# RESTful API built with love using Express, Postgres, Winston, Module-Alias TSLint, prettier, Jest, supertest and written in typescript in a Layered Architecture

basic CRUD (Create, read, update, delete) app with an Express server and Postgres database.

## Installation

```
yarn
```
or 
```
npm install
```


## to Run the project please follow the next steps:

1. pull

2. have postgres installed locally, updated relevant access details in .env file [read here if needed](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)
   
3. In the project directory, run yarn dev or yarn start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Project structure:


```bash
"
root
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
"
```


## License

[MIT](LICENSE)