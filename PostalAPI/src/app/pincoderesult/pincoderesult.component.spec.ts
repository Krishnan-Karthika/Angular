import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PincoderesultComponent } from './pincoderesult.component';

describe('PincoderesultComponent', () => {
  let component: PincoderesultComponent;
  let fixture: ComponentFixture<PincoderesultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PincoderesultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PincoderesultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
