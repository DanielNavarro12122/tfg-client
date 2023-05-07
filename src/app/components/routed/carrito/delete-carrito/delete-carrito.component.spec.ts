import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCarritoComponent } from './delete-carrito.component';

describe('DeleteCarritoComponent', () => {
  let component: DeleteCarritoComponent;
  let fixture: ComponentFixture<DeleteCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
