import { OnInit, ElementRef, Input, Directive } from '@angular/core';

@Directive({ selector: '[focuMe]' })
export class FocusDirective implements OnInit {

    @Input('focuMe') isFocused=true;

    constructor(private hostElement: ElementRef) { }

    ngOnInit() {
        if (this.isFocused) {
            this.hostElement.nativeElement.focus();
        }
    }
}