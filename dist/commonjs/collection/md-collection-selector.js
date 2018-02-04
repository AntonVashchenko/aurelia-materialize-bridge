"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
const attributes_1 = require("../common/attributes");
const events_1 = require("../common/events");
let MdCollectionSelector = class MdCollectionSelector {
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
    aurelia_framework_1.bindable
], MdCollectionSelector.prototype, "item", void 0);
__decorate([
    aurelia_framework_1.bindable
], MdCollectionSelector.prototype, "mdDisabled", void 0);
__decorate([
    aurelia_framework_1.observable
], MdCollectionSelector.prototype, "isSelected", void 0);
MdCollectionSelector = __decorate([
    aurelia_framework_1.customElement("md-collection-selector"),
    aurelia_framework_1.autoinject
], MdCollectionSelector);
exports.MdCollectionSelector = MdCollectionSelector;
