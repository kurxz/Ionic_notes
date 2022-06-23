import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { RouterTestingModule } from "@angular/router/testing";
import { ListModel, NewListPage } from "./newList.page";
import { TranslateModule } from "@ngx-translate/core";
import { DatabaseService } from "../services/database.service";

describe("NewListPage", () => {
  let component: NewListPage;
  let fixture: ComponentFixture<NewListPage>;

  let dbTest: DatabaseService;
  let dataListForTest;

  beforeEach(waitForAsync(async () => {
   await TestBed.configureTestingModule({
      declarations: [NewListPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        {
          provide: Storage,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    dataListForTest = new ListModel("Title 1", ["1", "2", "3"], 321);
    dbTest = TestBed.inject(DatabaseService);
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Check List variable types", () => {
    expect(dataListForTest.title).toEqual(jasmine.any(String));
    expect(dataListForTest.myLists).toEqual(jasmine.any(Array));
    expect(dataListForTest.createdat).toEqual(jasmine.any(Number));
  });

  it("Check if array of lists is not null or undefined", () => {
    expect(dataListForTest.myLists).not.toBeNull();
    expect(dataListForTest.myLists).not.toBeUndefined();

    expect(dataListForTest.myLists).not.toBeNull();
    expect(dataListForTest.myLists).not.toBeUndefined();
  });

  it("Checking Manual input values", () => {
    expect(dataListForTest.myLists).toEqual(["1", "2", "3"]);
    expect(dataListForTest.createdat).toEqual(321);
  });

  it("Check if Database is inserting data", () => {

    const spy = spyOn(dbTest, "Insert").and.callThrough();
    dbTest.Insert(1234, dataListForTest);
    expect(spy).toHaveBeenCalledWith(1234, dataListForTest);
    
  });
});
