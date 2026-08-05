const countriesDiv = document.getElementById("countries");

Promise.all([
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
        .then(response => response.json()),

    fetch("https://countriesnow.space/api/v0.1/countries/currency")
        .then(response => response.json())
])
.then(([flagsData, currencyData]) => {

    let output = "";

    flagsData.data.forEach(country => {

        let currency = "Unknown";

        let foundCurrency = currencyData.data.find(
            item => item.name === country.name
        );

        if (foundCurrency) {
            currency = foundCurrency.currency;
        }

        output += `
            <div class="card">
                <h2>${country.name}</h2>
                <img src="${country.flag}" width="100">
                <p>Currency: ${currency}</p>
            </div>
        `;
    });

    countriesDiv.innerHTML = output;

})
.catch(error => console.log(error));