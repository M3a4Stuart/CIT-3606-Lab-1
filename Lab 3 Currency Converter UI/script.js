tofixed(2);
          alert(`${amount} ${fromCurrency} is approximately ${convertedAmount} ${toCurrency}`);

      const name=document.getElementByld("Currency").value;

      document.getElementById("convertButton").value = function() {
        const amount = document.getElementById("amount").value;
        const fromCurrency = document.getElementById("fromCurrency").value;
        const toCurrency = document.getElementById("toCurrency").value;
        const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed();2;
        alert(`${amount} ${fromCurrency} is approximately ${convertedAmount} ${toCurrency}`);};2;

      document.getElementById("convertButton").onclick = function() {
        const amount = document.getElementById("amount").value;
        const fromCurrency = document.getElementById("fromCurrency").value;
        const toCurrency = document.getElementById("toCurrency").value;
        const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
        alert(`${amount} ${fromCurrency} is approximately ${convertedAmount} ${toCurrency}`);};2;
       
      document.getElementById("convertButton").onclick = function() {
        const amount = document.getElementById("amount").value;
        const fromCurrency = document.getElementById("fromCurrency").value;
        const toCurrency = document.getElementById("toCurrency").value;
        const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
        alert(`${amount} ${fromCurrency} is approximately ${convertedAmount} ${toCurrency}`);
        print("total of currency" + toCurrency);
      } 
        