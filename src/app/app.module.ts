import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./basic/top-bar/top-bar.component";
import { SideNavComponent } from "./basic/side-nav/side-nav.component";
import { FooterComponent } from "./common/footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyPlantsComponent } from "./my-plants/my-plants.component";
import { InfoIconComponent } from './common/info-icon/info-icon.component';
import { PlantComponent } from './common/plant/plant.component';
import { PlantTypePipe } from './common/plant/plant-type.pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
// import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
// import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/auth';
import { AngularFirestoreModule, USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/functions';

import { environment } from "src/environments/environment.prod";
import { AngularFireModule } from "@angular/fire";
import { AddPlantComponent } from './add-plant/add-plant.component';
// import { firebaseConfig } from "src/environments/environment.prod";
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideNavComponent,
    FooterComponent,
    DashboardComponent,
    MyPlantsComponent,
    InfoIconComponent,
    PlantComponent,
    PlantTypePipe,
    LoginComponent,
    AddPlantComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    // AngularFireModule,
    // AngularFirestoreModule,
    // firebase.initializeApp(environment.firebase)
    // RadioButtonModule
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
