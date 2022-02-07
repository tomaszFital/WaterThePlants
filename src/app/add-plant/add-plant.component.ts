import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyPlantsService } from '../my-plants/my-plants.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {
  plantForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    description: [''],
    type: ['inside', Validators.required],
    lastWatered: [(new Date()).toDateString()],
    waterDays: [7, [Validators.required, Validators.min(1)]],
    user: [JSON.parse(localStorage.getItem('user')).uid]
  })
  adding = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private mp: MyPlantsService,
  ) { }

  ngOnInit(): void {

  }

  navTo(link: string) {
    this.router.navigateByUrl(link);
  }

  async save() {
    try {
      this.adding = true;
      await this.mp.addPlant(this.plantForm.value);
      this.router.navigateByUrl('/myPlants');
    } catch {

    }
  }

}
