import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'firebase/auth';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  profile: Observable<User>;
  user: User;
  constructor(
    public router: Router,
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) {
     this.profile = this.auth.authState
      .pipe(
        switchMap( user => {
          if(user){
            return this.firestore.doc<User>(`profile/${user.uid}`).valueChanges();
          }else{
            return of(null);
          }
        })
      );
    }

   async connexion(email, password){
      return this.auth.signInWithEmailAndPassword(email, password);
    }

   async  inscriptionuser(email, password){
      return this.auth.createUserWithEmailAndPassword(email, password);
    }

    deconnexion(){
      this.auth.signOut();
    }
}
