import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodesavanjaComponent } from './podesavanja.component';

describe('PodesavanjaComponent', () => {
  let component: PodesavanjaComponent;
  let fixture: ComponentFixture<PodesavanjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodesavanjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodesavanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
