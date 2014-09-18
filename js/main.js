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

	this.name = m.request({method: "GET", url: "/json/e2c9k.json"}).then(function(list){
		return list.profile.fullname;
	});

	this.about = m.request({method: "GET", url: "/json/e2c9k.json"}).then(function(list){
		return list.profile.absolute_url;
	});
	this.twitter = m.request({method: "GET", url: "/json/e2c9k.json"}).then(function(list){
		return list.profile.gravatar_url;
	});

	//console.log(name());
}

//View
profile.view = function(ctrl){
	return m("table", [			
			m("tr", [
				m("td", [
					m("#name", "Name: ")
				]),
				m("td", ctrl.name()),
				//m("td", "Faye Huynh"),
			]),

			m("tr", [
				m("td", [
					m("#about", "About: ")
				]),

				m("td", "This is the link to my OSF page (" + ctrl.about() + ")"),
				//m("td", "About me!"),
			]),

			m("tr", [
				m("td", [
					m("#twitter", "Twitter: ")
				]),
				m("td", "This is the link to my gravatar (" + ctrl.twitter() + ")"),
				//m("td", "TwitterName"),
			])
		]);
};

//initializes the application
m.module(document.body, profile);