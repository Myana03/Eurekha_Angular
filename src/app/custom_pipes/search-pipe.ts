import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees:any[],searchtext:String){
    const search=searchtext.toLowerCase();

    return employees.filter(emp=>emp.name.toLowerCase().includes(search));
  }

}
