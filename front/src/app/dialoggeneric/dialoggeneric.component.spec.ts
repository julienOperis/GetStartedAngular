import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoggenericComponent } from './dialoggeneric.component';

describe('DialoggenericComponent', () => {
  let component: DialoggenericComponent;
  let fixture: ComponentFixture<DialoggenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialoggenericComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialoggenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
