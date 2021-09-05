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

import { DatabaseService } from "../services/database.service";
import { Component } from "@angular/core";
import { ActionSheetController, MenuController } from "@ionic/angular";
import { Router, NavigationExtras } from "@angular/router";
import { LanguageService } from '../services/languages.service'

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {

  listNotes = [];
  notes;

  constructor(
    public actionSheetController: ActionSheetController,
    private route: Router,
    public database: DatabaseService,
    public menuCtrl: MenuController,
    public languageservice: LanguageService
  ) { }

  async listAll() {

    this.listNotes = await this.database.listAll();

    let x = await this.database.returnNotesCount();
    if (x == 0 || x == undefined || x == 1) {

      this.notes = 0;

    } else {

      this.notes = 1;
    }
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.languageservice.defaultLang();
    this.listAll();

  }

  viewDetails(id, title, text) {
    
    var info = {
      id: id,
      title: title,
      text: text,
    };

    let navigationExtras: NavigationExtras = {
      state: {
        data: info,
      },
    };

    this.route.navigate(["viewAndEdit"], navigationExtras);
  }

  doRefresh(event) {
    this.listAll();

    this.languageservice.defaultLang();
    setTimeout(() => {

      event.target.complete();
    }, 2000);
  }

}
