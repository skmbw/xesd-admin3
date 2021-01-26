import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialViewComponent } from './view.component';

describe('SpecialViewComponent', () => {
  let component: SpecialViewComponent;
  let fixture: ComponentFixture<SpecialViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
