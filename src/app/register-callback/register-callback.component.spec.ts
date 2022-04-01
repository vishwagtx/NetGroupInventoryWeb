import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../core/services/auth.service';
import { OpenidService } from '../core/services/openid.service';

import { RegisterCallbackComponent } from './register-callback.component';

describe('RegisterCallbackComponent', () => {
  let component: RegisterCallbackComponent;
  let fixture: ComponentFixture<RegisterCallbackComponent>;
  let openidServiceSpy: jasmine.SpyObj<OpenidService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('OpenidService', ['login']);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthService, { provide: OpenidService, useValue: spy }],
      declarations: [RegisterCallbackComponent],
    }).compileComponents();

    openidServiceSpy = TestBed.inject(
      OpenidService
    ) as jasmine.SpyObj<OpenidService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
