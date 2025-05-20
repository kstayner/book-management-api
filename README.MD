# 📚 Book Management API

A RESTful API for book management, built with Node.js, Express, and MongoDB.

## 🚀 Technologies Used

- Node.js
- Express
- MongoDB with Mongoose
- Cors
- Morgan
- Dotenv

## 📂 Project Structure

```
/book-management-api
│-- /config
│   ├── db.js               # Database configuration
│-- /models
│   ├── Book.js             # Book model
│-- /routes
│   ├── bookRoutes.js       # Route definitions
│-- /controllers
│   ├── bookController.js   # Request controllers
│-- /services
│   ├── bookService.js      # Business logic
│-- server.js               # Server initialization
│-- package.json            # Project dependencies
│-- .env                    # Environment settings
```

## 📌 Prerequisites

1. **Install Node.js**: [Download Node.js](https://nodejs.org/)
2. **Install MongoDB** (locally or use [MongoDB Atlas](https://www.mongodb.com/atlas))
3. **Clone the repository**:
   ```sh
   git clone <REPO_URL>
   cd book-management-api
   ```

## 🛠️ Installation and Execution

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ Create a `.env` file

Create a `.env` file in the project's root and add:

```
MONGO_URI=mongodb://localhost:27017/bookstore
PORT=5000
```

### 3️⃣ Start the Server

```sh
npm start
```

Or, for development with automatic restarts:

```sh
nodemon server.js
```

## 🔥 API Endpoints

The API exposes the following endpoints:

### 📌 Create a Book (POST)

```sh
POST /api/books
```

**JSON Body:**

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedYear": 1925,
  "genre": "Classic"
}
```

### 📌 Get All Books (GET)

```sh
GET /api/books
```

### 📌 Get a Book by ID (GET)

```sh
GET /api/books/:id
```

### 📌 Update a Book (PUT)

```sh
PUT /api/books/:id
```

**JSON Body:**

```json
{
  "title": "New Title"
}
```

### 📌 Delete a Book (DELETE)

```sh
DELETE /api/books/:id
```

## 🧪 Testing the API

You can test the API using **Postman, Insomnia**, or `curl` commands in the terminal.

Example:

```sh
curl -X GET http://localhost:5000/api/books
```

## 📜 License

This project is open-source and free to use.

---

🚀 **Developed with Node.js and MongoDB**