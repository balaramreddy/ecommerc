import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNameValidation]',
})
export class NameValidationDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;
    // Perform replacements
    value = value.replace(/\s+/g, ' ').replace(/[^a-zA-Z ]/g, '');
    // Capitalize words
    value = this.capatalizedwords(value);
    // Update the input value
    input.value = value;
  }
  capatalizedwords(inputstring: any) {
    return inputstring.toLowerCase().replace(/\b\w/g, (val: any) => val.toUpperCase());
  }
}
