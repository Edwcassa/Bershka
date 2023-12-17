import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalFooterComponent} from "./components/modal-footer/modal-footer.component";
import {ModalHeaderComponent} from "./components/modal-header/modal-header.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    declarations: [ModalFooterComponent, ModalHeaderComponent],
    imports: [
        BrowserModule,
        CommonModule
    ],
    exports: [ModalFooterComponent, ModalHeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppSharedModule {
}
