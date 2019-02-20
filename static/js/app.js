var tableData = data;
var tbody = d3.select('tbody');
var filterTBox = d3.select('#datetime');
var filterBtn = d3.select('#filter-btn');


function initialLoad(){
    tableData.forEach(row => {
        var newrow= tbody.append('tr');
        Object.values(row).forEach(x=> newrow.append('td').text(x)); 
    });
}

function handleFilter(){
    d3.event.preventDefault();
    var filterVal = filterTBox.property('value');
    var filteredCols = data.filter(x=> x.datetime == filterVal);
    d3.select('tbody').selectAll('tr').remove();
    filteredCols.forEach(row =>{
        var newrow = tbody.append('tr');
        Object.values(row).forEach( x  => newrow.append('td').text(x));
    });
}

initialLoad();
filterBtn.on('click',handleFilter);