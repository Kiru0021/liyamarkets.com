// Example cart data (you could fetch this from localStorage or a backend)
let cartItems = [
    {
        name: 'Product 1',
        price: 25.00,
        image: 'images/product1.jpg',
        quantity: 1
    },
    {
        name: 'Product 2',
        price: 15.00,
        image: 'images/product2.jpg',
        quantity: 2
    }
];

// Function to render the cart
function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear existing items

    let total = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        
        // Create the product element
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div>
                <button onclick="removeItem('${item.name}')">Remove</button>
            </div>
        `;
        
        cartContainer.appendChild(itemElement);

        // Update total
        total += item.price * item.quantity;
    });

    // Update the total price
    document.getElementById('total-price').textContent = total.toFixed(2);
}

// Function to remove an item from the cart
function removeItem(productName) {
    cartItems = cartItems.filter(item => item.name !== productName);
    renderCart(); // Re-render the cart
}

// Function for proceeding to checkout
function checkout() {
    if (cartItems.length > 0) {
        alert('Proceeding to checkout...');
        // You could redirect to a checkout page or integrate payment processing
    } else {
        alert('Your cart is empty!');
    }
}

// Initial render of the cart
document.addEventListener('DOMContentLoaded', renderCart);
