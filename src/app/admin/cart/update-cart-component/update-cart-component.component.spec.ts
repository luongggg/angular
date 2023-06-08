import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCartComponentComponent } from './update-cart-component.component';

describe('UpdateCartComponentComponent', () => {
  let component: UpdateCartComponentComponent;
  let fixture: ComponentFixture<UpdateCartComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCartComponentComponent]
    });
    fixture = TestBed.createComponent(UpdateCartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
