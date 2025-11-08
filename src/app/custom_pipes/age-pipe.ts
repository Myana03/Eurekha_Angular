import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

transform(input:any){
  if(!input) return '';
  const birthdate=new Date(input);
  const today=new Date();

  let age=today.getFullYear()-birthdate.getFullYear();

  return `${age} years old`
}
}
