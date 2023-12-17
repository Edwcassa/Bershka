import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css'
})
export class LayoutComponent {
    views = [
        {name: 'Products', path: '/products'},
    ]
}
