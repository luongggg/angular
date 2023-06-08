import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCartComponentComponent } from './create-cart-component.component';

describe('CreateCartComponentComponent', () => {
  let component: CreateCartComponentComponent;
  let fixture: ComponentFixture<CreateCartComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCartComponentComponent]
    });
    fixture = TestBed.createComponent(CreateCartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
