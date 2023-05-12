import { Injectable } from '@angular/core';
import { availableFoods } from 'src/data';
import { Food } from '../shared/model/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoods() : Food[]{
    return availableFoods
  }
}
