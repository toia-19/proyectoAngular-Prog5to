import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSection2 } from './producto-section2';

describe('ProductoSection2', () => {
  let component: ProductoSection2;
  let fixture: ComponentFixture<ProductoSection2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoSection2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoSection2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
