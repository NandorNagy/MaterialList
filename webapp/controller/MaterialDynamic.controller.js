sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("FioriEducation.FirstProject.controller.MaterialDynamic", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf FioriEducation.FirstProject.view.MaterialDynamic
		 */
		onInit: function () {
			var oData = {
				Materials: [{
					Material: "Material1",
					Price: 123,
					Color: "Red",
					Size: "11*11"
				}, {
					Material: "Material2",
					Price: 4567,
					Color: "Blue",
					Size: "12*12"
				} ]
			};
			var oJSONModel = new sap.ui.model.json.JSONModel(oData);
			var oView = this.getView();
			oView.setModel(oJSONModel, "MaterialModel");
		},
		formatState: function(sColor) {
			if(sColor === "Red"){
				return "Success";
			}
			else{
				return "Error";
			}
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf FioriEducation.FirstProject.view.MaterialDynamic
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf FioriEducation.FirstProject.view.MaterialDynamic
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf FioriEducation.FirstProject.view.MaterialDynamic
		 */
		//	onExit: function() {
		//
		//	}

	});

});