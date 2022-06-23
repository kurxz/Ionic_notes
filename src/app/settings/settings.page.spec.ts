import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { settingsPage } from "./settings.page";
import { Storage } from "@ionic/storage";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { LanguageService } from "../services/languages.service";
import { RouterTestingModule } from "@angular/router/testing";

describe("settingsPage", () => {

  let component: settingsPage;
  let fixture: ComponentFixture<settingsPage>;

  beforeAll(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [settingsPage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        RouterTestingModule,
      ],
      providers: [
        { provide: Storage },
        { provide: TranslateService },
        { provide: LanguageService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(settingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Test if updateLangFromDB is called", () => {
    const spy = spyOn(component, "updateLangFromDB").and.callThrough();
    component.updateLangFromDB()
    expect(spy).toHaveBeenCalled();
  });

  it("Test if getTranslations is called", () => {
    const spy = spyOn(component, "getTranslations").and.callThrough();
    component.getTranslations()
    expect(spy).toHaveBeenCalled();
  });

  it("Test if langSet is called", () => {
    const spy = spyOn(component, "langSet").and.callThrough();
    component.langSet('en')
    expect(spy).toHaveBeenCalledWith('en');
  });
  
});
