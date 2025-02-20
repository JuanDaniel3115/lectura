import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParameterServicesService {

  name: string = '';
  age: number = 0;
  point: number = 0
  constructor() { }
  //reinciar variables beta
  resetvalue(){
    this.name= '';
    this.age = 0;
    this.point =0;
  }

}
