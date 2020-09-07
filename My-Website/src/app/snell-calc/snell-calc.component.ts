import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { CalcServService } from '../shared/calc-serv.service';
import * as math from 'mathjs';


@Component({
  selector: 'app-snell-calc',
  templateUrl: './snell-calc.component.html',
  styleUrls: ['./snell-calc.component.scss'],
  template: `
    <h3>{{validator}}</h3>
    `
})
export class SnellCalcComponent implements OnInit {
  validator = '';

  constructor(private calcServ: CalcServService) { }
  calcForm = new FormGroup({
    a1: new FormControl(''),
    r1: new FormControl(''),
    a2: new FormControl(''),
    r2: new FormControl('')
  });

  ngOnInit(): void {

  }
  onSubmit(): void{
        const a1 = this.calcForm.get('a1').value;
        const r1 = this.calcForm.get('r1').value;
        const a2 = this.calcForm.get('a2').value;
        const r2 = this.calcForm.get('r2').value;


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
        this.validator = 'Invalid Inputs';
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
