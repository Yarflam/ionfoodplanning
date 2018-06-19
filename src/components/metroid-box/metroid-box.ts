import { Component } from '@angular/core';

/**
 * Generated class for the MetroidBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'metroid-box',
  templateUrl: 'metroid-box.html'
})
export class MetroidBoxComponent {

  text: string;

  constructor() {
    console.log('Hello MetroidBoxComponent Component');
    this.text = 'Hello World';
  }

}
