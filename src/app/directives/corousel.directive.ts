import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCorouselNext]'
})
export class CorouselDirective implements AfterViewInit {

  constructor(private element: ElementRef) { }
  ngAfterViewInit(): void {

    setTimeout(() => {
      const nextButton = this.element.nativeElement as HTMLElement;
      const nextButtonIsDisabled = nextButton.hasAttribute('disabled');
      setInterval(() =>{ 
        if(!nextButtonIsDisabled){
          nextButton.click()
        }
       }, 4000);
  }, 1000);
}

}