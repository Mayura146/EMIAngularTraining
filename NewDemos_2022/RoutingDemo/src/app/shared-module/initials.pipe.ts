import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(name: string, gender): string {
    if (gender.toLowerCase() === 'male') {
      return 'Mr.' + name;
    } else {
      return 'Ms.' + name;
    }



  }

}
