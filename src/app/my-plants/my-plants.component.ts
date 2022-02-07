import { Component, OnInit } from '@angular/core';
import { MyPlantsService } from './my-plants.service';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-my-plants',
  templateUrl: './my-plants.component.html',
  styleUrls: ['./my-plants.component.scss']
})
export class MyPlantsComponent implements OnInit {
  myPlants$;
  plants$;
  constructor(
    private myPlantsService: MyPlantsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.myPlants$ = this.myPlantsService.getMyPlants();
  }


  navTo(link: string) {
    this.router.navigateByUrl(link);
  }

}
