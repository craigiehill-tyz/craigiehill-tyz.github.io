jQuery(document).ready(function($) {
    // Function to update cart quantity
    function updateCartQuantity() {
        $.ajax({
            url: update_cart_params.ajax_url,
            type: 'POST',
            data: {
                'action': 'update_cart_quantity'
            },
            success: function(response) {
                // Update the text inside .pl_basket_quantity with the cart count or 0 if cart is empty
                $('.pl_basket_quantity').text(response == 0 ? '0' : response);
            },
            error: function(xhr, status, error) {
                console.error('AJAX Error:', error); // Debug statement
            }
        });
    }

    // Listen for the added_to_cart and updated_cart_totals events and trigger AJAX request to update cart quantity
    $('body').on('added_to_cart updated_cart_totals', function(event) {
        // Call the function to update cart quantity
        updateCartQuantity();
    });

    // Initial call to update cart quantity when the page loads
    updateCartQuantity();
});
