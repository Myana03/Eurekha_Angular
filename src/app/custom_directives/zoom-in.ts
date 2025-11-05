import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomIn]'
})
export class ZoomIn {

  constructor(private ele:ElementRef) {
    console.log(ele)
   }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.ele.nativeElement.style.transform = 'scale(1.1)';
    this.ele.nativeElement.style.transition = 'transform 0.3s ease';
    //this.ele.nativeElement.style.transform='scale(120%,130%)';
  }
  
   @HostListener('mouseleave')
  onMouseLeave(){
    //this.ele.nativeElement.style.transform='scale(100%)';
    this.ele.nativeElement.style.transform = 'scale(1)';
  }



}
