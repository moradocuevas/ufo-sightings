// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page 
// and then add new rows of data for each UFO sighting.


// Reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// Looping through 'data' for each UFO report object
data.forEach((ufoReport) => {

    // Appending one table row 'tr' for each UFO report object
    var row = tbody.append("tr");

    // Another loop for each UFO key and value
    Object.entries(ufoReport).forEach(([key, value]) => {

      // Appending one cell to the row for each value in the UFO report object
      var cell = tbody.append("td");

      // Updating each cell's text with UFO report values
      cell.text(value);
    });
  });




// Use a date form in your HTML document and write JavaScript code
// that will listen for events and search through the date/time column
// to find rows that match user input.


// Assigning the data from `data.js` to a descriptive variable
var ufos = data;

// Getting a reference to the button on the page with the id property set to 'filter-btn'
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputDate.property("value");

  console.log(inputValue);

  // Setting the filtered values
  var filteredData = ufos.filter(iuefou => iuefou.datetime === inputValue);

  // Printing filtered data in console
  console.log(filteredData);

});