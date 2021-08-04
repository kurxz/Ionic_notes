import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { DatabaseService } from "../database.service";

@Component({
  selector: "app-config",
  templateUrl: "./config.page.html",
  styleUrls: ["./config.page.scss"],
})
export class ConfigPage implements OnInit {
  constructor(
    public alertController: AlertController,
    private database: DatabaseService
  ) {}

  async AlertaDB() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Aviso!",
      message:
        "Você está prestes a resetar o banco de dados. <p> <strong>Todas suas anotações serão perdidas </strong> </p> <p>Deseja prosseguir?</p>",
      buttons: [
        {
          text: "Sim",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            this.database.ResetarDB();
          },
        },
        {
          text: "Não",
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {}
}
