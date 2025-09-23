tofixed(2);
          alert(`${amount} ${fromCurrency} is approximately ${convertedAmount} ${toCurrency}`);


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
      
      <><if value euro>
  <tofixed />(2);
  let num = 0.85;
  let n = num.toFixed(2);
  alert(n);
</if><if value usd>
    <tofixed />(2);
    let num = 1.00;
    let n = num.toFixed(2);
    alert(n);
  </if><if value gbp>
    <tofixed />(2);
    let num = 0.75;
    let n = num.toFixed(2);
    alert(n);
  </if><if value jpy>
    <tofixed />(2);
    let num = 110.00;
    let n = num.toFixed(2);
    alert(n);
  </if></>