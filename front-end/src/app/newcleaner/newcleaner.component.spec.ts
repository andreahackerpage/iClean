import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcleanerComponent } from './newcleaner.component';

describe('NewcleanerComponent', () => {
  let component: NewcleanerComponent;
  let fixture: ComponentFixture<NewcleanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcleanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
