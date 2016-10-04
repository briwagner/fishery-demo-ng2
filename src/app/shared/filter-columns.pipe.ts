import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterColumns'
})
export class FilterColumnsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log(value);
    // console.log(args);
    return value.filter(obj => args.indexOf(obj.name) > -1)
  }

}
