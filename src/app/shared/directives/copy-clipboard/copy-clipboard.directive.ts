import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({ selector: '[appCopyClipboard]' })

export class CopyClipboardDirective {

    @Input('appCopyClipboard') payload: string | undefined;
    @Output() copied = new EventEmitter<string>();
    @HostListener('click', ['$event'])

    onClick(event: MouseEvent) {

        event.preventDefault();
        if (!this.payload) {
            return;
        }

        const listener = (e: ClipboardEvent) => {
            // tslint:disable-next-line: no-angle-bracket-type-assertion
            const clipboard = e.clipboardData || (window as any)['clipboardData'];
            clipboard.setData('text', this.payload?.toString());
            e.preventDefault();

            this.copied.emit(this.payload);
        };

        document.addEventListener('copy', listener, false);
        document.execCommand('copy');
        document.removeEventListener('copy', listener, false);
    }
}
