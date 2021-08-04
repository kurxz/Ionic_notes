import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { DatabaseService } from "../database.service";

@Component({
  selector: "app-visualizar",
  templateUrl: "./visualizar.page.html",
  styleUrls: ["./visualizar.page.scss"],
})
export class VisualizarPage implements OnInit {
  data: any;
  id: number;
  tituloNovo: string;
  textoNovo: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public database: DatabaseService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.id = this.data.id;
        this.tituloNovo = this.data.titulo;
        this.textoNovo = this.data.texto;
      } else {
        this.paginaInicial();
      }
    });
  }

  paginaInicial() {
    this.navCtrl.navigateForward("/home");
  }

  Deletar() {
    this.database.Deletar(this.id);

    setTimeout(() => {
      this.paginaInicial();
    }, 500);
  }

  async Atualizar() {
    let dados = { titulo: this.tituloNovo, texto: this.textoNovo };

    this.database.Atualizar(this.id, dados);

    this.navCtrl.navigateForward("/home");
  }
}
