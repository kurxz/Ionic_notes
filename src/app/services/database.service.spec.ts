import { TestBed } from "@angular/core/testing";
import { DatabaseService } from "./database.service";
import { Storage } from "@ionic/storage";

describe("DatabaseService", () => {
  let dbService: DatabaseService;
  let mockData;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [{ provide: Storage }],
    });
    dbService = TestBed.inject(DatabaseService);
    await dbService.resetDatabase();
    mockData = new MockDataClass("Test", "Test Text", 987654);
  });

  it("should be created", () => {
    expect(dbService).toBeTruthy();
  });

  it("Check if Database Insert is being called", () => {
    const spy = spyOn(dbService, "Insert").and.callThrough();
    dbService.Insert(1234, mockData);
    expect(spy).toHaveBeenCalled();
  });

  it("Check if Database notesCount and returnNotesCount is being called", () => {
    const spy = spyOn(dbService, "notesCount").and.callThrough();
    dbService.notesCount();

    const spy2 = spyOn(dbService, "returnNotesCount").and.callThrough();
    dbService.returnNotesCount();

    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it("Check if Database returnNotesCount is returning zero", async () => {
  
    const spy = spyOn(dbService, "returnNotesCount").and.callThrough();
    await dbService.returnNotesCount().then((value) => {
      expect(value).toEqual(0);
    });
 
  });

  it("Check if Database listAll is being called", () => {
    const spy = spyOn(dbService, "listAll").and.callThrough();
    dbService.listAll();
    expect(spy).toHaveBeenCalled();
  });

  it("Check if Database showList is being called", () => {
    const spy = spyOn(dbService, "showList").and.callThrough();
    dbService.showList();
    expect(spy).toHaveBeenCalled();
  });

  it("Check if Database Update is being called", () => {
    const spy = spyOn(dbService, "Update").and.callThrough();
    dbService.Update(123, mockData);
    expect(spy).toHaveBeenCalled();
  });

  it("Check if Database resetDatabase is being called", () => {
    const spy = spyOn(dbService, "resetDatabase").and.callThrough();
    dbService.resetDatabase();
    expect(spy).toHaveBeenCalled();
  });

  it("Check if Database setLang is being called", () => {
    const spy = spyOn(dbService, "setLang").and.callThrough();
    dbService.setLang("pt");
    expect(spy).toHaveBeenCalled();
  });

  it("Check if Database getLang is working", async () => {
    await dbService.setLang("pt");
    const spy = spyOn(dbService, "getLang").and.callThrough();
     dbService.getLang().then((value) => {
      expect(value).toEqual("pt");
    });
    expect(spy).toHaveBeenCalled();
  });
});

export class MockDataClass {
  title: String;
  text: String;
  myList: [];
  createdat: number;

  constructor(title, text, createdat) {
    this.title = title;
    this.text = text;
    this.createdat = createdat;
  }
}
