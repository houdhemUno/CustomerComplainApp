import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD:src/Components/footer/footer.component.spec.ts
      imports: [FooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterComponent);
=======
      imports: [UsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
>>>>>>> 214e9715bad3ccca8681b6d5e3146d1cee912a8a:src/components/users/users.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
