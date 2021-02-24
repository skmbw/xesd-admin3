import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionbankAddtopaperComponent } from './addtopaper.component';

describe('QuestionbankAddtopaperComponent', () => {
  let component: QuestionbankAddtopaperComponent;
  let fixture: ComponentFixture<QuestionbankAddtopaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionbankAddtopaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionbankAddtopaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
