import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionbankEditComponent } from './edit.component';

describe('QuestionbankEditComponent', () => {
  let component: QuestionbankEditComponent;
  let fixture: ComponentFixture<QuestionbankEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionbankEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionbankEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
