import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuserDetailComponent } from './juser-detail.component';

describe('JuserDetailComponent', () => {
  let component: JuserDetailComponent;
  let fixture: ComponentFixture<JuserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
