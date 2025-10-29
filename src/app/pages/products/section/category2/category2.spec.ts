import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category2 } from './category2';

describe('Category2', () => {
  let component: Category2;
  let fixture: ComponentFixture<Category2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Category2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Category2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
