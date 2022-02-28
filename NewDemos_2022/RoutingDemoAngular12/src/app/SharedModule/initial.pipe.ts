import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initial'
})
export class InitialPipe implements PipeTransform {

  transform(name: string, gender:any): string {
    if (gender.toLowerCase() === 'male') {
      return 'Mr.' + name;
    } else {
      return 'Ms.' + name;
    }
}
}