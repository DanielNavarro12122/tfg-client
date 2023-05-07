import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTipoproductoComponent } from './delete-tipoproducto.component';

describe('DeleteTipoproductoComponent', () => {
  let component: DeleteTipoproductoComponent;
  let fixture: ComponentFixture<DeleteTipoproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTipoproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
