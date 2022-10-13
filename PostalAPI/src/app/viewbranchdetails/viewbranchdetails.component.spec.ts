import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbranchdetailsComponent } from './viewbranchdetails.component';

describe('ViewbranchdetailsComponent', () => {
  let component: ViewbranchdetailsComponent;
  let fixture: ComponentFixture<ViewbranchdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbranchdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbranchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
