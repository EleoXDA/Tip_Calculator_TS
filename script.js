"use strict";
const billAmountInput = document.getElementById('bill');
const tipPercentInput = document.getElementById('tip');
const currencySelector = document.getElementById('currency');
window.onload = function () {
    billAmountInput.value = localStorage.getItem('billAmount') || '';
    tipPercentInput.value = localStorage.getItem('tipPercent') || '';
    currencySelector.value = localStorage.getItem('currency') || 'USD';
    billAmountInput.addEventListener('input', function () {
        localStorage.setItem('billAmount', this.value);
    });
    tipPercentInput.addEventListener('input', function () {
        localStorage.setItem('tipPercent', this.value);
    });
    currencySelector.addEventListener('change', function () {
        localStorage.setItem('currency', this.value);
    });
};
function calculateTip() {
    const billAmount = Number(billAmountInput.value);
    const tipPercent = Number(tipPercentInput.value);
    if (isNaN(billAmount) || isNaN(tipPercent)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }
    const tipAmount = billAmount * (tipPercent / 100);
    const currencySymbol = getCurrencySymbol(currencySelector.value);
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Tip Amount: ${currencySymbol}${tipAmount.toFixed(2)}`;
}
function getCurrencySymbol(currency) {
    switch (currency) {
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
document.addEventListener('DOMContentLoaded', function () {
    const themeSelector = document.getElementById('theme-selector');
    themeSelector.addEventListener('change', function () {
        document.body.classList.remove('theme-default', 'theme-dark');
        document.body.classList.add(this.value);
        localStorage.setItem('selectedTheme', this.value);
    });
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        document.body.classList.remove('theme-default', 'theme-dark');
        document.body.classList.add(savedTheme);
        themeSelector.value = savedTheme;
    }
});
