import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { MyPlantsService } from 'src/app/my-plants/my-plants.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {
  @Input() plant: Plant;
  watered = true;
  constructor(
    private mp: MyPlantsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const wateredDate = new Date(this.plant.lastWatered);
    wateredDate.setDate(wateredDate.getDate() + this.plant.waterDays);
    this.watered = new Date() > wateredDate;
  }

  watering = false;

  async waterPlant() {
    if (!this.watered) return;
    this.watering = true;
    setTimeout(async () => {
      if (this.watering) {
        try {
          await this.mp.waterPlant(this.plant);
        } catch { }
        this.watered = false;
      }
    }, 1000)
  }

  async stopWatering() {
    this.watering = false;
  }

  async deletePlant() {
    this.watering = false;
    try {
      await this.mp.deletePlant(this.plant);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/myPlants']));
      // this.plant = undefined;
    } catch (e) { console.log(e) }
  }
}
