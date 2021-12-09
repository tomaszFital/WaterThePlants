import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyPlantsComponent } from "./my-plants/my-plants.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "myPlants", component: MyPlantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
