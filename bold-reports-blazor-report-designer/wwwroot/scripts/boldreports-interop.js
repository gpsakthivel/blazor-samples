// Interop file to render the Bold Report Designer component with properties.
window.BoldReports = {
    RenderDesigner: function (elementID, reportDesignerOptions) {
        $("#" + elementID).boldReportDesigner({
            serviceUrl: reportDesignerOptions.serviceURL
        });
    }
}