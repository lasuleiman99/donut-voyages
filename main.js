// this is a link to my airtable 
var airtable_list_url = https://api.airtable.com/v0/appTHQ46vsqL0aC7y/Table%201?api_key=keyxun8ekWUao1b2N
var cardTemplate = function (location,city,address,name of location,picture,links,shop link) {
  return ``
}



$.getJSON( airtable_list_url, function( data ) {
    var items = [];
    $.each( data.records, function( key, val ) {
      // console.log(val.fields)
      var name = val.fields['Name'];
      var address = val.fields['Address'];
      var picture = val.fields['Pictures'][0] ? val.fields['Pictures'][0].url : null;
     // var html = cardTemplate(name, address, picture);
      items.push(html);
    });
    $(".list-view").append(items.join(''));
  });