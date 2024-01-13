import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router,
              private firebase : FirebaseService,)
               {}

  // listar() {
  //   this.firestore.getClases('Clases').subscribe((Clases)=>{
  //     let aux = JSON.stringify(Clases)
  //     this.listaClases=JSON.parse(aux);
  //     console.log(this.listaClases[0])
  //   })
  // }

}
