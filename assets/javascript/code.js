var queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election";

var apiKey = "&api-key=WLf22500vU4LEWrjmQIDk4uSX5bTog1u";

$.ajax({
  url: queryURL + apiKey,

  method: "GET"
}).then(function(response) {
  var results = response.data;
  console.log(results);
});
