import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaysomethingComponent } from './saysomething.component';

describe('SaysomethingComponent', () => {
  let component: SaysomethingComponent;
  let fixture: ComponentFixture<SaysomethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaysomethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaysomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
