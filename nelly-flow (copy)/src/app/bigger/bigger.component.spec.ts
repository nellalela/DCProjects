import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggerComponent } from './bigger.component';

describe('BiggerComponent', () => {
  let component: BiggerComponent;
  let fixture: ComponentFixture<BiggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
