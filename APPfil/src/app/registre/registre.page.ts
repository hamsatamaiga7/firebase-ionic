import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit {

  profile: any;
  constructor(
    public service: ServicesService,
    public router: Router,
    public firestore: AngularFirestore,
  ) { }

  ngOnInit() {
  }

  inscription(form: NgForm){
    console.log(form.value['email'], form.value['password']);
    this.service.inscriptionuser(form.value['email'], form.value['password'])
    .then((reponse) => {
      this.profile = this.firestore.collection('profile').doc(reponse.user.uid).set({
        'name': form.value["name"],
        'email': form.value["email"],
      });
    });
    window.alert('okkkkk');

  }

  goBack(){}

}
