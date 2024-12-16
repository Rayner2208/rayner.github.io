document.addEventListener("DOMContentLoaded", function() {
    const cardNumberInput = document.getElementById('card-number-input');
    const expiryDateInput = document.getElementById('expiry-date-input');
    const cvvInput = document.getElementById('cvv-input');
    const cardholderNameInput = document.getElementById('cardholder-name-input');
    const cardIcon = document.getElementById('card-icon');
    const cardButton = document.getElementById('card-button');

    // Función para mostrar notificaciones
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => { notification.style.right = '20px'; }, 100);
        setTimeout(() => {
            notification.style.right = '-300px';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    // Función de validación de número de tarjeta
    function isCardNumberValid(cardNumber) {
        return /^[0-9]{16}$/.test(cardNumber);
    }

    // Función de validación de fecha de vencimiento
    function isExpiryDateValid(expiryDate) {
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate);
    }

    // Función de validación de CVV
    function isCvvValid(cvv) {
        return /^[0-9]{3}$/.test(cvv);
    }

    // Función de validación de nombre del titular
    function isCardholderNameValid(name) {
        return /^[a-zA-Z\s]+$/.test(name);
    }

    // Agregar el evento de click en el botón
    cardButton.addEventListener('click', function() {
        const cardNumber = cardNumberInput.value;
        const expiryDate = expiryDateInput.value;
        const cvv = cvvInput.value;
        const cardholderName = cardholderNameInput.value;

        // Validar campos
        let valid = true;

        if (!isCardNumberValid(cardNumber)) {
            document.getElementById('card-number-error').classList.remove('hidden');
            valid = false;
        } else {
            document.getElementById('card-number-error').classList.add('hidden');
        }

        if (!isExpiryDateValid(expiryDate)) {
            document.getElementById('expiry-date-error').classList.remove('hidden');
            valid = false;
        } else {
            document.getElementById('expiry-date-error').classList.add('hidden');
        }

        if (!isCvvValid(cvv)) {
            document.getElementById('cvv-error').classList.remove('hidden');
            valid = false;
        } else {
            document.getElementById('cvv-error').classList.add('hidden');
        }

        if (!isCardholderNameValid(cardholderName)) {
            document.getElementById('cardholder-name-error').classList.remove('hidden');
            valid = false;
        } else {
            document.getElementById('cardholder-name-error').classList.add('hidden');
        }

        if (valid) {
            showNotification('Pago realizado con éxito');
        } else {
            showNotification('Por favor, complete todos los campos correctamente.');
        }
    });
});
