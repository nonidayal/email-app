/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sample/emailtest/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});