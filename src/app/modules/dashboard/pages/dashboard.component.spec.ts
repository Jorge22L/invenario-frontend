import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashaboardComponent } from './dashboard.component';

describe('DashaboardComponent', () => {
  let component: DashaboardComponent;
  let fixture: ComponentFixture<DashaboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashaboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashaboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
