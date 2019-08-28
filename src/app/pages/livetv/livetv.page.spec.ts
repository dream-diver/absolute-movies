import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetvPage } from './livetv.page';

describe('LivetvPage', () => {
  let component: LivetvPage;
  let fixture: ComponentFixture<LivetvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivetvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
