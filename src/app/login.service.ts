import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logged(): boolean {
    // console.log(JSON.parse(localStorage.getItem('user')));
    return !!JSON.parse(localStorage.getItem('user'));
  }
}
