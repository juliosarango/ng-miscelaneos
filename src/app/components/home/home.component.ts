import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-clases></app-clases>

  <h1>Directivas personalizadas</h1>
  <p [appResaltado]="'blue'">
    Directivas personalizadas
  </p>


  <app-ng-switch></app-ng-switch>
  
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
