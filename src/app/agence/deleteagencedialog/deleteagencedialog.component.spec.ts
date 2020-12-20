import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteagencedialogComponent } from './deleteagencedialog.component';

describe('DeleteagencedialogComponent', () => {
  let component: DeleteagencedialogComponent;
  let fixture: ComponentFixture<DeleteagencedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteagencedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteagencedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
