import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsearchComponent } from './jsearch.component';

describe('JsearchComponent', () => {
  let component: JsearchComponent;
  let fixture: ComponentFixture<JsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
