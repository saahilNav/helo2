import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetAComponent } from './componet-a.component';

describe('ComponetAComponent', () => {
  let component: ComponetAComponent;
  let fixture: ComponentFixture<ComponetAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponetAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponetAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
