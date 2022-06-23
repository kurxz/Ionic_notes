import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { RouterTestingModule } from "@angular/router/testing";
import { viewAndEditPage } from "./viewAndEdit.page";
import { Storage } from "@ionic/storage";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

describe("viewAndEditPage", () => {
  let component: viewAndEditPage;
  let fixture: ComponentFixture<viewAndEditPage>;

  let mockRouter = {
    navigate: jasmine.createSpy("navigate"),
    getCurrentNavigation: () => {
      return {
        extras: {
          state: {
            data: "Opa opa opa",
          },
        },
      };
    },
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [viewAndEditPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        { provide: Storage },
        { provide: TranslateService, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(viewAndEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  xit("should create viewAndEdit| Skipped due conflict of ngx-translate and Jasmine", () => {
    expect(component).toBeTruthy();
    
  });
});
