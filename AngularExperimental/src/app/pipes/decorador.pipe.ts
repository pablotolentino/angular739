import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorador',
  pure: true
})
export class DecoradorPipe implements PipeTransform {

  transform(value: any, decorador: any) {

    return decorador + value + decorador;
  }

}
