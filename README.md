# Brown Living Assignment - Node.js/Express Service

A simple Node.js/Express REST API service for managing products and shopping cart.

## Features

- **GET /products**: Returns a list of available products with id, name, and price
- **POST /cart**: Accepts a product ID and quantity, returns the total price

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## API Endpoints

### 1. GET /products

Returns a list of all available products.

**Request:**
```bash
curl http://localhost:3000/products
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 999.99
    },
    {
      "id": 2,
      "name": "Smartphone",
      "price": 599.99
    },
    {
      "id": 3,
      "name": "Headphones",
      "price": 149.99
    },
    {
      "id": 4,
      "name": "Keyboard",
      "price": 79.99
    },
    {
      "id": 5,
      "name": "Mouse",
      "price": 49.99
    }
  ]
}
```

### 2. POST /cart

Calculate the total price for a product based on quantity.

**Request:**
```bash
curl -X POST http://localhost:3000/cart \
  -H "Content-Type: application/json" \
  -d '{"productId": 1, "quantity": 2}'
```

**Request Body:**
- `productId` (number, required): The ID of the product
- `quantity` (number, required): The quantity of the product (must be positive)

**Response:**
```json
{
  "success": true,
  "data": {
    "productId": 1,
    "productName": "Laptop",
    "unitPrice": 999.99,
    "quantity": 2,
    "totalPrice": 1999.98
  }
}
```

**Error Responses:**

- **400 Bad Request** - Missing or invalid parameters:
  ```json
  {
    "success": false,
    "error": "Product ID and quantity are required"
  }
  ```

- **404 Not Found** - Product not found:
  ```json
  {
    "success": false,
    "error": "Product not found"
  }
  ```

## Testing the APIs

Test the APIs using curl, Postman, or any HTTP client.

### Example using curl:

1. Get all products:
   ```bash
   curl http://localhost:3000/products
   ```

2. Add product to cart:
   ```bash
   curl -X POST http://localhost:3000/cart \
     -H "Content-Type: application/json" \
     -d '{"productId": 3, "quantity": 5}'
   ```


