var fullProfile = {};

fullProfile.controller = function() {

	this.name_profile = m.request({method: "GET", url: "/json/e2c9k.json"}).then(function(list){
		return list.profile.fullname;
	});

	this.about_profile = m.request({method: "GET", url: "/json/e2c9k.json"}).then(function(list){
		return list.profile.absolute_url;
	});

	this.twitter_profile = m.request({method: "GET", url: "/json/e2c9k.json"}).then(function(list){
		return list.profile.gravatar_url;
	});

	this.name_edit = m.request({method: "GET", url: "/json/e2c9k.json"}).then(function(list){
		return list.profile.fullname;
	});

	this.about_edit = m.request({method: "GET", url: "/json/e2c9k.json"}).then(function(list){
		return list.profile.absolute_url;
	});

	this.twitter_edit = m.request({method: "GET", url: "/json/e2c9k.json"}).then(function(list){
		return list.profile.gravatar_url;
	});
	
	this.edit = function(){
		document.getElementById("profile_view").style.display="none";
		document.getElementById("edit_view").style.display="";
	}

	this.save = function(){
		this.name_profile(this.name_edit());
		this.about_profile(this.about_edit());
		this.twitter_profile(this.twitter_edit());
	}.bind(this);

	this.close = function(){
		document.getElementById("profile_view").style.display="";
		document.getElementById("edit_view").style.display="none";
	}
}

fullProfile.view = function(ctrl){
	return [
		m("#profile_view", [
			m("table", [			
				m("tr", [
					m("td", [
						m("#name", "Name: ")
					]),
					m("td", [
						m("#name_field", ctrl.name_profile())
					]),
				]),

				m("tr", [
					m("td", [
						m("#about", "About: ")
					]),

					m("td", [
						m("#about_field", ctrl.about_profile())
					]),
				]),

				m("tr", [
					m("td", [
						m("#twitter", "Twitter: ")
					]),
					m("td", [
						m("#twitter_field", ctrl.twitter_profile())
					]),
				])
			]),
			m("button", {onclick : ctrl.edit}, "Edit"),
		]),

		m("#edit_view", {style: {display: "none"}}, [
			m("table", [			
				m("tr", [
					m("td", [
						m("#name_edit", "Name: ")
					]),
					m("td", [
						m("input", {onchange: m.withAttr("value", ctrl.name_edit), value: ctrl.name_edit()})
					]),
				]),

				m("tr", [
					m("td", [
						m("#about_edit", "About: ")
					]),

					m("td", [
						m("textarea", {onchange: m.withAttr("value", ctrl.about_edit), value: ctrl.about_edit()})
					]),
				]),

				m("tr", [
					m("td", [
						m("#twitter_edit", "Twitter: ")
					]),

					m("td", [
						m("input", {onchange: m.withAttr("value", ctrl.twitter_edit), value: ctrl.twitter_edit()})
					]),
				])
			]),
			m("button", {onclick : ctrl.save}, "Save"),
			m("button", {onclick : ctrl.close}, "Close")	
		])
	];
};

//initializes the application
m.module(document.body, fullProfile);