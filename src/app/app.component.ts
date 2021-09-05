import { LanguageService } from './services/languages.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  navigate : any;
  
   constructor(private LanguageService: LanguageService, public translate: TranslateService) {
     
    this.LanguageService.defaultLang();
  
  }


}
