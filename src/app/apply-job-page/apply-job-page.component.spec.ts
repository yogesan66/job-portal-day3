import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyJobPageComponent } from './apply-job-page.component';

describe('ApplyJobPageComponent', () => {
  let component: ApplyJobPageComponent;
  let fixture: ComponentFixture<ApplyJobPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyJobPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyJobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
