import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedBarComponent } from './advanced-bar.component';

describe('AdvancedBarComponent', () => {
  let component: AdvancedBarComponent;
  let fixture: ComponentFixture<AdvancedBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
