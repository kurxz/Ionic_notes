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
import { Router } from "@angular/router";
import { DatabaseService } from "../services/database.service";

@Component({
  selector: "app-nota",
  templateUrl: "./newNote.page.html",
  styleUrls: ["./newNote.page.scss"],
})
export class newNote implements OnInit {

  text;
  title;

  constructor(private route: Router, public database: DatabaseService) {}

  ngOnInit() {}

  homePage() {
    this.route.navigate(["/home"]);
  }

  ionViewWillLeave() {
    delete this.text;
    delete this.title;
  }

  async save() {
    if (this.text == undefined) {
    } else {
      
      let data = new NoteModel(this.title, this.text, Date.now());
      await this.database.Insert(Date.now().toString(), data).then(() => {
        data = null;
        this.homePage();
      });
      
    }
  }
}

export class NoteModel {
  title: String;
  text: String;
  createdat: Number;

  constructor(title, text, createdat) {
    this.title = title;
    this.text = text;
    this.createdat = createdat;
  }
}
