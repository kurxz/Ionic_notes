import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { DatabaseService } from "../services/database.service";
import { Router } from "@angular/router";
import { formatDate } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-newList",
  templateUrl: "./newList.page.html",
  styleUrls: ["./newList.page.scss"],
})
export class NewListPage implements OnInit {
  list: any = [];
  day: number = Date.now();
  title: string;

  constructor(
    public alertController: AlertController,
    public database: DatabaseService,
    private router: Router,
    public translate: TranslateService
  ) {}

  async ngOnInit() {
  
  }

async ionViewWillEnter(){
  await this.getTranslations();
  console.log(this.emptyListTranslation)
}

  emptyListTranslation: string;

  async getTranslations() {
    await this.translate
      .get("translations.newListPage")
      .toPromise()
      .then((translation) => {
        this.emptyListTranslation = translation.emptyList;
      });
  }

  async filterEntry() {
    var filteredEntries = this.list.filter(this.deleteEmptyEntry);
    this.list = filteredEntries;
  }

  deleteEmptyEntry(obj) {
    if ("item" in obj && typeof obj.item === "string" && obj.item != "") {
      return true;
    } else {
      return false;
    }
  }

  async saveButton() {
    await this.filterEntry();
    var arrayLength = this.list.length;

    if (arrayLength > 0) {
      console.log(this.list);

      let today = formatDate(new Date(), "dd/MM/yyyy - HH:mm:ss", "en");
      let data = { title: this.title, myLists: this.list, createdat: today };

      await this.database.Insert(this.day, data);
      this.list = [];
      this.goToHomePage();
    } else {
      this.msgAlertOK(this.emptyListTranslation);
    }
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

  Add() {
    this.list.push({ item: "", isDone: false });
  }

  RemoveItem(index) {
    this.list.splice(index, 1);
  }

  goToHomePage() {
    this.router.navigate(["/home"]);
  }
}
