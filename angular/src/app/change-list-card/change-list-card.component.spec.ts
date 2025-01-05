import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeListCardComponent } from './change-list-card.component';

describe('ChangeListCardComponent', () => {
  let component: ChangeListCardComponent;
  let fixture: ComponentFixture<ChangeListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
