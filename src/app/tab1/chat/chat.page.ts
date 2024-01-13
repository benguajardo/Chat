import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.getId()
  }
  getId() {
    let url = this.router.url
    let aux = url.split("/",3)
    let id = aux[2]
    return id
  }
}
