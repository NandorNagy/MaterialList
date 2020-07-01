function initModel() {
	var sUrl = "/IDES/sap/opu/odata/SAP/ZNN_MATERIAL_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}