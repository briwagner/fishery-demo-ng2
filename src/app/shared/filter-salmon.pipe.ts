import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSalmon',
})
export class FilterSalmonPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let code = args;
    if (code) {
      return value.filter(row => row.pacfin_code == code.toUpperCase());
    } else {
      return value;
    }
  }

}
