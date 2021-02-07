import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionbankCreatePaperComponent } from './create-paper.component';

describe('QuestionbankCreatePaperComponent', () => {
  let component: QuestionbankCreatePaperComponent;
  let fixture: ComponentFixture<QuestionbankCreatePaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionbankCreatePaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionbankCreatePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
