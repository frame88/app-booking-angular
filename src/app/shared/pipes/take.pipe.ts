import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'take'
})
export class TakePipe implements PipeTransform {

  transform(value: string[]) {
    if(value.length > 4 ){
      value.splice(1, 1)
    };
    return value
  }

}
