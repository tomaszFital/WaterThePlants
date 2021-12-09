import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./basic/top-bar/top-bar.component";
import { SideNavComponent } from "./basic/side-nav/side-nav.component";
import { FooterComponent } from "./common/footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyPlantsComponent } from "./my-plants/my-plants.component";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideNavComponent,
    FooterComponent,
    DashboardComponent,
    MyPlantsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
