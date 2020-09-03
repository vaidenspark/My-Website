import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



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
  findA2(a1: number, r1: number, r2: number){
    const numerator = r1 * Math.sin(this.toRadians(a1));
    const denom = r2;
    return this.toDegrees(Math.asin(numerator / denom));
  }
  // tslint:disable-next-line: typedef
  findA1(r1: number, a2: number, r2: number){
    const numerator = (Math.sin(this.toRadians(a2)) * r2);
    const denom = r1;
    return this.toDegrees(Math.asin(numerator / denom));
  }
}
