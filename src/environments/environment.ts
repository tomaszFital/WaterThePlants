// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as firebase from 'firebase/app';
// import { initializeApp } from 'firebase/app';
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCr4sQ6pOzKLYleObJCAU5brJyPMxxITow",
    authDomain: "water-the-plants-tpf.firebaseapp.com",
    databaseURL: "https://water-the-plants-tpf-default-rtdb.firebaseio.com",
    projectId: "water-the-plants-tpf",
    storageBucket: "water-the-plants-tpf.appspot.com",
    messagingSenderId: "267745454598",
    appId: "1:267745454598:web:09d0df59546f2471057187",
  }
};

// export const firebaseConfig = {
//   apiKey: "AIzaSyCr4sQ6pOzKLYleObJCAU5brJyPMxxITow",
//   authDomain: "water-the-plants-tpf.firebaseapp.com",
//   databaseURL: "https://water-the-plants-tpf-default-rtdb.firebaseio.com",
//   projectId: "water-the-plants-tpf",
//   storageBucket: "water-the-plants-tpf.appspot.com",
//   messagingSenderId: "267745454598",
//   appId: "1:267745454598:web:09d0df59546f2471057187",
// };

// export const firebaseApp = firebase.initializeApp(firebaseConfig);


// if (location.hostname === "localhost") {
//   connectDatabaseEmulator(db, "localhost", 9000);
// }

// console.log(db)

// const db = getFirestore();
// connectFirestoreEmulator(db, 'localhost', 8080);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
