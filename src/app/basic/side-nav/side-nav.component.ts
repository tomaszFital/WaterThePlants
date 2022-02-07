import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { MenuLink, MenuLinksService } from "./menu-links.service";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent {
  menuLinks: MenuLink[];
  url: string;

  constructor(
    private menuLinkService: MenuLinksService,
    private router: Router,
    private fireAuth: AngularFireAuth,
  ) {
    this.router.events.subscribe(() => {
      this.url = this.router.url;
      this.menuLinks = this.menuLinkService.getMenuLinks();
    });
  }

  async signOut() {
    localStorage.setItem('user', null);
    await this.fireAuth.signOut();
    this.router.navigateByUrl("login");
  }
}
