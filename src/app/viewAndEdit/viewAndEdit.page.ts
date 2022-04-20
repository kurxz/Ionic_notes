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
import { TranslateService } from "@ngx-translate/core";
import { DatabaseService } from "../services/database.service";
import * as moment from 'moment';

@Component({
  selector: "app-visualizar",
  templateUrl: "./viewAndEdit.page.html",
  styleUrls: ["./viewAndEdit.page.scss"],
})
export class viewAndEditPage implements OnInit {

  data: any;
  id: number = null;
  newTitle: string;
  newText: string;
  created: any;
  edited: string = null;

  yesAnswer: string;
  noAnswer: string;
  alert: string;
  alertText: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private database: DatabaseService,
    private alertController: AlertController,
    private translate: TranslateService
  ) {
    this.getTranslations();
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

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state != null) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.id = this.data.id;
        this.newTitle = this.data.note.title;
        this.newText = this.data.note.text;
        this.created = this.data.note.createdat;
        this.edited = this.data.note.edited;
      } else {
        this.router.navigate(["/home"]);
      }
    });
  }

  
  ionViewWillLeave () {

    delete this.data;
    delete this.id
    delete this.newTitle;
    delete this.newText
    delete this.created
    delete this.edited
  
  }

  goToHomePage() {
    this.router.navigate(["/home"]);
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
            this.router.navigate(["/home"]);
          },
        },
      ],
    });

    await alert.present();
  }

  async Update() {
  
    let data = {
      title: this.newTitle,
      text: this.newText,
      createdat: this.created,
      edited: Date.now(),
    };

    this.database.Update(this.id, data);
    this.router.navigate(["/home"]);
  }

  formatDates(date){
    var result = moment(date).format('D MMMM YYYY, h:mm:ss a')
    return result
   }

}
