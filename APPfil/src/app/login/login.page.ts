import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public service: ServicesService,
    public router: Router,
    public firestore: AngularFirestore,
  ) { }

  ngOnInit() {
  }

  login(form: NgForm){
    console.log(form.value["email"]);
    this.service.connexion(form.value['email'], form.value['password']).then(user=>{
      if(user){
        this.router.navigate(['/acceuil']);
      }
    });

  }

}
