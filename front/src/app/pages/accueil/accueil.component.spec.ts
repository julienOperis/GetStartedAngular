import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuileComponent } from './accueil.component';

describe('AcceuileComponent', () => {
  let component: AcceuileComponent;
  let fixture: ComponentFixture<AcceuileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceuileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
