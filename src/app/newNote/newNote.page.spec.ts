import { async, ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { newNote, NoteModel } from "./newNote.page";
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from "@ionic/storage";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { DatabaseService } from "../services/database.service";

describe("newNote", () => {
  let component: newNote;
  let fixture: ComponentFixture<newNote>;

  let dbTest : DatabaseService 
  let dataForTest;

  beforeEach(waitForAsync(async ()  => {
  await TestBed.configureTestingModule({
      declarations: [newNote],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [{ provide: Storage }, { provide: TranslateService }],
    }).compileComponents();

    fixture = TestBed.createComponent(newNote);
    component = fixture.componentInstance;
    fixture.detectChanges();

    dataForTest = new NoteModel("Title1", "Text 1", 123456);
    dbTest = TestBed.inject(DatabaseService)
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Test variable types", () => {
    expect(dataForTest.title).toEqual(jasmine.any(String));
    expect(dataForTest.text).toEqual(jasmine.any(String));
    expect(dataForTest.createdat).toEqual(jasmine.any(Number));
  });

  it("Test if Text and Created Date is not null or undefined", () => {
    expect(dataForTest.text).not.toBeNull()
    expect(dataForTest.text).not.toBeUndefined()

    expect(dataForTest.createdat).not.toBeNull()
    expect(dataForTest.createdat).not.toBeUndefined()
  });

  it("Testing Manual input values", () => {

    expect(dataForTest.text).toEqual('Text 1')
    expect(dataForTest.createdat).toEqual(123456)
 
  });

  it("Test if Database is inserting data", () => {
   
    const spy = spyOn(dbTest, 'Insert').and.callThrough();
    dbTest.Insert(1234, dataForTest)
    expect(spy).toHaveBeenCalledWith(1234, dataForTest);

  });
});