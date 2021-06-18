sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sample.emailtest.controller.View1", {
		onInit: function () {

		},
		onSendMail: function () {
			// var that = this;
			Email.send({
				Host: "smtp.elasticemail.com",
				Username: "knonidayal@gmail.com",
				Password: "B595D35BDA4783A4799D5C224C5A4577DB1B",
				To: "nonidalal32@gmail.com",
				From: "knonidayal@gmail.com",
				Subject: "Selected tab is " +
					this.getView().byId("idIconTabBarNoIcons").getSelectedKey(),
				Body: "And this is the body",
			}.bind(this)).then((message) => alert(message));
		}
	});
});