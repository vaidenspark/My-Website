import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnellCalcComponent } from './snell-calc.component';

describe('SnellCalcComponent', () => {
  let component: SnellCalcComponent;
  let fixture: ComponentFixture<SnellCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnellCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnellCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
