import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { create, all } from 'mathjs';


const math = create(all, { });

@Injectable({
  providedIn: 'root'
})
export class CalcServService {

  constructor() { }
   // tslint:disable-next-line: typedef
   toDegrees(angle) {
    return angle * (180 / Math.PI);
  }
   // tslint:disable-next-line: typedef
   toRadians(angle) {
    return angle * (Math.PI / 180);
  }
  // tslint:disable-next-line: typedef
  findA2(a1: number, r1: number, r2: number): number{
    const numerator = r1 * (math.sin(this.toRadians(a1)));
    const denom = r2;

    return math.round((this.toDegrees(math.asin((numerator / denom)))), 3);
  }
  // tslint:disable-next-line: typedef
  findA1(r1: number, a2: number, r2: number): number{
    const numerator = (Math.sin(this.toRadians(a2)) * r2);
    const denom = r1;
    return math.round((this.toDegrees(math.evaluate(`asin((${r2}*(sin(${this.toRadians(a2)})))/${r1})`))), 3);
  }

  findR1(a1: number, a2: number, r2: number): number{
    a1 = this.toRadians(a1);
    a2 =  this.toRadians(a2);
    const numerator = math.sin(a2) * r2;
    const denom = math.sin(a1);
    return math.round((numerator / denom), 3);
  }

  findR2(a1: number, r1: number, a2: number): number{
    a1 = this.toRadians(a1);
    a2 =  this.toRadians(a2);


    const numerator = math.sin(a1) * r1;
    const denom = math.sin(a2);
    return math.round((numerator / denom), 3);
  }
}
