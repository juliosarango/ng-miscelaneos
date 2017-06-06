import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elRef:ElementRef) {
    console.log("directiva llamada");

    //elRef.nativeElement.style.backgroundColor = "yellow";
   }

   @Input ('appResaltado') nuevoColor:string;

   // Manejamos los eventos del mouse del html
   @HostListener('mouseenter') mouseEntro() {
     //this.elRef.nativeElement.style.backgroundColor = "yellow";
     this.resaltar( this.nuevoColor || 'yellow' );
   }

   @HostListener('mouseleave') mouseSale() {
     //this.elRef.nativeElement.style.backgroundColor = null;
     this.resaltar( null )
   }

   private resaltar( color:string){
     this.elRef.nativeElement.style.backgroundColor = color;
   }



}
