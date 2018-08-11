// this is a link to my airtable 
var airtable_list_url = 'https://api.airtable.com/v0/appTHQ46vsqL0aC7y/Table%201?api_key=keyxun8ekWUao1b2N'

  var listView = function(id,location,city,address,store,pic,links,shopweb) {

    return `<div class="col-sm-3">
      <div class="card mb-4 box-shadow">
        <a href="donutlist.html?id=${id}"><img class="card-img-top" src="${pic}"></a>
        <div class="card-body">
          <h4><a href="donutlist.html?id=${id}">${location}</a></h4>
          <div class="d-flex justify-content-between align-items-center">
            <small class="text-muted">${location}</small>
            <h6><a href="${links}">other shops</a></h6>
          </div>
        </div>
      </div>
    </div>`;
  
  }
  
  // Get and display the data for all items
  var getDataForList = function() {
    // 1. Gets the data from the Airtable API
    $.getJSON(`https://api.airtable.com/v0/appTHQ46vsqL0aC7y/Table%201?api_key=keyxun8ekWUao1b2N `, function( data ) {
  
      // console.log(data.records);
  
      var html = [];
      html.push(`<div class="row">`);
      // 2. Iterates over every record and uses the list template
      $.each( data.records, function( index, val ) {
        // console.log(val.fields)
        var id = val.id;
        var fields = val.fields;
        var location = fields["location"];
        var pic = fields["pic"] ? fields["pic"][0].url : '';
        var city = fields["city"];
        var address = fields["address"];
        var store = fields["store"];
        var links = fields["links"];
        var shopweb = fields["shopweb"];
        var itemHTML = listView(id,location,city,address,store,pic,links,shopweb);
        html.push(itemHTML);
      });
      html.push(`</div>`);
      // 3. Adds HTML for every item to our page
      $(".list-view").append(html.join(""));
  
    });
  
  }
  // Template that generates HTML for one item in our detail view, given the parameters passed in
  
  var detailView = function(id, location,city,address,store,pic,links,shopweb) {
    return `<div class="col-sm-12">
      <div class="card mb-4 box-shadow">
        <img class="card-img-top" src="${pic}">
        <div class="card-body">
          <h2>${store}</h2>
          <p class="card-text">${location}</p>
          <p class="card-text">${city}</p>
          <p class="card-text">${address}</p>
          ${links ? `<a href="${links}">${links}</a>`: ``}
          <hr />
        </div>
      </div>
    </div>`;
  
  }
  // Get and display the data for one item based on on the ID
  
  var getDataForId = function(id) {
  
    $.getJSON( `https://api.airtable.com/v0/appTHQ46vsqL0aC7y/Table%201/${id}?api_key=${api_key}`, function( record ) {

      // console.log(data);
  
      var html = [];
      html.push(`<div class="row">`);
        // console.log(val)
        var id = record.id;
        var fields = record.fields;
        var name = fields["location"];
  
        var pic = fields["pic"] ? fields["pic"][0].url : '';
        var city = fields["city"];
        var store = fields["store"];
        var address = fields["Address"];
        var links = fields["links"];
        var shopweb = fields["shopweb"];
        var itemHTML = detailView(id, location,city,address,store,pic,links,shopweb);
        html.push(itemHTML);
      html.push(`</div>`);
      $(".detail-view").append(html.join(""));
  
    });
  
  }
  var id = getParameterByName("id");
  if (id) {
    getDataForId(id);
  } else {
    getDataForList();
  }