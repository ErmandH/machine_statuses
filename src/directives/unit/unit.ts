import { Directive, ElementRef } from '@angular/core';

/**
 * Generated class for the UnitDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[unit]' // Attribute selector
})
export class UnitDirective {

  constructor(private elementRef: ElementRef) {
    console.log('Hello UnitDirective Directive');
  }

}
