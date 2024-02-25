import { Pipe, PipeTransform, Injectable } from '@angular/core';

/**
 * Generated class for the PipesUnitPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'unit',
})
@Injectable()
export class PipesUnitPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, unit: string) {
    return  `${value} ${unit}`
  }
}
