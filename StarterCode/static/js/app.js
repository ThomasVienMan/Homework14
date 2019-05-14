// from data.js
var tableData = data;

console.log(tableData);

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");
var output = d3.select(".table table-striped");



submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Get TBody
    var tableEmpty = document.getElementById('ufo-table');
    //console.log(tableEmpty)
    
    //clear table
    for(var i = tableEmpty.rows.length - 1; i > 0; i--)
    {
    tableEmpty.deleteRow(i);
    }
    
    //var inputElement = dropdown;
    

    // Get the value property of the input element
    var dropdown = document.getElementById('myList');
    var strUser = dropdown.options[dropdown.selectedIndex].value;
    console.log(strUser)

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    //var inputValue = strUser
    console.log(inputValue);

    if (strUser === 'datetime'){
      var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    } else if (strUser === 'city') {
      var filteredData = tableData.filter(tableData => tableData.city === inputValue);  
    } else if (strUser === 'state') {
      var filteredData = tableData.filter(tableData => tableData.state === inputValue);
    } else if (strUser === 'country') {
      var filteredData = tableData.filter(tableData => tableData.country === inputValue);
    } else if (strUser === 'shape') {
      var filteredData = tableData.filter(tableData => tableData.shape === inputValue);
    }
    console.log(filteredData);

    //Create the table
    filteredData.forEach(function(filteredData) {
        
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
       });
     });

});