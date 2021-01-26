import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionbankPaperComponent } from './paper.component';

describe('QuestionbankPaperComponent', () => {
  let component: QuestionbankPaperComponent;
  let fixture: ComponentFixture<QuestionbankPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionbankPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionbankPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
