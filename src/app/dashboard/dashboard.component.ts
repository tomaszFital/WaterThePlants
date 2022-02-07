import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }

  navTo(link: string) {
    this.router.navigateByUrl(link);
  }

  async logout() {
    localStorage.setItem('user', null);
    await this.fireAuth.signOut();
    this.router.navigateByUrl("login");
  }
}
