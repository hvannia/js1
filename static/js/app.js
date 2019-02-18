// from data.js
var tableData = data;
theTable=d3.select('#ufo-table');
var filterBtn = d3.select('#filter-btn');
var filterTBox= d3.select('#datetime');
// YOUR CODE HERE!
/* load data */

function loadData(filterV){
    if (filterV===""){
        tableData.forEach(row => {
            var newrow = theTable.append('tr');
            Object.values(row).forEach( x=> newrow.append('td').text(x));
        });
    }else{

    }
}

function handleFilter(){
    //get filter text
    filterVal=filterTBox.property("value");
    var filteredCols= data.filter(x => datetime == filterVal)
   
}
// bind button to func
filterBtn.on("click", handleFilter);

/*
function handleChange() {
    var reversed = reverseString(this.value);
    output.text(reversed);
}
*/ 
loadData("");
