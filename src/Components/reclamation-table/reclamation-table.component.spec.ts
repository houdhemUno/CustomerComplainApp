import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationTableComponent } from './reclamation-table.component';

describe('ReclamationTableComponent', () => {
  let component: ReclamationTableComponent;
  let fixture: ComponentFixture<ReclamationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclamationTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReclamationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
