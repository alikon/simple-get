import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalComponentComponent } from './local-component.component';

describe('LocalComponentComponent', () => {
  let component: LocalComponentComponent;
  let fixture: ComponentFixture<LocalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
