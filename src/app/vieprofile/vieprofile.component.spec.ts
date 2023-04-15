import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieprofileComponent } from './vieprofile.component';

describe('VieprofileComponent', () => {
  let component: VieprofileComponent;
  let fixture: ComponentFixture<VieprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VieprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
