import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildialogCompteComponent } from './detaildialog-compte.component';

describe('DetaildialogCompteComponent', () => {
  let component: DetaildialogCompteComponent;
  let fixture: ComponentFixture<DetaildialogCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildialogCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildialogCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
