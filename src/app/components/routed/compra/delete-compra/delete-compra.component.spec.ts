import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompraComponent } from './delete-compra.component';

describe('DeleteCompraComponent', () => {
  let component: DeleteCompraComponent;
  let fixture: ComponentFixture<DeleteCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
