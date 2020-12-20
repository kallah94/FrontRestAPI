import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdialogcompteComponent } from './dialogdialogcompte.component';

describe('DialogdialogcompteComponent', () => {
  let component: DialogdialogcompteComponent;
  let fixture: ComponentFixture<DialogdialogcompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogdialogcompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdialogcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
