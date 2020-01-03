/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"SAPUI5_Application/SAPUI5_Application/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});