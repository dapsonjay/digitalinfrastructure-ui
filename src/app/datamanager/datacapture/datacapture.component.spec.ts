import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacaptureComponent } from './datacapture.component';

describe('DatacaptureComponent', () => {
  let component: DatacaptureComponent;
  let fixture: ComponentFixture<DatacaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatacaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
