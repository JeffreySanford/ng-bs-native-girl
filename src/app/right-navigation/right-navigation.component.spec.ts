import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightNavigationComponent } from './right-navigation.component';

describe('RightNavigationComponent', () => {
  let component: RightNavigationComponent;
  let fixture: ComponentFixture<RightNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
