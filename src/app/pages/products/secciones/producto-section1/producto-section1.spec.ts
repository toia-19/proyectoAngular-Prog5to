import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSection1 } from './producto-section1';

describe('ProductoSection1', () => {
  let component: ProductoSection1;
  let fixture: ComponentFixture<ProductoSection1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoSection1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoSection1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
