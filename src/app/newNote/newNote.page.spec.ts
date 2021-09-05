import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { newNote } from './newNote.page';

describe('newNote', () => {
  let component: newNote;
  let fixture: ComponentFixture<newNote>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ newNote ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(newNote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
