const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Hardcoded products list
const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Smartphone', price: 599.99 },
  { id: 3, name: 'Headphones', price: 149.99 },
  { id: 4, name: 'Keyboard', price: 79.99 },
  { id: 5, name: 'Mouse', price: 49.99 }
];

// GET /products - Returns list of all products
app.get('/products', (req, res) => {
  res.status(200).json({
    success: true,
    data: products
  });
});

// POST /cart - Accepts product ID and quantity, returns total price
app.post('/cart', (req, res) => {
  const { productId, quantity } = req.body;

  // Validation
  if (!productId || !quantity) {
    return res.status(400).json({
      success: false,
      error: 'Product ID and quantity are required'
    });
  }

  if (typeof quantity !== 'number' || quantity <= 0) {
    return res.status(400).json({
      success: false,
      error: 'Quantity must be a positive number'
    });
  }

  // Find the product
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }

  // Calculate total price
  const totalPrice = product.price * quantity;

  res.status(200).json({
    success: true,
    data: {
      productId: product.id,
      productName: product.name,
      unitPrice: product.price,
      quantity: quantity,
      totalPrice: totalPrice
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
