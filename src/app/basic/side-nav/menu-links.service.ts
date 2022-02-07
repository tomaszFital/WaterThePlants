import { Injectable, OnChanges, SimpleChanges } from "@angular/core";
import { LoginService } from "src/app/login.service";
// import { getAuth } from "firebase/auth";

export interface MenuLink {
  visible: boolean;
  name: string;
  icon: string;
  href: string;
  position: "top" | "bottom";
}
@Injectable({ providedIn: "root" })
export class MenuLinksService {
  private menuLinks: MenuLink[] = [{
    visible: true,
    name: "Start",
    icon: "",
    href: "",
    position: "top",
  }, {
    visible: true,
    name: "Przeglądaj rośliny",
    icon: "",
    href: "myPlants",
    position: "top",
  }, {
    visible: true,
    name: "Dodaj roślinę",
    icon: "",
    href: "addPlant",
    position: "top",
  }];
  constructor(private loginService: LoginService) { }

  getMenuLinks(): MenuLink[] {
    return this.loginService.logged() ? this.menuLinks : [];
  }
}
