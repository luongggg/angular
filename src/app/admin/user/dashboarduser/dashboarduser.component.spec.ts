import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarduserComponent } from './dashboarduser.component';

describe('DashboarduserComponent', () => {
  let component: DashboarduserComponent;
  let fixture: ComponentFixture<DashboarduserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboarduserComponent]
    });
    fixture = TestBed.createComponent(DashboarduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
