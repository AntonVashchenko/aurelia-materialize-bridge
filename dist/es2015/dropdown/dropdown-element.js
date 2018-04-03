var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
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
            belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
            constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
            gutter: parseInt(this.gutter.toString(), 10),
            hover: getBooleanFromAttributeValue(this.hover),
            inDuration: parseInt(this.inDuration.toString(), 10),
            outDuration: parseInt(this.outDuration.toString(), 10),
            stopPropagation: getBooleanFromAttributeValue(this.stopPropagation)
        });
    }
};
MdDropdownElement.id = 0;
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", String)
], MdDropdownElement.prototype, "alignment", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdownElement.prototype, "belowOrigin", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdownElement.prototype, "constrainWidth", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Number)
], MdDropdownElement.prototype, "gutter", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdownElement.prototype, "hover", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", String)
], MdDropdownElement.prototype, "mdTitle", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdownElement.prototype, "inDuration", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdownElement.prototype, "outDuration", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdownElement.prototype, "stopPropagation", void 0);
MdDropdownElement = MdDropdownElement_1 = __decorate([
    customElement("md-dropdown"),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdDropdownElement);
export { MdDropdownElement };
var MdDropdownElement_1;