// this is a link to my airtable 
var airtable_list_url = https://api.airtable.com/v0/appTHQ46vsqL0aC7y/Table%201?api_key=keyxun8ekWUao1b2N

$.getJSON( airtable_list_url, function( data ) {
    +  var items = [];
    +  $.each( data.records, function( key, val ) {
    +    console.log(val.fields)
    +    items.push(`<h2>${val.fields['Name']}</h2>`);
    +  });
    +  $(".list-view").append(items.join(''));
    +});