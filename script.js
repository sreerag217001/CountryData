
    function Search() {
        country = c_Name.value;  //country=india
        console.log(country);


        fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
            .then(res => res.json())
        .then(data => displayData(data)) //2nd function call

            .catch(error => {
                alert('Failed to fetch country data')
            })
    }

    //display data as card

    function displayData(countryDetails) {
        capital = countryDetails[0].capital
        region = countryDetails[0].region
        population = countryDetails[0].population
        let htmlData = `<div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">My country</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Capital: ${capital}</li>
    <li class="list-group-item">Region: ${region}</li>
    <li class="list-group-item">Population: ${population}</li>
  </ul>
  
</div>`
    result.innerHTML = htmlData
    }
