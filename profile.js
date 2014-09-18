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
	this.name = m.prop("");
	this.about = m.prop("");
	this.twitter = m.prop("");
}

//View
profile.view = function(ctrl){
	return m("html", [
		m("body", [
			m("table", [
				
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
			])
		])
	]);
};

//initializes the application
m.module(document, profile);