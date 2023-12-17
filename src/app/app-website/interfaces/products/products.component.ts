import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalProductComponent} from '../modal-product/modal-product.component';
import {ProductsUsecase} from '../../domain/products.usecase';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

    products: any[] = []

    constructor(private readonly modalService: NgbModal,
                private readonly productsUsecase: ProductsUsecase) {
    }

    async ngOnInit() {
        await this.getProducts()
    }

    async getProducts() {
        const response = await this.productsUsecase.getProducts()
        this.products = response.data || []
    }

    async openModalProducts(item = null) {
        const modalRef = this.modalService.open(ModalProductComponent, {
            windowClass: 'theme-mcs',
            ariaLabelledBy: 'modal-basic-title',
            size: 'md',
            backdrop: 'static'
        })
        modalRef.componentInstance.product = item
        const resp = await modalRef.result
        if (resp === 'success') {
            await this.getProducts()
        }
    }
}
