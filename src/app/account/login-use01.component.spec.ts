import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUse01Component } from './login-use01.component';

describe('LoginUse01Component', () => {
  let component: LoginUse01Component;
  let fixture: ComponentFixture<LoginUse01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUse01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUse01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
