import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionEditComponent } from './edit.component';

describe('QuestionEditComponent', () => {
  let component: QuestionEditComponent;
  let fixture: ComponentFixture<QuestionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
