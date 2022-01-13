
function fetchFlights(depAirport, arrAirport, travelClass) {
	fetch(`https://google-flights-search.p.rapidapi.com/search?departure_airport_code=${depAirport}&arrival_airport_code=${arrAirport}&flight_class=${travelClass}`, {
		"method": "GET",
		"headers": {
		  "x-rapidapi-host": "google-flights-search.p.rapidapi.com",
		  "x-rapidapi-key": "283ff4e872msh5329c2c6fdca6d0p1655aejsnbaa6f9870616"
		}
	  })
  
	  .then(response => response.json())
	  .then(data => {
		showFlights(data);
	  })
  
  }

function showFlights(resp) {
	console.log(resp);
	let results = document.getElementById("#results");
	results.innerHTML = resp.flights
	Map.index
	if(index <= 10) {
		return
	}
}

  window.addEventListener("load", function() { // when page loads and page elements are available
	document.getElementById("form").addEventListener("submit", function(e) {
	  e.preventDefault(); // stop submission
  
	  let depAirp = document.getElementById("field").value;
	  let arrAirp = document.getElementById("field2").value;
	  let travelCl = document.getElementById("field3").value;
	  if (depAirp == "" || arrAirp == "" || travelCl == "") {
		document.getElementById("errorMessage2").innerHTML = "Please fill all the fields";
	  } else {
		fetchFlights(depAirp, arrAirp, travelCl)
	  }
	})
  })
