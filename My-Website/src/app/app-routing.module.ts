import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {SnellCalcComponent} from './snell-calc/snell-calc.component';
import { PitchDetectComponent } from './pitch-detect/pitch-detect.component';


const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'snell', component: SnellCalcComponent},
  {path: 'pitch', component: PitchDetectComponent},
 {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
