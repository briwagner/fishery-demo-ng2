import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTopic'
})
export class FilterTopicPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let topic = args;
    if (!topic || topic == '') {
      return value;
    } else {
      return value.filter(item => {
        return item.topic == topic;
    });
    }
  }

}
