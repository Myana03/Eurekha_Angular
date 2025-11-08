import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {
  
 transform(input:any){
const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

let res='';
  if(input<=0){
    return res;
  }
  for(let i=0; i< values.length;i++){
    while(input>=values[i]){
      res=res + symbols[i];
      input=input-values[i];
    }
  }
return res;
 }

}
