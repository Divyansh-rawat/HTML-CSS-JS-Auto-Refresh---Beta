// JavaScript function to add a product to the cart
function addToCart(element) {
  // Add the product to the cart
  // ...

  // Update the cart count
  var cartCount = document.querySelector('.cart-count');
  cartCount.textContent = parseInt(cartCount.textContent) + 1;
}
