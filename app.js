const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

// Function to render products
function renderProducts() {
  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = ''; // Clear the existing content

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-item');
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productElement);
  });
}

// Function to add product to cart
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  // Add your logic to handle adding the product to the cart
  console.log(`Added ${product.name} to cart!`);
}

// Initial render of products
renderProducts();