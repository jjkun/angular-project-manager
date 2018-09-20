import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomUsername]'
})
export class AppCustomUsernameDirective {

  constructor(private element: ElementRef) { 
    console.log(element);
  }

  @HostListener('input', ['$event'])
  onkeydown(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    const cleanText = input.value;
    if(cleanText.length > 0) {
      input.value = cleanText.replace(/\s+/g,'');
    }
  }

}
