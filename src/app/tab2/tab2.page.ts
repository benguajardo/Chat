import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router,
    private firebase : FirebaseService,){}
  ngOnInit() {
    this.listar()
  }
  listaUser: any = []
  listar() {
  this.firebase.getCollection('Usuario').subscribe((Clases)=>{
  let aux = JSON.stringify(Clases)
  this.listaUser=JSON.parse(aux);
  console.log(this.listaUser)
  })
  }

}
