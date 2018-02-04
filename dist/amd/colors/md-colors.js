var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdColors = class MdColors {
        constructor() {
            this.mdErrorColor = "#F44336";
            this.mdSuccessColor = "#26a69a";
        }
    };
    __decorate([
        aurelia_framework_1.bindable
    ], MdColors.prototype, "mdPrimaryColor", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdColors.prototype, "mdAccentColor", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdColors.prototype, "mdErrorColor", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdColors.prototype, "mdSuccessColor", void 0);
    MdColors = __decorate([
        aurelia_framework_1.customElement("md-colors")
    ], MdColors);
    exports.MdColors = MdColors;
});
