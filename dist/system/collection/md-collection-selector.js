System.register(["aurelia-framework", "../common/attributes", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributes_1, events_1, MdCollectionSelector;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }
        ],
        execute: function () {
            MdCollectionSelector = class MdCollectionSelector {
                constructor(element) {
                    this.element = element;
                    this.mdDisabled = false;
                    this.isSelected = false;
                }
                mdDisabledChanged(newValue) {
                    this.mdDisabled = attributes_1.getBooleanFromAttributeValue(newValue);
                }
                isSelectedChanged(newValue) {
                    events_1.fireMaterializeEvent(this.element, "selection-changed", { item: this.item, isSelected: this.isSelected });
                }
            };
            __decorate([
                aurelia_framework_1.bindable,
                __metadata("design:type", Object)
            ], MdCollectionSelector.prototype, "item", void 0);
            __decorate([
                aurelia_framework_1.bindable,
                __metadata("design:type", Object)
            ], MdCollectionSelector.prototype, "mdDisabled", void 0);
            __decorate([
                aurelia_framework_1.observable,
                __metadata("design:type", Object)
            ], MdCollectionSelector.prototype, "isSelected", void 0);
            MdCollectionSelector = __decorate([
                aurelia_framework_1.customElement("md-collection-selector"),
                aurelia_framework_1.autoinject,
                __metadata("design:paramtypes", [Element])
            ], MdCollectionSelector);
            exports_1("MdCollectionSelector", MdCollectionSelector);
        }
    };
});
