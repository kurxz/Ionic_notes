import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { RouterTestingModule } from "@angular/router/testing";
import { ViewAndEditListPage } from "./viewAndEditList.page";
import { Storage } from "@ionic/storage";
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService, TranslateStore } from "@ngx-translate/core";

describe("ViewAndEditListPage", () => {
  let component: ViewAndEditListPage;
  let fixture: ComponentFixture<ViewAndEditListPage>;

  let mockRouter = {
  //  navigate: jasmine.createSpy("navigate"),
    getCurrentNavigation: () => {
      return {
        extras: {
          state: {
            data: {
               id: "Opa opa",
               created: "01/01/2022",
               list: {createdat: "0"},
               title: "Title test",      
              },
          },
        },
      };
    },
  };
 
  beforeEach(waitForAsync(() => { 
    TestBed.configureTestingModule({
      declarations: [ViewAndEditListPage],
      
      imports: [
        IonicModule.forRoot(), 
        TranslateModule.forRoot(),
        RouterTestingModule
      ],     
      providers: [
        { provide: TranslateService },
        { provide: TranslatePipe },
        { provide: Storage },
        { provide: TranslateStore },
        { provide: RouterTestingModule, useValue: mockRouter },
      ],
      
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAndEditListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  xit("should create viewAndEditList | Skipped due conflict of ngx-translate and Jasmine", () => {
    expect(component).toBeTruthy();
  
  });
});
