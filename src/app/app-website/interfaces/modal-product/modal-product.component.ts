import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalHeaderComponent} from "../../../app-shared/components/modal-header/modal-header.component";
import {ModalFooterComponent} from "../../../app-shared/components/modal-footer/modal-footer.component";

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrl: './modal-product.component.css'
})
export class ModalProductComponent {

  constructor(private readonly modal: NgbActiveModal
  ) {
  }

  closeModal(reason: any = null) {
    this.modal.close(reason)
  }
}
