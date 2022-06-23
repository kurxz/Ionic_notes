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

import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { DatabaseService } from "../services/database.service";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "../services/languages.service";

@Component({
  selector: "app-config",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class settingsPage implements OnInit {
  contributors: string;
  alert: string;
  langSetTo: string;
  resetText: string;
  yesAnswer: string;
  noAnswer: string;
  langfromDB: string;

  constructor(
    public alertController: AlertController,
    private database: DatabaseService,
    public translate: TranslateService,
    public languageservice: LanguageService
  ) {}

  languagesArray: any = [
    {
      langName: "Português Brasil",
      code: "pt",
    },

    {
      langName: "English",
      code: "en",
    },

    {
      langName: "Español",
      code: "es",
    },

    {
      langName: "Italiano",
      code: "it",
    },
  ];

  async ngOnInit() {
    await this.getTranslations();
    await this.updateLangFromDB();
  }

  ionViewWillEnter() {
    this.languageservice.defaultLang();
  }

  async updateLangFromDB() {
    await this.database.getLang().then((langCode) => {
      this.langfromDB = langCode;
    });
  }

  async doRefresh() {
    await this.updateLangFromDB();
    await this.getTranslations();
    await this.translate.use(this.langfromDB);

    setTimeout(() => {}, 1000);
  }

  async getTranslations() {
    await this.translate
      .get("translations.settingsPage")
      .toPromise()
      .then((translation) => {
        this.resetText = translation.resetText;
        this.langSetTo = translation.langSetTo;
        this.contributors = translation.contributorsText;
      });

    await this.translate
      .get("translations.general")
      .toPromise()
      .then((translation) => {
        this.alert = translation.alert;
        this.yesAnswer = translation.yesAnswer;
        this.noAnswer = translation.noAnswer;
      });
  }

  async warningReset() {
    await this.getTranslations().then(async (fuction) => {
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: this.alert,
        message: this.resetText,
        buttons: [
          {
            text: this.yesAnswer,
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              this.database.resetDatabase();
            },
          },
          {
            text: this.noAnswer,
            handler: () => {},
          },
        ],
      });

      await alert.present();
    });
  }

  async langSet(langcode) {
    let languageCode = langcode.detail.value;

    await this.database.setLang(languageCode);
    await this.getTranslations();
    this.langSetAlert(languageCode);
  }

  async contributorsAlert() {
    await this.getTranslations().then(async (fuction) => {
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: this.contributors + " :)",
        message: "Lucyferinna uwu - Español",
        buttons: ["OK"],
      });

      await alert.present();
    });
  }

  async langSetAlert(langcode) {
    var fullnameofLang = "";
    switch (langcode) {
      case "pt":
        fullnameofLang = "Português Brasil";

        break;

      case "en":
        fullnameofLang = "English";
        break;

      case "es":
        fullnameofLang = "Español";

        break;

      case "it":
        fullnameofLang = "Italiano";

        break;

      default:
        break;
    }

    if (this.langfromDB != langcode) {
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: this.alert,
        message: this.langSetTo + ": " + fullnameofLang,
        buttons: ["OK"],
      });

      await alert.present();
      await this.doRefresh();
      await alert.onDidDismiss();
    }
  }
}