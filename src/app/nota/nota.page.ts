import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DatabaseService } from "../database.service";

@Component({
  selector: "app-nota",
  templateUrl: "./nota.page.html",
  styleUrls: ["./nota.page.scss"],
})
export class NotaPage implements OnInit {
  texto;
  titulo;
  dia: number = Date.now();

  constructor(private route: Router, public database: DatabaseService) {}

  ngOnInit() {}

  Inicio() {
    this.route.navigate(["/home"]);
  }

  async Salvar() {
    let dados = { titulo: this.titulo, texto: this.texto };

    this.database.Inserir(this.dia, dados);

    this.Inicio();
  }
}
