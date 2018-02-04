"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
const events_1 = require("../common/events");
const attributes_1 = require("../common/attributes");
let MdFileInput = class MdFileInput {
    constructor(element) {
        this.element = element;
        this.mdCaption = "File";
        this.mdMultiple = false;
        this.disabled = false;
        this.mdReadonly = false;
        this.suspendUpdate = false;
        this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
    }
    attached() {
        this.mdMultiple = attributes_1.getBooleanFromAttributeValue(this.mdMultiple);
        $(this.filePath).on("change", this.handleChangeFromNativeInput);
    }
    detached() {
        $(this.element).off("change", this.handleChangeFromNativeInput);
    }
    handleChangeFromNativeInput() {
        if (!this.suspendUpdate) {
            this.suspendUpdate = true;
            events_1.fireEvent(this.filePath, "change", { files: this.files });
            events_1.fireMaterializeEvent(this.filePath, "change", { files: this.files });
            this.suspendUpdate = false;
        }
    }
};
__decorate([
    aurelia_framework_1.bindable
], MdFileInput.prototype, "mdCaption", void 0);
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
], MdFileInput.prototype, "mdMultiple", void 0);
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
], MdFileInput.prototype, "mdLabelValue", void 0);
__decorate([
    aurelia_framework_1.bindable
], MdFileInput.prototype, "disabled", void 0);
__decorate([
    aurelia_framework_1.bindable
], MdFileInput.prototype, "mdReadonly", void 0);
MdFileInput = __decorate([
    aurelia_framework_1.customElement("md-file"),
    aurelia_framework_1.autoinject
], MdFileInput);
exports.MdFileInput = MdFileInput;
