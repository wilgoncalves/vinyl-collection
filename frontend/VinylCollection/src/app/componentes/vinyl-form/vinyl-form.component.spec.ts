import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylFormComponent } from './vinyl-form.component';

describe('VinylFormComponent', () => {
  let component: VinylFormComponent;
  let fixture: ComponentFixture<VinylFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinylFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
