# IEXPO Subscribe Server 💻

## Domain 🎮
Create a registration for the IEXPO cultural sample, with the aim of controlling how many people will come to the event and confirming each person's name and email upon arrival at the event

## Getting Started 🧠

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm add

```

Afterwards, run the development server:

```bash
npm run start:dev
# or
yarn start:dev
# or
pnpm start:dev
```

Open the address [http://localhost:3000/enrollments](http://localhost:3000/enrollments) in HTTP request applications such as insomnia. My recommendation is the "Hoppscotch" application, which I have been using recently;

## Routes

- ```'/enrollment'```
Route with methods: GET, POST and DELETE. To create subscriptions, list them and delete them (two functions that can only be done by administrators - feature for the future -)

## Technologies used

* Nest js
* Prisma
* Postgresql

## Project status
<p>🛠️ under development</p>

### TO DO

- [x] Create registrations
- [x] List registrations
- [x] Delete registrations

### Author
---
Feito com ❤️ por Daniel Alves Entre em contato!