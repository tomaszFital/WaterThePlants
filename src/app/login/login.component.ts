import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase';
// import { auth } from 'firebase/app';
// import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { firebaseApp } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authLogin = "tomasz.m.fital@gmail.com";
  authPass = "test123";
  auth: any;
  error: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fireAuth: AngularFireAuth,
  ) { }

  async signIn() {

    this.error = "";
    this.fireAuth.signInWithEmailAndPassword(this.authLogin, this.authPass).then((item) => {
      localStorage.setItem('user', JSON.stringify(item.user));
      this.router.navigateByUrl("/myPlants");
    }).catch((e) => {
      localStorage.setItem('user', null);
      switch (e.code) {
        case "auth/invalid-email":
          this.error = "Niepoprawny mail.";
          break;
        case "auth/wrong-password":
          this.error = "Niepoprawne hasło.";
          break;
        default:
          this.error = "Nizenany błąd.";
          break;
      }
    })
  }
  googleLogin() {
    this.error = "";
    const provider = new firebase.auth.GoogleAuthProvider();
    this.fireAuth.signInWithPopup(provider)
      .then(result => {
        localStorage.setItem('user', JSON.stringify(result.user));
        this.router.navigateByUrl("");
      }).catch((error) => {
        localStorage.setItem('user', null);
        switch (error.code) {
          case "auth/invalid-email":
            this.error = "Niepoprawny mail.";
            break;
          case "auth/wrong-password":
            this.error = "Niepoprawne hasło.";
            break;
          default:
            this.error = "Nizenany błąd.";
            break;
        }
      })

  }

}
