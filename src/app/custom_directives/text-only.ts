import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextOnly]'
})
export class TextOnly {
@HostBinding('style.background-color')
myBgColor:String='';

@HostListener('keyup',['$event'])

handleKeyUp(event:any){
  let regex=new RegExp(/^[a-z A-Z]+$/);
  if(regex.test(event.target.value)){
    this.myBgColor='cyan';
  }else{
    this.myBgColor='red'
  }
}
}
