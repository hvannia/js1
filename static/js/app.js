var tableData = data;
var tbody = d3.select('tbody');
var filterTBox = d3.select('#datetime');
var filterBtn = d3.select('#filter-btn');

var filterType= d3.select('#filterTypeOpts');

function initialLoad(){
    tableData.forEach(row => {
        var newrow= tbody.append('tr');
        Object.values(row).forEach(x=> newrow.append('td').text(x)); 
    });
}

function handleFilter(){
    
    // get what kind of filter was selected from dropdown and fiter value:
    var ft= d3.select("#filterTypeOpts").property("value");
   
    var filterVal = filterTBox.property('value');
    // filter according to type of foliter
    switch(ft) {
        case 'date':
         var filteredCols = data.filter(x=> x.datetime == filterVal);
          break;
        case 'city':
            var filteredCols = data.filter(x=> x.city == filterVal);
          break;
        case 'state':
         var filteredCols = data.filter(x=> x.state == filterVal);
            break;
        case 'country':
         var filteredCols = data.filter(x=> x.country == filterVal);
            break;
        case 'shape':
            var filteredCols = data.filter(x=> x.shape == filterVal);
            break;
        default:
          // do nothin'
      }


    d3.select('tbody').selectAll('tr').remove();
    filteredCols.forEach(row =>{
        var newrow = tbody.append('tr');
        Object.values(row).forEach( x  => newrow.append('td').text(x));
    });
    d3.event.preventDefault();
}

initialLoad();
filterBtn.on('click',handleFilter);