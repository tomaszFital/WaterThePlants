import { Component, OnInit } from '@angular/core';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'water-the-plants';
  loaded = true;
  ngOnInit() {
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   this.loaded = true;
    //   console.log('log')
    // })

  }
}

export function convertSnaps<T>(results) {
  return <T[]>results.docs.map(snap => {
    return {
      id: snap.id,
      ...<any>snap.data()
    }
  })
}
