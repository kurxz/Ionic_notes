import { TestBed } from "@angular/core/testing";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageService } from "./languages.service";
import { Storage } from "@ionic/storage";

describe("LanguagesService", () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        {
          provide: Storage,
          LanguageService,
        },
      ],
    });
    service = TestBed.inject(LanguageService);
  });

  it("should be created LangService", () => {
    expect(service).toBeTruthy();
  });

  it("Test if defaultLang is called", () => {

    const spy = spyOn(service, "defaultLang").and.callThrough();
    service.defaultLang();
    expect(spy).toHaveBeenCalled();

  });

  it("Test if setLanguage is called", () => {

    const spy = spyOn(service, "setLanguage").and.callThrough();
    service.setLanguage('pt');
    expect(spy).toHaveBeenCalled();

  });
});
