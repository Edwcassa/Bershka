import {AfterViewInit, Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appTableKeys]'
})
export class TableKeysDirective implements AfterViewInit {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        // console.log(el.nativeElement)
    }

    ngAfterViewInit() {
        const inputs = this.el.nativeElement.querySelectorAll('input');
        inputs.forEach((input: HTMLInputElement) => {
            this.renderer.listen(input, 'focus', (event: KeyboardEvent) => {
                input.select()
                // this.setFocusInput(this.el.nativeElement)
            });
            input.addEventListener('keydown', (event) => this.handleArrowKey(event));
        })
    }

    handleArrowKey(event: KeyboardEvent) {
        const focusedElement = document.activeElement;
        if (focusedElement && (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'BUTTON')) {
            const td = focusedElement.parentElement as HTMLElement;
            const currentCellIndex = (td as HTMLTableCellElement).cellIndex;
            const currentRowIndex = (td.parentElement as HTMLTableRowElement).rowIndex;
            let nextCellIndex = currentCellIndex
            let nextRowIndex = currentRowIndex

            // las celdas inician en 0 y las rows en 1

            // Manejar las flechas del teclado
            switch (event.key) {
                case 'ArrowLeft':
                    nextCellIndex = Math.max(0, currentCellIndex - 1);
                    break;
                case 'ArrowRight':
                    const maxCellIndex = (td.parentElement as HTMLTableRowElement).cells.length - 1;
                    nextCellIndex = Math.min(maxCellIndex, currentCellIndex + 1);
                    break;
                case 'ArrowUp':
                    nextRowIndex = Math.max(0, currentRowIndex - 1);
                    console.log('currentRowIndex', currentRowIndex)
                    break;
                case 'ArrowDown':
                    const table = td.closest('table');
                    if (table) {
                        const maxRowIndex = table.rows.length - 1;
                        nextRowIndex = Math.min(maxRowIndex, currentRowIndex + 1);
                    }
                    break;
                default:
                    return;
            }

            console.log("otra vex")
            console.log('next: ', nextRowIndex, ' ', nextCellIndex)


            // Obtener la siguiente celda y enfocar su input
            const table = td.closest('table');
            if (table) {
                const nextRow = table.rows[nextRowIndex];
                if (nextRow) {
                    const nextCell = (nextRow.cells[nextCellIndex] as HTMLElement);
                    if (nextCell) {
                        const input = nextCell.querySelector('input');
                        const button = nextCell.querySelector('button');
                        if (input) {
                            input.focus();
                            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                                event.preventDefault();
                            }
                        } else if (button) {
                            button.focus()
                        }
                    }
                }
            }
        }
    }

}


// setFocusInput(td: HTMLElement) {
//     const row = td.parentElement as HTMLTableRowElement;
//     const rowIndex = row.rowIndex;
//     const cellIndex = (td as HTMLTableCellElement).cellIndex;
//
//     console.log("Fila:", rowIndex, "Columna:", cellIndex);
// }


// ngAfterViewInit() {
//     const inputs = this.el.nativeElement.querySelectorAll('#body input')
//     console.log(inputs)
//     inputs.forEach((input: HTMLInputElement) => {
//         input.addEventListener('focus', () => {
//             input.select();
//         });
//
//         input.addEventListener('keydown', (event) => {
//             const row = input.closest('tr');
//             if (!row) return
//             const rowIndex = row.rowIndex;
//             const cell = input.closest('td');
//             if (!cell) return
//             const cellIndex = cell.cellIndex;
//
//             let targetInput;
//
//             switch (event.key) {
//                 case 'ArrowDown':
//                     const nextRow = row.nextElementSibling as HTMLTableRowElement;
//                     if (nextRow) {
//                         targetInput = nextRow.cells[cellIndex].querySelector('input');
//                     }
//                     break;
//                 case 'ArrowUp':
//                     const prevRow = row.previousElementSibling as HTMLTableRowElement;
//                     if (prevRow) {
//                         targetInput = prevRow.cells[cellIndex].querySelector('input');
//                     }
//                     break;
//                 case 'ArrowLeft':
//                     if (input.selectionStart === 0) {
//                         const prevCell = cell.previousElementSibling;
//                         if (prevCell) {
//                             targetInput = prevCell.querySelector('input');
//                         }
//                     }
//                     break;
//                 case 'ArrowRight':
//                     if (input.selectionEnd === input.value.length) {
//                         const nextCell = cell.nextElementSibling;
//                         if (nextCell) {
//                             targetInput = nextCell.querySelector('input');
//                         }
//                     }
//                     break;
//             }
//
//             if (targetInput) {
//                 targetInput.focus();
//                 if (event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
//                     event.preventDefault();
//                 }
//             }
//         });
//     });
// }

