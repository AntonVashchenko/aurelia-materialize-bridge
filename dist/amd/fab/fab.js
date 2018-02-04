var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../common/attributes"], function (require, exports, aurelia_framework_1, attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdFab = class MdFab {
        constructor() {
            this.mdFixed = false;
            this.mdLarge = false;
        }
        attached() {
            this.mdFixed = attributes_1.getBooleanFromAttributeValue(this.mdFixed);
            this.mdLarge = attributes_1.getBooleanFromAttributeValue(this.mdLarge);
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], MdFab.prototype, "mdFixed", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], MdFab.prototype, "mdLarge", void 0);
    MdFab = __decorate([
        aurelia_framework_1.customElement("md-fab"),
        aurelia_framework_1.autoinject
    ], MdFab);
    exports.MdFab = MdFab;
});
