import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCartComponendComponent } from './dashboard-cart-componend.component';

describe('DashboardCartComponendComponent', () => {
  let component: DashboardCartComponendComponent;
  let fixture: ComponentFixture<DashboardCartComponendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCartComponendComponent]
    });
    fixture = TestBed.createComponent(DashboardCartComponendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
