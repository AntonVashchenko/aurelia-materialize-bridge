var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "../common/attributes"], function (require, exports, aurelia_framework_1, attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdDropdownElement = MdDropdownElement_1 = class MdDropdownElement {
        constructor(element) {
            this.element = element;
            this.alignment = "left";
            this.belowOrigin = false;
            this.constrainWidth = true;
            this.gutter = 0;
            this.hover = false;
            this.inDuration = 300;
            this.outDuration = 225;
            this.stopPropagation = false;
            this.controlId = `md-dropdown-${MdDropdownElement_1.id++}`;
        }
        attached() {
            $(this.element).dropdown({
                alignment: this.alignment,
                belowOrigin: attributes_1.getBooleanFromAttributeValue(this.belowOrigin),
                constrain_width: attributes_1.getBooleanFromAttributeValue(this.constrainWidth),
                gutter: parseInt(this.gutter.toString(), 10),
                hover: attributes_1.getBooleanFromAttributeValue(this.hover),
                inDuration: parseInt(this.inDuration.toString(), 10),
                outDuration: parseInt(this.outDuration.toString(), 10),
                stopPropagation: attributes_1.getBooleanFromAttributeValue(this.stopPropagation)
            });
        }
    };
    MdDropdownElement.id = 0;
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdownElement.prototype, "alignment", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdownElement.prototype, "belowOrigin", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdownElement.prototype, "constrainWidth", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdownElement.prototype, "gutter", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdownElement.prototype, "hover", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdownElement.prototype, "mdTitle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdownElement.prototype, "inDuration", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdownElement.prototype, "outDuration", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdownElement.prototype, "stopPropagation", void 0);
    MdDropdownElement = MdDropdownElement_1 = __decorate([
        aurelia_framework_1.customElement("md-dropdown"),
        aurelia_framework_1.autoinject
    ], MdDropdownElement);
    exports.MdDropdownElement = MdDropdownElement;
    var MdDropdownElement_1;
});
