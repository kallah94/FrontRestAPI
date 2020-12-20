import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeditcomponentComponent } from './dialogeditcomponent.component';

describe('DialogeditcomponentComponent', () => {
  let component: DialogeditcomponentComponent;
  let fixture: ComponentFixture<DialogeditcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogeditcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogeditcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
