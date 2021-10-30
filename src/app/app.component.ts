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

import { LanguageService } from "./services/languages.service";
import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ActionSheetController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  navigate: any;

  constructor(
    private LanguageService: LanguageService,
    private translate: TranslateService,
    private actionSheetController: ActionSheetController,
    private route: Router
  ) {}

  newListTranslation: string;
  newNoteTranslation: string;
  addTranslation: string;
  cancelTranslation: string;

  async getTranslations() {
    await this.translate
      .get("translations.sMenu")
      .toPromise()
      .then((translation) => {
        this.newNoteTranslation = translation.newNote;
        this.newListTranslation = translation.newList;
        this.cancelTranslation = translation.cancel;
      });

    await this.translate
      .get("translations.general")
      .toPromise()
      .then((translation) => {
        this.addTranslation = translation.add;
        this.cancelTranslation = translation.cancel;
      });
  }

  async ngOnInit() {}

  async ActionSheetMenu() {
    await this.LanguageService.defaultLang();
    await this.getTranslations();

    const actionSheet = await this.actionSheetController.create({
      cssClass: "my-custom-class",
      header: this.addTranslation,
      buttons: [
        {
          text: this.newNoteTranslation,
          icon: "pencil-outline",
          handler: () => {
            this.route.navigate(["/newNote"]);
          },
        },
        {
          text: this.newListTranslation,
          icon: "list-outline",
          handler: () => {
            this.route.navigate(["/newList"]);
          },
        },
        {
          text: this.cancelTranslation,
          icon: "close",
          role: "cancel",
          handler: () => {},
        },
      ],
    });

    await actionSheet.present();
  }
}
