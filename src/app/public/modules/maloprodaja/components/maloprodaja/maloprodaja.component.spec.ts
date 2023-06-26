import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaloprodajaComponent } from './maloprodaja.component';

describe('MaloprodajaComponent', () => {
  let component: MaloprodajaComponent;
  let fixture: ComponentFixture<MaloprodajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaloprodajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaloprodajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
