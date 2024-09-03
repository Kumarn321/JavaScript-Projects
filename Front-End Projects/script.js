// Thumbnail Click Event
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        document.getElementById('mainProductImage').src = this.src;
        document.querySelectorAll('.thumbnail').forEach(tn => tn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Zoom Functionality
document.getElementById('mainProductImage').addEventListener('click', function() {
    if (this.style.transform === 'scale(1.5)') {
        this.style.transform = 'scale(1)';
        this.style.cursor = 'zoom-in';
    } else {
        this.style.transform = 'scale(1.5)';
        this.style.cursor = 'zoom-out';
    }
});

// Dynamic Price Update
document.getElementById('color').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const newPrice = selectedOption.getAttribute('data-price');
    document.getElementById('price').textContent = newPrice;
});

// Add to Cart Event
// document.getElementById('addToCartButton').addEventListener('click', function() {
//     alert('Product added to cart!');
// });
let cartItemCount = 0;

document.getElementById('addToCartButton').addEventListener('click', function() {
    cartItemCount++;
    updateCartCount();
    alert('Product added to cart!');
});

function updateCartCount() {
    document.getElementById('cartCount').textContent = cartItemCount;
}
