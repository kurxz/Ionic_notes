import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { DatabaseService } from "../services/database.service";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-newList",
  templateUrl: "./newList.page.html",
  styleUrls: ["./newList.page.scss"],
})
export class NewListPage implements OnInit {
  list: any = [];
  title: string;
  emptyListTranslation: string;

  constructor(
    public alertController: AlertController,
    public database: DatabaseService,
    private router: Router,
    public translate: TranslateService
  ) {}

  async ngOnInit() {}

  async ionViewWillEnter() {
    await this.getTranslations();
    this.title = null;
  }

  async ngOnDestroy() {
    delete this.list;
    delete this.title;
  }

  async getTranslations() {
    await this.translate
      .get("translations.newListPage")
      .subscribe((translation) => {
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
      let data = new ListModel(this.title, this.list, Date.now());

      await this.database.Insert(Date.now(), data).then(() => {
        data = null;
        this.list = [];
        this.goToHomePage();
      });
      
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

export class ListModel {
  title: String;
  myLists: [];
  createdat: Number;

  constructor(title, myList, createdat) {
    this.title = title;
    this.myLists = myList;
    this.createdat = createdat;
  }
}
