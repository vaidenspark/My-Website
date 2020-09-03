import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { CalcServService } from '../shared/calc-serv.service';


@Component({
  selector: 'app-snell-calc',
  templateUrl: './snell-calc.component.html',
  styleUrls: ['./snell-calc.component.scss']
})
export class SnellCalcComponent implements OnInit {

  constructor(private calcServ: CalcServService) { }
  calcForm = new FormGroup({
  a1: new FormControl(''),
  r1: new FormControl(''),
  a2: new FormControl(''),
  r2: new FormControl('')
  });

  onSubmit(){

    let a1 = this.calcForm.get('a1').value;
    let r1 = this.calcForm.get('r1').value;
    let a2 = this.calcForm.get('a2').value;
    let r2 = this.calcForm.get('r1').value;

    const isCalcA1 = (a1 === '') && (r1 !== '') && (a2 !== '') &&
    (r2 !== '');
    
    const isCalcA2 = (a1 !== '') && (r1 !== '') && (a2 === '') &&
    (r2 !== '');
    if (isCalcA1){
      this.calcForm.get('a1').setValue(this.calcServ.findA1(r1, a2, r2));
      console.log(this.calcServ.findA1(r1, a2, r2));

    }
    if (isCalcA2){
      this.calcForm.get('a2').setValue(this.calcServ.findA2(a1, r1, r2));
      console.log(this.calcServ.findA2(a1, r1, r2));

    }
    else{
      console.log("invalid input");
    }
  }

  ngOnInit(): void {
  }

}
