window.onload = function() {
  let billAmountInput = document.getElementById('bill');
  let tipPercentInput = document.getElementById('tip');
  let currencySelector = document.getElementById('currency');

  // Set initial input values
  billAmountInput.value = localStorage.getItem('billAmount') || '';
  tipPercentInput.value = localStorage.getItem('tipPercent') || '';
  currencySelector.value = localStorage.getItem('currency') || 'USD';

  // Add event listeners to save input values
  billAmountInput.addEventListener('input', function() {
    localStorage.setItem('billAmount', this.value);
  });

  tipPercentInput.addEventListener('input', function() {
    localStorage.setItem('tipPercent', this.value);
  });

  currencySelector.addEventListener('change', function() {
    localStorage.setItem('currency', this.value);
  });
}

function calculateTip() {
  let billAmount = Number(document.getElementById('bill').value);
  let tipPercent = Number(document.getElementById('tip').value);
  let currencySelector = document.getElementById('currency');

  if (isNaN(billAmount) || isNaN(tipPercent)) {
    alert("Please enter valid numbers for both fields.");
    return;
  }

  let tipAmount = billAmount * (tipPercent / 100);
  let totalAmount = billAmount + tipAmount;

  let currencySymbol = getCurrencySymbol(currencySelector.value);
  
  document.getElementById('result').innerHTML = `Tip Amount: ${currencySymbol}${tipAmount.toFixed(2)}`;
}

function getCurrencySymbol(currency) {
  switch(currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "CHF":
      return "₣";
    default:
      return "$";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var themeSelector = document.getElementById('theme-selector');

  themeSelector.addEventListener('change', function() {

    // Remove the existing theme class from the body
    document.body.classList.remove('theme-default', 'theme-dark');

    // Add the selected theme class to the body
    document.body.classList.add(this.value);

    // Save the selected theme in local storage
    localStorage.setItem('selectedTheme', this.value);
  });

  // Load the saved theme from local storage (if any)
  var savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    // Remove the current theme from the body
    document.body.classList.remove('theme-default', 'theme-dark');

    // Add the saved theme class to the body
    document.body.classList.add(savedTheme);

    // Set the dropdown menu's value to the saved theme
    themeSelector.value = savedTheme;
  }
});
