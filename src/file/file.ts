import * as au from "../aurelia";

@au.customElement("md-file")
@au.autoinject
export class MdFileInput {
	constructor(private element: Element) { }

	@au.ato.bindable.stringMd
	mdCaption = "File";

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdMultiple: boolean = false;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.twoWay })
	mdLabelValue: string = "";

	@au.ato.bindable.booleanMd
	disabled: boolean = false;

	@au.ato.bindable.booleanMd
	mdReadonly: boolean = false;

	filePath: HTMLInputElement;

	files: FileList;

	suspendUpdate = false;

	attached() {
		this.filePath.addEventListener("change", this.handleChangeFromNativeInput);
	}

	detached() {
		this.filePath.removeEventListener("change", this.handleChangeFromNativeInput);
	}

	handleChangeFromNativeInput = () => {
		if (!this.suspendUpdate) {
			this.suspendUpdate = true;
			au.fireEvent(this.filePath, "change", { files: this.files });
			au.fireMaterializeEvent(this.filePath, "change", { files: this.files });
			this.suspendUpdate = false;
		}
	}
}
