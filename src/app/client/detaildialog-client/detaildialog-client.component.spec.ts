import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildialogClientComponent } from './detaildialog-client.component';

describe('DetaildialogClientComponent', () => {
  let component: DetaildialogClientComponent;
  let fixture: ComponentFixture<DetaildialogClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildialogClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildialogClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
