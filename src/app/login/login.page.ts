import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService :AuthService,
              private router: Router,
              private formBuilder: FormBuilder
              ) { this.loginForm = this.formBuilder.group({
                email: ['', [Validators.required]],
                password: ['', [Validators.required, Validators.minLength(1)]]
              })
              
            } 

  passValue?: String
  emailValue?: String
  loginForm: FormGroup

  ngOnInit() {
    this.passValue=''
    this.emailValue=''
    this.authService.checkAuth().then((user)=>{
      if(user){
        this.router.navigate(['tab1/']);
      }
    })
    .catch((error) =>{
      console.log('Error en autenticación:',error);
    });
  }
  async login(user:any, pass: any){
    this.authService.login(user,pass);
    
  }
}
