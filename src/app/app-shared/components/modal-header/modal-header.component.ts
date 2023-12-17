import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrl: './modal-header.component.css'
})
export class ModalHeaderComponent {
  @Input() title: string = ''
  @Output() clickCloseButton: EventEmitter<any> = new EventEmitter<any>()

  onClose(result: any = null) {
    this.clickCloseButton.emit()
  }
}
