import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerBlockComponent } from './corner-block.component';

describe('CornerBlockComponent', () => {
  let component: CornerBlockComponent;
  let fixture: ComponentFixture<CornerBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CornerBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
