// Get references to the HTML elements
const billAmountInput = document.getElementById('bill') as HTMLInputElement;
const tipPercentInput = document.getElementById('tip') as HTMLInputElement;
const currencySelector = document.getElementById('currency') as HTMLSelectElement;

// Run the initialization code when the window loads
window.onload = function() {
  // Set initial input values from local storage or empty string
  billAmountInput.value = localStorage.getItem('billAmount') || '';
  tipPercentInput.value = localStorage.getItem('tipPercent') || '';
  currencySelector.value = localStorage.getItem('currency') || 'USD';

  // Add event listeners to save input values when they change
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

function calculateTip(): void {
  // Parse the input values as numbers
  const billAmount = Number(billAmountInput.value);
  const tipPercent = Number(tipPercentInput.value);

  // Check if the input values are valid numbers
  if (isNaN(billAmount) || isNaN(tipPercent)) {
    alert("Please enter valid numbers for both fields.");
    return;
  }

  // Calculate the tip amount and total amount
  const tipAmount = billAmount * (tipPercent / 100);

  // Get the currency symbol based on the selected currency
  const currencySymbol = getCurrencySymbol(currencySelector.value);

  // Display the result in the designated element
  const resultElement = document.getElementById('result') as HTMLElement;
  resultElement.innerHTML = `Tip Amount: ${currencySymbol}${tipAmount.toFixed(2)}`;
}

function getCurrencySymbol(currency: string): string {
  // Return the appropriate currency symbol based on the selected currency
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
  const themeSelector = document.getElementById('theme-selector') as HTMLSelectElement;

  themeSelector.addEventListener('change', function() {

    // Remove the existing theme class from the body
    document.body.classList.remove('theme-default', 'theme-dark');

    // Add the selected theme class to the body
    document.body.classList.add(this.value);

    // Save the selected theme in local storage
    localStorage.setItem('selectedTheme', this.value);
  });

  // Load the saved theme from local storage (if any)
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    // Remove the current theme class from the body
    document.body.classList.remove('theme-default', 'theme-dark');

    // Add the saved theme class to the body
    document.body.classList.add(savedTheme);

    // Set the dropdown menu's value to the saved theme
    themeSelector.value = savedTheme;
  }
});
