"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdDropdownElement = /** @class */ (function () {
    function MdDropdownElement(element) {
        this.element = element;
        this.alignment = "left";
        this.autoTrigger = false;
        this.constrainWidth = true;
        this.container = null;
        this.coverTrigger = false;
        this.closeOnClick = true;
        this.hover = false;
        this.inDuration = 300;
        this.outDuration = 225;
        this.controlId = "md-dropdown-" + MdDropdownElement_1.id++;
    }
    MdDropdownElement_1 = MdDropdownElement;
    MdDropdownElement.prototype.attached = function () {
        var _this = this;
        this.instance = new M.Dropdown(this.element, {
            alignment: this.alignment,
            autoTrigger: this.autoTrigger,
            constrainWidth: this.constrainWidth,
            container: this.container,
            coverTrigger: this.coverTrigger,
            closeOnClick: this.closeOnClick,
            hover: this.hover,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            onOpenStart: function () { return au.fireMaterializeEvent(_this.element, "open-start"); },
            onOpenEnd: function () { return au.fireMaterializeEvent(_this.element, "open-end"); },
            onCloseStart: function () { return au.fireMaterializeEvent(_this.element, "close-start"); },
            onCloseEnd: function () { return au.fireMaterializeEvent(_this.element, "close-end"); }
        });
    };
    MdDropdownElement.prototype.detached = function () {
        if (this.instance) {
            this.instance.destroy();
        }
    };
    MdDropdownElement.prototype.open = function () {
        if (this.instance) {
            this.instance.open();
        }
    };
    MdDropdownElement.prototype.close = function () {
        if (this.instance) {
            this.instance.close();
        }
    };
    MdDropdownElement.prototype.recalculateDimensions = function () {
        if (this.instance) {
            this.instance.recalculateDimensions();
        }
    };
    MdDropdownElement.id = 0;
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdDropdownElement.prototype, "alignment", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDropdownElement.prototype, "autoTrigger", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDropdownElement.prototype, "constrainWidth", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Element)
    ], MdDropdownElement.prototype, "container", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDropdownElement.prototype, "coverTrigger", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDropdownElement.prototype, "closeOnClick", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDropdownElement.prototype, "hover", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdDropdownElement.prototype, "mdTitle", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdDropdownElement.prototype, "inDuration", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdDropdownElement.prototype, "outDuration", void 0);
    MdDropdownElement = MdDropdownElement_1 = tslib_1.__decorate([
        au.customElement("md-dropdown"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdDropdownElement);
    return MdDropdownElement;
    var MdDropdownElement_1;
}());
exports.MdDropdownElement = MdDropdownElement;
//# sourceMappingURL=dropdown-element.js.map