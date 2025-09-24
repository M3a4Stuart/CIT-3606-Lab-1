function convertCurrency() {
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const amount = parseFloat(document.getElementById('amount').value);

  // Assume fetchExchangeRate is a function that fetches the exchange rate
  fetchExchangeRate(fromCurrency, toCurrency)
    .then(rate => {
      if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        alert(`${amount} ${fromCurrency} is approximately ${convertedAmount} ${toCurrency}`);
      } else {
        alert('Error fetching exchange rates. Please try again later.');
      }
    });
}

document.getElementById('convertBtn').addEventListener('click', convertCurrency);

console.log("Script loaded successfully");

console.log("Ready to convert currencies");

// Mock function to simulate fetching exchange rates
function fetchExchangeRate(from, to) {
  return new Promise((resolve) => {
    const mockRates = {
      'USD_EUR': 0.85,
      'EUR_USD': 1.18,
      'USD_GBP': 0.75,
      'GBP_USD': 1.33,
      'EUR_GBP': 0.88,
      'GBP_EUR': 1.14
    };
    const rateKey = `${from}_${to}`;
    setTimeout(() => resolve(mockRates[rateKey] || null), 500);
  });