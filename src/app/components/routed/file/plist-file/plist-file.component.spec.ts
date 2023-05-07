import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistFileComponent } from './plist-file.component';

describe('PlistFileComponent', () => {
  let component: PlistFileComponent;
  let fixture: ComponentFixture<PlistFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
