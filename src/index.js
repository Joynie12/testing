import './styles.css';

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
  } else if (firstDigit === '2') {
    return 'Mir';
  } else {
    return 'Unknown';
  }
}

function updateCardImageAndResult(paymentSystem) {
  const resultMessage = document.getElementById('resultMessage');

  switch (paymentSystem) {
    case 'Visa':
      document.getElementById('visaCardImage').src = './images/card-visa.png';
      break;
    case 'Mastercard':
      document.getElementById('mastercardCardImage').src = './images/card-mastercard.png';
      break;
    case 'Amex':
      document.getElementById('amexCardImage').src = './images/card-amex.png';
      break;
    case 'Discover':
      document.getElementById('discoverCardImage').src = './images/card-discover.png';
      break;
    case 'Mir':
      document.getElementById('mirCardImage').src = './images/card-mir.png';
      break;
    case 'Unknown':
    default:
      document.getElementById('visaCardImage').src = '';
      document.getElementById('mastercardCardImage').src = '';
      document.getElementById('amexCardImage').src = '';
      document.getElementById('discoverCardImage').src = '';
      document.getElementById('mirCardImage').src = '';
      break;
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

// Добавляем обработчик события на кнопку "Validate" для выполнения валидации при нажатии на кнопку
const validateButton = document.getElementById('validateButton');
validateButton.addEventListener('click', handleValidation);