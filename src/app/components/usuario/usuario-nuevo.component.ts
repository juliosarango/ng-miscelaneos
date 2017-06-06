import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo Works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private activatedRoute:ActivatedRoute ) {
    //sacar los datos de los parametros
    this.activatedRoute.parent.params.subscribe ( params => {
      console.log(params);
    } )
  }

  ngOnInit() {
  }

}
