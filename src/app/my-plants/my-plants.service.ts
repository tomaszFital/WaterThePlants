import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { convertSnaps } from '../app.component';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class MyPlantsService {

  constructor(
    private http: HttpClient,
    private db: AngularFirestore,
  ) { }

  items: Observable<any[]>;
  getMyPlants() {
    return this.db.collection('plants', ref => ref.where('user', '==', JSON.parse(localStorage.getItem('user')).uid))
      .get()
      .pipe(map(result => convertSnaps(result)))
  }

  async addPlant(plant: Plant) {
    return await this.db.collection('plants').add(plant);
  }
  async waterPlant(plant: Plant) {
    plant.lastWatered = (new Date()).toDateString();
    const { name, description, lastWatered, waterDays, type, user } = plant;
    return await this.db.collection(`plants`).doc(plant.id).set({
      name, description, lastWatered, waterDays, type, user
    });
  }

  async deletePlant(plant: Plant) {
    return await this.db.collection('plants').doc(plant.id).delete();
  }
}
