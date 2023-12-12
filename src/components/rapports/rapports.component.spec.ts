import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartComponent } from './pie-chart.component';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD:src/Components/widgets/pie-chart/pie-chart.component.spec.ts
      imports: [PieChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieChartComponent);
=======
      imports: [RapportsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RapportsComponent);
>>>>>>> 214e9715bad3ccca8681b6d5e3146d1cee912a8a:src/components/rapports/rapports.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
