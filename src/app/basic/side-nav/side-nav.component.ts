import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuLink, MenuLinksService } from "./menu-links.service";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  menuLinks: MenuLink[];
  url: string;
  constructor(
    private menuLinkService: MenuLinksService,
    private router: Router,
  ) {
    this.router.events.subscribe(() => {
      this.url = this.router.url;
    });
  }

  ngOnInit(): void {
    this.menuLinks = this.menuLinkService.getMenuLinks();
  }

}
