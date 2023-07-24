import { getPaymentSystem } from '../src/index';

describe('getPaymentSystem', () => {
  // Тест для Visa
  it('should return "Visa" for a Visa card number', () => {
    const cardNumber = '4111111111111111';
    const result = getPaymentSystem(cardNumber);
    expect(result).toBe('Visa');
  });

  // Тест для Mastercard
  it('should return "Mastercard" for a Mastercard card number', () => {
    const cardNumber = '5555555555554444';
    const result = getPaymentSystem(cardNumber);
    expect(result).toBe('Mastercard');
  });

  // Тест для Amex
  it('should return "Amex" for an Amex card number', () => {
    const cardNumber = '378282246310005';
    const result = getPaymentSystem(cardNumber);
    expect(result).toBe('Amex');
  });

  // Тест для Discover
  it('should return "Discover" for a Discover card number', () => {
    const cardNumber = '6011111111111117';
    const result = getPaymentSystem(cardNumber);
    expect(result).toBe('Discover');
  });

  // Тест для неизвестной платёжной системы
  it('should return "Unknown" for an unknown card number', () => {
    const cardNumber = '1234567890123456';
    const result = getPaymentSystem(cardNumber);
    expect(result).toBe('Unknown');
  });
});
