/*
               _____            _        _   _       _            
              |_   _|          (_)      | \ | |     | |           
                | |  ___  _ __  _  ___  |  \| | ___ | |_ ___  ___ 
                | | / _ \| '_ \| |/ __| | . ` |/ _ \| __/ _ \/ __|
               _| || (_) | | | | | (__  | |\  | (_) | ||  __/\__ \
              |_____\___/|_| |_|_|\___| |_| \_|\___/ \__\___||___/

             
   Copyright [2021] [KurXZ] [https:github.com/kurxz]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

    http:www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.    

*/   

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatabaseService } from "../services/database.service";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService, private database: DatabaseService) {

  }

   async defaultLang() {

    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    await this.database.getLang().then(async langCode => {

      if (langCode == "null") {

        await this.setLanguage('en');

      } else {
        await this.setLanguage(langCode);

      }
    })

  }

   async setLanguage(langCode) {
    this.translate.use(langCode);
    await this.database.setLang(langCode);

  }

}
