jQuery(document).ready(function($) {
    // Function to trigger confetti effect
    function triggerConfetti(button) {
        // Log to console to check if the function is called
        console.log('Product added to cart');
        
        // Check if confetti library is loaded
        if (typeof confetti === 'function') {
            // Calculate button position
            var rect = button[0].getBoundingClientRect();
            var x = (rect.left + rect.right) / 2;
            var y = (rect.top + rect.bottom) / 2;

            // Configure confetti settings
            var confettiSettings = {
                particleCount: 100,
                spread: 70,
                // Adjust these values as needed
                origin: { x: x / window.innerWidth, y: y / window.innerHeight }
            };

            // Trigger confetti effect
            confetti(confettiSettings);
        } else {
            console.log('Confetti library not loaded');
        }
    }
    
    // Hook into WooCommerce "added_to_cart" event for sidebar button
    $(document.body).on('added_to_cart', function(event, fragments, cart_hash, button) {
        // Trigger confetti effect when product is added to cart
        triggerConfetti($(button));
    });
});
