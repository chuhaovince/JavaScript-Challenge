// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Getting a reference to the button on the page with the id property set to `filter-btn`
 var button = d3.select("#filter-btn");

button.on("click", function() {

  // reset the table
  tbody.html("");

    // Getting a reference to the input element on the page with the id property set to 'datetime'
   var inputField = d3.selectAll(".form-control");

   // get the values and save them in an object
   var inputValues = {
     datetime : inputField.nodes()[0].value,
     city : inputField.nodes()[1].value,
     state : inputField.nodes()[2].value,
     country : inputField.nodes()[3].value,
     shape : inputField.nodes()[4].value,
    };


    // update inputValues so that it doesn't include any unknown values
    Object.keys(inputValues).forEach(function(key) {
    var value = inputValues[key];
    if (value === "") {
      delete inputValues[key];
      }
    });

    console.log(inputValues);

  // filter by the inputs given by the user
  filterSighting = tableData.filter(function(item) {
    for (var key in inputValues) {
      if (inputValues[key] === undefined || item[key] != inputValues[key]) {
        return false;
      }
    };
    return true;
  });
  

  // var filterDate = tableData.filter(sighting => {
  //   sighting.datetime == inputField.nodes()[0].value
  // });

  // var filterCity = filterDate.filter(sighting => {
  //   sighting.city == inputField.nodes()[1].value
  // });

  // var filterState = filterCity.filter(sighting => {
  //   sighting.state == inputField.nodes()[2].value
  // });

  // var filterCountry = filterCity.filter(sighting => {
  //   sighting.country == inputField.nodes()[3].value
  // });

  // var filterShape = filterCountry.filter(sighting => {
  //   sighting.shape == inputField.nodes()[4].value
  // });

  // var filterSighting = tableData.filter((sighting) =>  
  //   sighting.datetime == inputField.nodes()[0].value ||
  //   sighting.city == inputField.nodes()[1].value ||
  //   sighting.state == inputField.nodes()[2].value ||
  //   sighting.state == inputField.nodes()[3].value ||
  //   sighting.state == inputField.nodes()[4].value
  // );

  filterSighting.forEach((ufoSighting) => {
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  });

