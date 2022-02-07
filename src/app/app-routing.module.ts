import { Injectable, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AddPlantComponent } from "./add-plant/add-plant.component";
// import { getAuth, onAuthStateChanged, signInWithCredential, signInWithCustomToken } from "firebase/auth";
// import { firebaseApp } from "src/environments/environment";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { MyPlantsComponent } from "./my-plants/my-plants.component";

@Injectable()
export class IsLogged {
  constructor(
    private router: Router
  ) { }
  async canActivate() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user)
      this.router.navigate(['/login', { message: "Najpierw się zaloguj!" }]);
    else
      return true;
  }
}
@Injectable()
export class IsNotLogged {
  constructor(
    private router: Router
  ) { }
  async canActivate() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!!user)
      this.router.navigate(['/', { message: "Najpierw się zaloguj!" }]);
    else
      return true;
  }
}

const routes: Routes = [
  { path: "", component: DashboardComponent, canActivate: [IsLogged] },
  { path: "myPlants", component: MyPlantsComponent, canActivate: [IsLogged] },
  { path: "addPlant", component: AddPlantComponent, canActivate: [IsLogged] },
  { path: "login", component: LoginComponent, canActivate: [IsNotLogged] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsLogged, IsNotLogged]
})
export class AppRoutingModule { }


