# CRUD API with MongoDB

This project is a simple API that lets you manage items, orders, carts, and users using **Node.js**, **Express**, and **MongoDB**. You can create, read, update, and delete data from the database through the API.

## Features

- **Manage Items**: Create, view, update, and delete items.
- **Manage Orders**: Create, view, update, and delete orders.
- **Manage Carts**: Add items to carts, view, and delete carts.
- **Manage Users**: Add, update, and delete users.

## API Endpoints

Here are the main routes (endpoints) for this API:

### Items

- **GET** `/items`: Get all items.
- **GET** `/items/:id`: Get a specific item by ID.
- **POST** `/items`: Add a new item.
- **PUT** `/items/:id`: Update an item by ID.
- **DELETE** `/items/:id`: Delete an item by ID.

### Orders

- **GET** `/orders`: Get all orders.
- **GET** `/orders/:id`: Get an order by ID.
- **POST** `/orders`: Create a new order.
- **PUT** `/orders/:id`: Update an order by ID.
- **DELETE** `/orders/:id`: Delete an order by ID.

### Carts

- **GET** `/carts`: Get all carts.
- **GET** `/carts/:id`: Get a cart by ID.
- **POST** `/carts`: Add a new cart.
- **PUT** `/carts/:id`: Update a cart by ID.
- **DELETE** `/carts/:id`: Delete a cart by ID.
- **GET** `/carts/seed`: Add sample data to the carts collection.

### Users

- **GET** `/users`: Get all users.
- **GET** `/users/:id`: Get a user by ID.
- **POST** `/users`: Add a new user.
- **PUT** `/users/:id`: Update a user by ID.
- **DELETE** `/users/:id`: Delete a user by ID.

## Installation

### Prerequisites

Before running this project, you need to have the following installed:

- **Node.js** (To run the backend server)
- **MongoDB** (To store the data)

You can install MongoDB locally, or you can use a cloud-based MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Steps to Get Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Brooksteven/crud-api-with-mongo.git
   cd crud-api-with-mongo

2. **Install dependencies**:
Run the following command in your terminal to install the required packages: npm install

3. **Set up the database connection**:
Create a .env file in the project folder, and add the following line: MONGO_URI=mongodb://localhost:27017/your-db-name
Replace your-db-name with the name of your MongoDB database.

4. **Run the server**:
Start the server using the following command: npm run dev
Your API will be available at: http://localhost:3001


## Seeding the Database

You can easily add sample data to the database using the following routes:

- **Seed items**: `GET /items/seed`
- **Seed orders**: `GET /orders/seed`
- **Seed carts**: `GET /carts/seed`

To use these, just open Postman or your browser and go to:

- `http://localhost:3001/items/seed`
- `http://localhost:3001/orders/seed`
- `http://localhost:3001/carts/seed`

## Technologies Used

- **Node.js**: JavaScript runtime for the server.
- **Express**: Framework for building the API.
- **MongoDB**: Database to store data.
- **Mongoose**: Library to interact with MongoDB.

## Folder Structure

├── controllers/           # Handles logic for each route
│   ├── carts/             # Cart controller
│   ├── items/             # Item controller
│   ├── orders/            # Order controller
│   └── users/             # User controller
├── models/                # Mongoose models for data collections
│   ├── cart.js
│   ├── item.js
│   ├── order.js
│   └── user.js
├── routes/                # API routes
│   ├── carts/             # Cart routes
│   ├── items/             # Item routes
│   ├── orders/            # Order routes
│   └── users/             # User routes
├── server.js              # Main entry point for the app
└── package.json           # Project dependencies and scripts



