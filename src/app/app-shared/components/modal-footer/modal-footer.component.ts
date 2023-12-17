import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'app-modal-footer',
	templateUrl: './modal-footer.component.html',
	styleUrl: './modal-footer.component.css'
})
export class ModalFooterComponent implements OnInit, AfterViewInit {
	// Loading
	@Input() loading: boolean = true
	@Input() view: boolean = false

	// Icon save button
	@Input() iconSaveButton: string = 'fa fa-floppy-o'
	@Input() showCreateButtons: boolean = true
	// Text of buttons
	@Input() nameViewButton: string = 'Cerrar'
	@Input() nameCloseButton: string = 'Cancelar'
	@Input() nameSaveButton: string = 'Guardar'
	@Input() nameUpdateButton: string = 'Actualizar'
	// Hidden options
	@Input() hideCloseButton: boolean = false
	@Input() hideSaveButton: boolean = false
	@Input() hideUpdateButton: boolean = false
	// Disable options
	@Input() disableCloseButton: boolean = false
	@Input() disableSaveButton: boolean = false
	@Input() disableUpdateButton: boolean = false
	// Attributes
	@Input() formValid: boolean = false
	formDirtyStart: boolean = true
	points: string = ''
	// Event emitters
	@Output() clickCloseButton: EventEmitter<any> = new EventEmitter<any>()
	@Output() clickSaveButton: EventEmitter<any> = new EventEmitter<any>()
	@Output() clickUpdateButton: EventEmitter<any> = new EventEmitter<any>()
	@ViewChild('containerFooter') container: ElementRef | undefined
	widthModal: number = 0

	constructor() {
	}

	ngOnInit(): void {
	}

	onSave() {
		this.changeValueOfFormDirtyStart()
		this.clickSaveButton.emit()
	}

	onUpdate() {
		this.changeValueOfFormDirtyStart()
		this.clickUpdateButton.emit()
	}

	changeValueOfFormDirtyStart() {
		this.formDirtyStart = false
	}

	onClose() {
		this.clickCloseButton.emit()
	}

	ngAfterViewInit(): void {
		this.widthModal = (this.container?.nativeElement as HTMLElement).offsetWidth
	}

	getColumnSize(): string {
		return this.container?.nativeElement.offsetWidth < 300 ? '12 d-flex justify-content-center' : '6';
	}
}
