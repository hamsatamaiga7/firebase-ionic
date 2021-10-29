import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  user: any;

  constructor(
    public service: ServicesService
  ) { }

  ngOnInit() {
    this.service.profile.subscribe(user=>{
      this.user = user;
      console.log(this.user);
    });
  }

}
