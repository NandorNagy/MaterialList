sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("FioriEducation.FirstProject.controller.MaterialFromBackendViaOdata", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf FioriEducation.FirstProject.view.MaterialFromBackendViaOdata
		 */
		onInit: function () {

		},
		onListItemPress: function (oEvent){
			
			var oContext = oEvent.getSource().getBindingContext("OdataMaterialModel");
			var oModel   = oContext.getModel();
		    var sPath    = oContext.getPath();
		    var oMaterial = oModel.getProperty(sPath);
		    var sMatnr = oMaterial.Matnr;
		    
		    var oRouter = this.getOwnerComponent().getRouter();
		    var oParam  = {Matnr: sMatnr};
			oRouter.navTo("MaterialPlantFromBackendViaOdata",oParam);
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf FioriEducation.FirstProject.view.MaterialFromBackendViaOdata
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf FioriEducation.FirstProject.view.MaterialFromBackendViaOdata
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf FioriEducation.FirstProject.view.MaterialFromBackendViaOdata
		 */
		//	onExit: function() {
		//
		//	}

	});

});