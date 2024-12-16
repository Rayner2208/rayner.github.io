document.addEventListener("DOMContentLoaded", () => {
    let cart = [];
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const placeOrderButton = document.getElementById("place-order");

    // Agregar al carrito
    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", () => {
            const price = parseFloat(button.getAttribute("data-price"));
            cart.push(price);
            updateCart();
        });
    });

    // Actualizar carrito
    function updateCart() {
        cartItems.innerHTML = cart.length > 0 ? cart.map(price => `<p>Item: $${price}</p>`).join('') : '<p>No hay artículos en el carrito.</p>';
        const total = cart.reduce((sum, price) => sum + price, 0);
        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
        placeOrderButton.disabled = cart.length === 0;
    }

    // Realizar el pedido (efecto de carga)
    placeOrderButton.addEventListener("click", () => {
        const loadingDiv = document.createElement("div");
        loadingDiv.id = "loading";
        loadingDiv.textContent = "Cargando...";
        document.body.appendChild(loadingDiv);

        setTimeout(() => {
            loadingDiv.remove();
            alert("Compra realizada con éxito.");
            cart = [];
            updateCart();
        }, 5000); // Simulamos 5 segundos de carga
    });
});
