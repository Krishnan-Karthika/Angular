import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchresultComponent } from './branchresult.component';

describe('BranchresultComponent', () => {
  let component: BranchresultComponent;
  let fixture: ComponentFixture<BranchresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
