# Backend APIs Learning (Node.js + Express + MongoDB)

This repository contains my backend learning projects while studying **Node.js, Express.js, and MongoDB**.
The goal of this project is to understand how to build REST APIs and connect them with a database.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon
* dotenv

---

## Project Structure

```
src
│
├── config
│   └── database.js
│
├── models
│   └── note.model.js
│
├── routes
│
├── controllers
│
└── app.js
```

---

## Features Implemented

* Create Notes API
* Get All Notes
* Get Single Note
* Update Note
* Delete Note
* MongoDB Database Connection

---

## API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /api/notes     | Create a new note |
| GET    | /api/notes     | Get all notes     |
| GET    | /api/notes/:id | Get single note   |
| PUT    | /api/notes/:id | Update note       |
| DELETE | /api/notes/:id | Delete note       |

---

## Installation

Clone the repository:

```
git clone https://github.com/chandan-sharma07/BackEndAPIs.git
```

Install dependencies:

```
npm install
```

Create `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Run the server:

```
npm run dev
```

---

## Purpose

This repository is created for learning backend development and building REST APIs using Node.js and MongoDB.
