const button = document.createElement("button");
button.id = "getCurrencies";
button.innerHTML = "Currency list";
document.body.appendChild(button);
// const button = `<button id = "getCurrencies">Currency list</button>`;
// document.body.insertAdjacentHTML("beforeend", button);

const getCurrencyList = () => {
  const url = "https://api.frankfurter.app/latest";
  fetch(url)
    .then((respone) => respone.json())
    .then((data) => console.log(data.base))
    .then((error) => console.error(error));
};

const createElement = (url) => {
  const select = `<select></select>`;
  const option = `<option value = "${data.base}">${data.base}</option>`;
  document.body.appendChild(select);
  document.select.appendChild(option);
};

// https://api.ratesapi.io/api/latest?base=${select.value}&symbols=${option.value}

button.addEventListener("click", getCurrencyList);

// Korzystając z Frankfurter API, stwórz przycisk o id=”getCurrencies”, który
// wywołuje funkcję getCurrencyList, która wykona fetch wywołującą zapytanie
// pod adres https://api.frankfurter.app/latest.

// Zwrócony zostanie obiekt z listą dostępnych walut i ich wartości względem EUR.
// Twoim zadaniem jest stworzyć w JS element <select> i włożyć do niego <option>, które
// będą miały w sobie tekst odpowiadający kodom walut, a oprócz tego atrybut value ustawiony
// na taką samą wartość

// Wyglądać to ma tak:

// <selelect>
// 	<option value=”EUR”>EUR</option>
// 	...
// </select>
