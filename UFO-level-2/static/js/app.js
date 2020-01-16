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

  var filterSighting = tableData.filter(sighting => (
    sighting.datetime == inputField.node(0).value? 
    : 
                                                       sighting.city == inputField.node(1).value?
                                                      | sighting.state == inputField.node(2).value
                                                      | sighting.country == inputField.node(3).value
                                                      | sighting.shape == inputField.node(4).value));


  filterSighting.forEach((ufoSighting) => {
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  });

