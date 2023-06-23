let countryInput = document.getElementById('countryInput');
let searchButton = document.getElementById('searchButton');

let countryName = document.getElementById('countryName');
let capital = document.getElementById('capital');
let population = document.getElementById('population');
let area = document.getElementById('area');

async function getCountryData(country) {
    try {
        let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        let data = await response.json();
        return data;
    }
    catch (err) {
        console.log("Error", err);
    }
}

async function displayCountryData() {
    let country = countryInput.value;
    let countryData = await getCountryData(country);

    if (countryData.length > 0) {
        countryName.innerHTML = `Country: ${countryData[0].name.common}`;
        capital.innerHTML = `Capital: ${countryData[0].capital}`;
        population.innerHTML = `Population: ${countryData[0].population}`;
        area.innerHTML = `Area: ${countryData[0].area} km²`;
    } else {
        countryName.innerHTML = "Country not found.";
        capital.innerHTML = "";
        population.innerHTML = "";
        area.innerHTML = "";
    }
}

searchButton.addEventListener("click", e => {
    displayCountryData();
});
