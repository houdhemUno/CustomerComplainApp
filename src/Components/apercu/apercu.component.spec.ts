import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuComponent } from './apercu.component';

describe('ApercuComponent', () => {
  let component: ApercuComponent;
  let fixture: ComponentFixture<ApercuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD:src/Components/apercu/apercu.component.spec.ts
      imports: [ApercuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApercuComponent);
=======
      imports: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
>>>>>>> 214e9715bad3ccca8681b6d5e3146d1cee912a8a:src/components/login/login.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
