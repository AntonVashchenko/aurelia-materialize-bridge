System.register(["aurelia-framework", "../common/attributeManager"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributeManager_1, MdPrefix;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributeManager_1_1) {
                attributeManager_1 = attributeManager_1_1;
            }
        ],
        execute: function () {
            MdPrefix = class MdPrefix {
                constructor(element) {
                    this.element = element;
                    this.attributeManager = new attributeManager_1.AttributeManager(this.element);
                }
                bind() {
                    this.attributeManager.addClasses("prefix");
                }
                unbind() {
                    this.attributeManager.removeClasses("prefix");
                }
            };
            MdPrefix = __decorate([
                aurelia_framework_1.customAttribute("md-prefix"),
                aurelia_framework_1.autoinject
            ], MdPrefix);
            exports_1("MdPrefix", MdPrefix);
        }
    };
});
