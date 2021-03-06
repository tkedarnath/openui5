sap.ui.define( ["sap/ui/core/UIComponent"], function (UIComponent) {
	"use strict";
	return UIComponent.extend("sap.ui.core.sample.TargetsStandalone.targetsApp.Component", {

		metadata: {
			rootView: "targets.view.App",
			routing: {
				config: {
					targetsClass: "sap.m.routing.Targets",
					viewPath: "targets.view",
					controlId: "rootControl",
					controlAggregation: "pages",
					viewType: "XML"
				},
				targets: {
					page1: {
						viewName: "View1"
					},
					page2: {
						viewName: "View2"
					}
				}
			}
		},

		init : function () {
			UIComponent.prototype.init.apply(this, arguments);

			// Display the initial target
			this.getTargets().display("page1");
		}

	});
}, /* bExport= */ true);
