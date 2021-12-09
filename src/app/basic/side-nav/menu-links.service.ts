import { Injectable } from "@angular/core";

export interface MenuLink {
  visible: boolean;
  name: string;
  icon: string;
  href: string;
}
@Injectable({ providedIn: "root" })
export class MenuLinksService {
  private menuLinks: MenuLink[] = [{
    visible: true,
    name: "Start",
    icon: "",
    href: "",
  }, {
    visible: true,
    name: "Przeglądaj rośliny",
    icon: "",
    href: "myPlants",
  }];
  constructor() { }

  getMenuLinks(): MenuLink[] {
    return this.menuLinks;
  }
}
