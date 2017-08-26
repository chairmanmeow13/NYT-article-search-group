var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	
url = url + "?api-key=92f4762ee77c441c8d5eac36dd57de2e";

var searchString = "hurricane";
var startDate = "20170822";
var endDate = "20170826";

url = url + "&q=" + searchString;
url = url + "&begin_date=" + "yesterday";	
url = url + "&begin_date=" + startDate;
url = url + "&end_date" + endDate;

console.log (url);


$.ajax({
	url: url,
	method: 'GET',
	}).done(function(result) {

console.log(result);
});	
