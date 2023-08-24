import './styles.css';
import visaImage from '../dist/images/card-visa.png';
import mastercardImage from '../dist/images/card-mastercard.png';
import amexImage from '../dist/images/card-amex.png';
import discoverImage from '../dist/images/card-discover.png';
import mirImage from '../dist/images/card-mir.png';

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
      document.getElementById('visaCardImage').src = visaImage;
      break;
    case 'Mastercard':
      document.getElementById('mastercardCardImage').src = mastercardImage;
      break;
    case 'Amex':
      document.getElementById('amexCardImage').src = amexImage;
      break;
    case 'Discover':
      document.getElementById('discoverCardImage').src = discoverImage;
      break;
    case 'Mir':
      document.getElementById('mirCardImage').src = mirImage;
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

// Вызываем функцию updateCardImageAndResult, чтобы установить изображения до ввода номера карты
updateCardImageAndResult('Unknown');

function handleValidation() {
  const cardNumberInput = document.getElementById('cardNumberInput');
  const cardNumber = cardNumberInput.value;

  const isValid = validateCardNumber(cardNumber);

  const paymentSystem = getPaymentSystem(cardNumber);

  updateCardImageAndResult(paymentSystem);
}

const validateButton = document.getElementById('validateButton');
validateButton.addEventListener('click', handleValidation);
