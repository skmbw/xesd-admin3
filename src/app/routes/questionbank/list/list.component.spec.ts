import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionbankListComponent } from './list.component';

describe('QuestionbankListComponent', () => {
  let component: QuestionbankListComponent;
  let fixture: ComponentFixture<QuestionbankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionbankListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionbankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
