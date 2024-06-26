import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormmmComponent } from './student-formmm.component';

describe('StudentFormmmComponent', () => {
  let component: StudentFormmmComponent;
  let fixture: ComponentFixture<StudentFormmmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFormmmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentFormmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
