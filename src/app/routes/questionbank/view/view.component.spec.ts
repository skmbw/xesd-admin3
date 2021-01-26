import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionbankViewComponent } from './view.component';

describe('QuestionbankViewComponent', () => {
  let component: QuestionbankViewComponent;
  let fixture: ComponentFixture<QuestionbankViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionbankViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionbankViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
