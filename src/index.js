import './styles.css';
import visaImage from './images/card-visa.png';
import mastercardImage from './images/card-mastercard.png';
import amexImage from './images/card-amex.png';
import discoverImage from './images/card-discover.png';
import mirImage from './images/card-mir.png';
import nonameCard from './images/nonameCard.jpg';

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
      document.getElementById('visaCardImage').src = nonameCard;
      document.getElementById('mastercardCardImage').src = nonameCard;
      document.getElementById('amexCardImage').src = nonameCard;
      document.getElementById('discoverCardImage').src = nonameCard;
      document.getElementById('mirCardImage').src = nonameCard;
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
