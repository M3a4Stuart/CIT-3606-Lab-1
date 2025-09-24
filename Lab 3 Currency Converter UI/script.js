function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
   
    const convertedAmount = (amount * 1.52);
    document.getElementById("result").value =  convertedAmount.toFixed(2);
  } 
