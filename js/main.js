//Module Name: todo
var profile = {};

//Two Models of todo
profile.Profile = function(data){
	this.name = m.prop(data.name);
	this.about = m.prop(data.about);
	this.twitter = m.prop(data.twitter);
};

//Controller
profile.controller = function(){

	//Issues with CORS/Access-Control so I used another method so that I could test this at least
	/*var query = 'https://osf.io/api/v1/profile/e2c9k/'
	var queryUrl = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22' + encodeURIComponent(query) + '%22&format=json&callback=?'

	$.getJSON(queryUrl, function (res) {
	    console.log(res);
	    console.log(res.query.results.json.profile.fullname);
	    console.log(res.query.results.json.profile.display_absolute_url);
	});*/
	/*m.request({method: "POST", url:queryUrl, config: publicAPI}).then(test);
	console.log(test);*/

	this.name = m.prop("");
	this.about = m.prop("");
	this.twitter = m.prop("");

	var test = m.prop([]);
	var publicAPI = function(xhr) {xhr.responseText}
}

//View
profile.view = function(ctrl){
	return m("table", [			
			m("tr", [
				m("td", [
					m("#name", "Name: ")
				]),
				//m("td", {value: ctrl.name()}),
				m("td", "Faye Huynh"),
			]),

			m("tr", [
				m("td", [
					m("#about", "About: ")
				]),
				//m("td", {value: ctrl.about()}),
				m("td", "About me!"),
			]),

			m("tr", [
				m("td", [
					m("#twitter", "Twitter: ")
				]),
				//m("td", {value: ctrl.twitter()}),
				m("td", "TwitterName"),
			])
		]);
};

//initializes the application
m.module(document.body, profile);