import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompoenentComponent } from './home-compoenent.component';

describe('HomeCompoenentComponent', () => {
  let component: HomeCompoenentComponent;
  let fixture: ComponentFixture<HomeCompoenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCompoenentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCompoenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
