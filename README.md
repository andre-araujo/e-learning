# E-Learning
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A web application to share knowledge using an e-learning system.

*This repo is meant to be a part of my final exam to complete a postgraduate course in web applications at PUC Minas*

## Usage with node

`node v8.11.1 LTS` or above is recomended for this project

### Install
`npm install` : Get project dependencies

## Database

This project uses [*MongoDB*](https://www.mongodb.com/) as database.

Download and install MongoDB, or use any MongoDB server of your choice.

`export MONGODB_URI=<MY_URI>` to set MongoDB URI enviroment variable. (defaults to //localhost:27017)

### Run in develop mode
`npm run dev` : Runs in *develop mode* with hot reload

It will run at [http://localhost:3000](http://localhost:3000)

### Run in production mode
`npm run export && npm start` : Build and run in *production mode* with a production-ready optimized build

### Build and export
`npm run export` : Builds the project in *production mode* as a static app at `./dist` folder

## Testing
`npm run test:coverage` : Runs test coverage using jest as a testing tool

## Project stack

- [*Express*](http://expressjs.com/)
  - Node server framework
- [*NextJS*](https://nextjs.org)
  - A lightweight framework for static and server‑rendered applications
- [*MongoDB*](https://www.mongodb.com/)
  - NoSQL database
- [*ReactJS*](https://reactjs.org/)
  - A JavaScript library for building user interfaces
  - Fast and well accepted
- [*ReduxJS*](https://redux.js.org/)
  - State manager
