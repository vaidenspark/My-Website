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

    const a1 = this.calcForm.get('a1').value;
    const r1 = this.calcForm.get('r1').value;
    const a2 = this.calcForm.get('a2').value;
    const r2 = this.calcForm.get('r1').value;
    if ((this.calcForm.get('a1').value === '') && (this.calcForm.get('r1').value !== '') && (this.calcForm.get('a2').value !== '') &&
    (this.calcForm.get('r2').value !== '')){
      console.log(this.calcServ.findA1(r1, a2, r2));

    }
    if ((this.calcForm.get('a1').value !== '') && (this.calcForm.get('r1').value !== '') && (this.calcForm.get('a2').value === '') &&
    (this.calcForm.get('r2').value !== '')){
      console.log(this.calcServ.findA2(a1, r1, r2));

    }
    else{
      console.log("invalid input");
    }
  }

  ngOnInit(): void {
  }

}
