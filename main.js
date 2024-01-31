// Prompt the user to choose a city and store the choice in the variable cityChosen
let cityChosen = prompt("Choose a city.");

// Select the HTML element with the id "change" and add a click event listener
let change = document.querySelector("#change");
change.addEventListener("click", () => {
  // Prompt the user again to choose a city when the "change" button is clicked
  cityChosen = prompt("Choose a city.");
  // Call the receiveTemperature function with the updated city choice
  receiveTemperature(cityChosen);
});

// Function to fetch and display temperature information for a given city
function receiveTemperature(city) {
  // API endpoint URL with the specified city and API key
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

  // Create a new XMLHttpRequest object
  let req = new XMLHttpRequest();
  req.open("GET", url);
  req.responseType = "json";
  req.send();

  // Define what to do on successful data retrieval
  req.onload = function () {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        // Parse the response JSON and extract temperature and city information
        let response = req.response;
        let temperature = response.main.temp;
        let city = response.name;

        // Update the HTML elements with the fetched temperature and city information
        document.querySelector("#temperature").textContent =
          temperature + " °C";
        document.querySelector("#city").textContent = city;
      } else {
        // Display an alert if there is an issue with the API request
        alert("A problem has occurred, please come back later.");
      }
    }
  };
}

// Initial call to the receiveTemperature function with the user's chosen city
receiveTemperature(cityChosen);
