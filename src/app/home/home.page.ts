import { DatabaseService } from "./../database.service";
import { Component } from "@angular/core";
import { ActionSheetController, MenuController } from "@ionic/angular";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  lista = [];

  notas;

  constructor(
    public actionSheetController: ActionSheetController,
    private route: Router,
    public database: DatabaseService,
    public menuCtrl: MenuController
  ) {}

  async listarTudo() {
    this.lista = await this.database.listarTudo();

    let x = await this.database.retornaTamanho();

    if (x == 0 || x == undefined) {
      this.notas = 0;
    } else {
      this.notas = 1;
    }
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.listarTudo();
  }

  visualizarDetalhes(id, titulo, texto) {
    var info = {
      id: id,
      titulo: titulo,
      texto: texto,
    };

    let navigationExtras: NavigationExtras = {
      state: {
        data: info,
      },
    };

    this.route.navigate(["visualizar"], navigationExtras);
  }

  doRefresh(event) {
    this.listarTudo();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
