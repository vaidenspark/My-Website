import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { CalcServService } from '../shared/calc-serv.service';
import * as math from 'mathjs';


@Component({
  selector: 'app-snell-calc',
  templateUrl: './snell-calc.component.html',
  styleUrls: ['./snell-calc.component.scss']
})
export class SnellCalcComponent implements OnInit {
  validator = 'All entries must be numerical. Refractive Index should be between 0 and 2 Angles are in degrees, between 0 and 90';
  calcForm: FormGroup;

  constructor(private calcServ: CalcServService) {
    this.calcForm =  new FormGroup({
      a1: new FormControl(''),
      r1: new FormControl(''),
      a2: new FormControl(''),
      r2: new FormControl(''),
  });
}
 materialsList = [
  {name: 'Vacuum', value: 1},
  {name: 'Air', value: 1.000293},
  {name: 'Carbon Dioxide', value: 1.001},
  {name: 'Liquid Water', value: 1.330},
  {name: 'Water Ice', value: 1.310 },
  {name: 'Diamond', value: 2.417},
  {name: 'Silicon', value: 3.44},
];
  ngOnInit(): void {
  }
  onSubmit(): void{
    // check if form input is a number. If true, set value for processing
    // if false, set error message
        const a1 = isNaN(this.calcForm.get('a1').value) ?
        this.validator = 'all entries must be numerical' : this.calcForm.get('a1').value ;
        const r1 = isNaN(this.calcForm.get('r1').value) ?
        this.validator = 'all entries must be numerical' : this.calcForm.get('r1').value ;
        const a2 = isNaN(this.calcForm.get('a2').value) ?
        this.validator = 'all entries must be numerical' : this.calcForm.get('a2').value ;
        const r2 = isNaN(this.calcForm.get('r2').value) ?
        this.validator = 'all entries must be numerical' : this.calcForm.get('r2').value ;

        const isCalcA1 = (a1 === '') && (r1 !== '') && (a2 !== '') &&
    (r2 !== '');

        const isCalcA2 = (a1 !== '') && (r1 !== '') && (a2 === '') &&
    (r2 !== '');

        const isCalcR1 = (a1 !== '') && (r1 === '') && (a2 !== '') &&
    (r2 !== '');

        const isCalcR2 = (a1 !== '') && (r1 !== '') && (a2 !== '') &&
    (r2 === '');

        const isValidate = (a1 !== '') && (r1 !== '') && (a2 !== '') &&
    (r2 !== '');

        const allEmpty = (a1 === '') && (r1 === '') && (a2 === '') &&
        (r2 === '');

        if (isCalcA1){
      this.calcForm.get('a1').setValue(this.calcServ.findA1(r1, a2, r2));
    }
        if (isCalcA2){
      this.calcForm.get('a2').setValue(this.calcServ.findA2(a1, r1, r2));
    }
        if (isCalcR1){
      this.calcForm.get('r1').setValue(this.calcServ.findR1(a1, a2, r2));
  }
        if (isCalcR2){
      this.calcForm.get('r2').setValue(this.calcServ.findR2(a1, r1, a2));
}
        if (isValidate){
      const test = this.calcServ.findA2(a1, r1, r2);
      if (test !== this.calcForm.get('a2').value){
        this.validator = 'This combination is not correct. Please delete one of the values you entered and try again';
      }
      if (math.round(test) === math.round(this.calcForm.get('a2').value)){
        this.validator = 'Correct!';
      }

    }
        if (allEmpty){
      this.validator = 'Please enter Some values';
    }

  }
}
