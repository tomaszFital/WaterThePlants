import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Plant } from "../models/plant";
import { MyPlantsService } from "../my-plants/my-plants.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  allPlants = 0;
  wateredPlants = 0;

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private mp: MyPlantsService,
  ) { }

  ngOnInit(): void {
    this.mp.getMyPlants().subscribe(items => {
      if (items.length <= 0) return;
      this.allPlants = items.length;

      const allWatered = items.filter(item => {
        const wateredDate = new Date(item.lastWatered);
        wateredDate.setDate(wateredDate.getDate() + item.waterDays);
        return new Date() < wateredDate;
      })
      this.wateredPlants = allWatered.length;
    });
  }

  navTo(link: string) {
    this.router.navigateByUrl(link);
  }

  async logout() {
    localStorage.setItem('user', null);
    await this.fireAuth.signOut();
    this.router.navigateByUrl("login");
  }

  getWateredPlants(ob: any[]): number {
    // console.log(ob)
    return 0;
  }
}
