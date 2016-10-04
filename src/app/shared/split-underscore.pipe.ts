import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitUnderscore'
})
export class SplitUnderscorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split("_").join(" ");
  }

}
