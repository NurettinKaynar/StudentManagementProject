import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsComponentComponent } from './student-details-component.component';

describe('StudentDetailsComponentComponent', () => {
  let component: StudentDetailsComponentComponent;
  let fixture: ComponentFixture<StudentDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDetailsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
