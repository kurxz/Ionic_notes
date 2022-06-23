import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from "@ionic/storage";
import { HomePage } from "./home.page";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageService } from "../services/languages.service";
import { By } from "@angular/platform-browser";

describe("HomePage", () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(async() => {
   await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        {
          provide: Storage,
          LanguageService,
          // useValue: storageIonicMock
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Check if list notes is called", () => {
    const spy = spyOn(component, 'listAll').and.callThrough()
    component.listAll()
    expect(spy).toHaveBeenCalled()
  });

  
});
