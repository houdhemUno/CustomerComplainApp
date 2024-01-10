import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationRechercheComponent } from './reclamation-recherche.component';

describe('ReclamationRechercheComponent', () => {
  let component: ReclamationRechercheComponent;
  let fixture: ComponentFixture<ReclamationRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclamationRechercheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReclamationRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
