function validateCardNumber(cardNumber) {
        const regex = /^[0-9]{16}$/; 
    return regex.test(cardNumber);
  }
  
function getPaymentSystem(cardNumber) {
    const firstDigit = cardNumber.charAt(0);
    if (firstDigit === '4') {
      return 'Visa';
    } else if (firstDigit === '5') {
      return 'Mastercard';
    } else if (firstDigit === '3') {
      return 'Amex';
    } else if (firstDigit === '6') {
      return 'Discover';
    } else {
      return 'Unknown';
    }
}
  
 
function updateCardImageAndResult(paymentSystem) {
    const cardImage = document.getElementById('cardImage');
    const resultMessage = document.getElementById('resultMessage');

    switch (paymentSystem) {
         case 'Visa':
        cardImage.src = 'images/card-visa.png';
        break;
        case 'Mastercard':
        cardImage.src = 'images/card-mastercard.png';
        break;
        case 'Amex':
        cardImage.src = 'images/card-amex.png';
        break;
        case 'Discover':
        cardImage.src = 'images/card-discover.png';
        break;
        case 'Mir':
        cardImage.src = 'images/card-mir.png';
        break;
        case 'Unknown':
        cardImage.src = '';
        break;
      default:
        cardImage.src = '';
}
  
    resultMessage.textContent = `Payment system: ${paymentSystem}`;
}
  
function handleValidation() {
    const cardNumberInput = document.getElementById('cardNumberInput');
    const cardNumber = cardNumberInput.value;

    const isValid = validateCardNumber(cardNumber);
  
    const paymentSystem = getPaymentSystem(cardNumber);
  
    updateCardImageAndResult(paymentSystem);
  }

const validateButton = document.getElementById('validateButton');
validateButton.addEventListener('click', handleValidation);
  