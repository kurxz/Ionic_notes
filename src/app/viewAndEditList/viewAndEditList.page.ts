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
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { DatabaseService } from "../services/database.service";
import { formatDate } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-viewAndEditList",
  templateUrl: "./viewAndEditList.page.html",
  styleUrls: ["./viewAndEditList.page.scss"],
})
export class ViewAndEditListPage implements OnInit {
  data: any;
  id: number;
  oldList: any;
  list: any = null;
  title: string;

  created: Date;

  yesAnswer: string;
  noAnswer: string;
  alert: string;
  alertText: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private database: DatabaseService,
    private translate: TranslateService
  ) {
    this.getTranslations();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      if (this.router.getCurrentNavigation().extras.state != null) {
        this.data = null;
        this.data = this.router.getCurrentNavigation().extras.state.data;

        this.id = this.data.id;
        this.created = this.data.created;
        this.oldList = this.data.list;
        this.title = this.oldList.title;
        this.created = this.data.list.createdat;

        await this.oldListToNew();
      } else {
        this.goToHomePage();
      }
    });
  }

  async getTranslations() {
    await this.translate
      .get("translations.viewAndEditPage")
      .toPromise()
      .then((translation) => {
        this.alertText = translation.alertText;
      });

    await this.translate
      .get("translations.general")
      .toPromise()
      .then((translation) => {
        this.yesAnswer = translation.yesAnswer;
        this.noAnswer = translation.noAnswer;
        this.alert = translation.alert;
      });
  }

  async oldListToNew() {
    this.list = [];

    var arraySize = this.oldList.myLists.length;

    for (var i = 0; i < arraySize; i++) {
      this.list.push({
        item: this.oldList.myLists[i].item,
        isDone: this.oldList.myLists[i].isDone,
      });
    }
  }

  async filterEntry() {
    var filteredEntries = this.list.filter(this.deleteEmptyEntry);
    this.list = filteredEntries;
  }

  deleteEmptyEntry(obj) {
    if ("item" in obj && typeof obj.item === "string" && obj.item !== "") {
      return true;
    } else {
      return false;
    }
  }

  Add() {
    this.list.push({ item: "", isDone: false });
  }

  RemoveItem(index) {
    this.list.splice(index, 1);
  }

  goToHomePage() {
    this.router.navigate(["/home"]);
  }

  async Update() {
    var arrayLength = this.list.length;

    if (arrayLength > 0) {
      await this.filterEntry();

      let editedNow = formatDate(new Date(), "dd/MM/yyyy - HH:mm:ss", "en");
      let data = {
        title: this.title,
        myLists: this.list,
        createdat: this.created,
        edited: editedNow,
      };

      await this.database.Insert(this.id, data);

      this.goToHomePage();
    } else {
      this.msgAlertOK("VAZIO INSIRA");
    }
  }

  async Delete() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: this.alert,
      message: this.alertText,
      buttons: [
        {
          text: this.noAnswer,
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: this.yesAnswer,
          handler: () => {
            this.database.Delete(this.id);
            this.goToHomePage();
          },
        },
      ],
    });

    await alert.present();
  }

  async msgAlertOK(message) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      message: message,
      buttons: ["OK"],
    });

    await alert.present();
  }
}
