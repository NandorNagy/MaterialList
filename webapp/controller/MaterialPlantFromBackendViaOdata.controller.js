sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("FioriEducation.FirstProject.controller.MaterialPlantFromBackendViaOdata", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf FioriEducation.FirstProject.view.MaterialPlantFromBackendViaOdata
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("MaterialPlantFromBackendViaOdata").attachPatternMatched(this._onObjectMatched, this);

			var oData = {
				Material_Plant: []
			};

			var oJSONModel = new sap.ui.model.json.JSONModel(oData);
			var oView = this.getView();
			oView.setModel(oJSONModel, "MaterialModel");
		},

		_onObjectMatched: function (oEvent) {
			var oParam = oEvent.getParameter("arguments");

			var oMaterialModel = this.getOwnerComponent().getModel("OdataMaterialModel");

			var oFilter = new sap.ui.model.Filter({
				path: "Matnr",
				operator: FilterOperator.EQ,
				value1: oParam.Matnr
			});

	/*		var oFilter = new sap.ui.model.Filter({
				filters: [
					new Filter({path: 'Quantity', operator: FilterOperator.LT, value1: 20 }),
					new Filter({path: 'Price', operator: FilterOperator.GT, value1: 14.0 })
				],
				and: true
			})*/

			var oParams = {
				filters: [oFilter],
				success: jQuery.proxy(this.fIsSuccess, this),
				error: jQuery.proxy(this.fIsError, this)
			};

			oMaterialModel.read("/Material_PlantSet", oParams);

		},
		fIsSuccess: function (oReturnData) {
			
			var oView = this.getView();
			var oModel = oView.getModel("MaterialModel");
			oModel.setProperty("/Material_Plant", oReturnData.results);
			
		},
		fIsError: function (oErrorData) {

			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf FioriEducation.FirstProject.view.MaterialPlantFromBackendViaOdata
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf FioriEducation.FirstProject.view.MaterialPlantFromBackendViaOdata
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf FioriEducation.FirstProject.view.MaterialPlantFromBackendViaOdata
		 */
		//	onExit: function() {
		//
		//	}

	});

});