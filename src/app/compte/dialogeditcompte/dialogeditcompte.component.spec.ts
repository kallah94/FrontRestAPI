import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeditcompteComponent } from './dialogeditcompte.component';

describe('DialogeditcompteComponent', () => {
  let component: DialogeditcompteComponent;
  let fixture: ComponentFixture<DialogeditcompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogeditcompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogeditcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
