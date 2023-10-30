// creating dom elements
const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");


  // funtion to be listened  to
function updateRate() {
  // getting data from the API
  fetch(
    `https://v6.exchangerate-api.com/v6/1904ea22b9a1f5720f0e1bd8/latest/${currencyFirstEl.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}
updateRate();
// creating an addEventlistener
currencyFirstEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
