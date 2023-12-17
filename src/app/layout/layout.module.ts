import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {LayoutComponent} from "./layout.component";


@NgModule({
    declarations: [LayoutComponent],
    imports: [
        RouterOutlet,
        CommonModule,
        RouterLink
    ],
    exports: [LayoutComponent],
})
export class LayoutModule {
}
