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

import { Injectable } from "@angular/core";
import { Storage, IonicStorageModule } from "@ionic/storage-angular";
import { ToastController } from "@ionic/angular";
import * as moment from "moment";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  private _storage: Storage | null = null;

  constructor(
    private storage: Storage,
    public toastController: ToastController
  ) {
    this.init();
  }

  async init() {
    IonicStorageModule.forRoot();
    const storage = await this.storage.create();
    this._storage = storage;
  }

  notesNumber: number;

  async Insert(key, data) {
    if (key == null || data == null) return;

    try {
      this.storage.set(key, data);
    } catch (error) {
      const toast = await this.toastController.create({
        message: "Error",
        duration: 1000,
      });
      toast.present();
    }
  }

  async Find(id) {
    let items: any = [];
    await this.storage.get(id).then(async (data) => {
      if (id != "langCode") {
        await items.push({ title: data.title, text: data.text });
      }
    });

    return items;
  }

  async notesCount() {
    var notesCounter;
    await this.storage.length().then(async (result) => {
      notesCounter = result;
    });

    return notesCounter;
  }

  async returnNotesCount() {
    const result = await this.notesCount();
    return result;
  }

  listAll() {
    let items: any = [];

    this.storage.forEach((key, value, index) => {
      if (value != "langCode") {
        this.storage.get(value).then((data) => {

          if (data.text == "") {
            items.push({ text: data.list, id: value });
          }
          items.push({ title: data.title, text: data.text, id: value });
        });
      }
    });
    return items;
  }

  showList() {
    let list: any = [];

    this.storage.forEach((key, value, index) => {
      if (value != "langCode") {
        this.storage.get(value).then((data) => {
          list.push({ list: data, id: value });
        });
      }
    });
    return list;
  }

  async Delete(key) {
    try {
      await this.storage.remove(key);
    } catch (error) {
      const toast = await this.toastController.create({
        message: "Error",
        duration: 2000,
      });
      toast.present();
    }
  }

  async Update(key, data) {
    await this.storage.set(key, data);
  }

  async resetDatabase() {
    try {
      this.storage.clear();

      const toast = await this.toastController.create({
        message: "Ok",
        duration: 2000,
      });

      toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: "Error",
        duration: 1000,
      });
      toast.present();
    }
  }

  async setLang(langCode) {
    await this.storage.set("langCode", langCode || 'en');
  }

  async getLang() {
    return this.storage.get("langCode").then((language) => {
      moment.locale(language || 'en');
      return language;
    });
  }
}
