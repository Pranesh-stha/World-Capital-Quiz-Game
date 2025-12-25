
# World Capital Quiz – Full Stack App

A beginner-level full stack application built with **React**, **Express**, and **PostgreSQL**.

---

## Tech Stack
- Frontend: React
- Backend: Node.js + Express
- Database: PostgreSQL

---

## Project Structure
```

project-root/
frontend/   # React app
backend/    # Express server

````

---

## Prerequisites
Make sure you have installed:
- Node.js
- PostgreSQL (running on port 5432)
- npm

---

## Database Setup

1. Start PostgreSQL
2. Create a database:
```bash
createdb world_capitals
````

3. Create table:

```sql
CREATE TABLE capitals (
  id SERIAL PRIMARY KEY,
  country TEXT NOT NULL,
  capital TEXT NOT NULL
);
```

4. Insert sample data:

```sql
INSERT INTO capitals (country, capital)
VALUES ('Nepal', 'Kathmandu'), ('France', 'Paris');
```
or
Database can be populated using the provided `capitals.csv` file.

---

## Environment Variables

Inside the `backend` folder, create a `.env` file:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=world_capitals
```

⚠️ **Do not push `.env` to GitHub**
Use `.env.example` instead.

---

## Run Backend

```bash
cd backend
npm install
node server.js
```

Backend runs at:

```
http://localhost:5000
```

---

## Run Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## Notes

* PostgreSQL runs separately and is not pushed to GitHub
* Database credentials are stored in `.env`
* This project is for learning full stack basics

---

```

