/*
 * Component que permet sumar dos nombres
 * mostra con es generen esdeveniments i es controlen propietats
 * utilitza ngif
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2017
 * - Component que permet sumar dos nombres
 * 1.12.2020
 * - Actualització a Angular 11
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';

@Component({
    selector: 'aplicacio',
    template: `

    <div class="form-group">
    <input type="text" class="form-control"  placeholder="Entra nombre 1"  #n1 required>
    </div>

    <div class="form-group">
    <input type="text" class="form-control"  placeholder="Entra nombre 2"  #n2 required>
    </div>
    <button  class="btn btn-primary" (click)="sumar(n1.value, n2.value)"> suma </button> 
    <button  class="btn btn-primary" (click)="restar(n1.value, n2.value)"> resta </button>
    <div class="alert alert-primary" role="alert">
      <h3>el resultat és {{resultat}} </h3>
    </div>
      <h2 *ngIf="resultat<0">el valor es negatiu</h2>
  
    `,
    styles: ['h2 { color: #900 }']
})
export class M02_SumaComponent {
    
    resultat: number;
    
    constructor() {
        this.resultat = 0;
    }
    sumar(n1:number, n2:number): void {
        this.resultat = n1 * 1 +n2 * 1;
    }
    restar(n1:number, n2:number): void {
        this.resultat = n1 * 1 - n2 * 1;
    }

}
