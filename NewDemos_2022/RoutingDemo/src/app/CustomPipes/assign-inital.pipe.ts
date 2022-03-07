import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assignInital'
})
export class AssignInitalPipe implements PipeTransform {

  transform(name: string, gender): string {
    if (gender.toLowerCase() === 'male') {
      return 'Mr.' + name;
    } else {
      return 'Ms.' + name;
    }



  }


}
