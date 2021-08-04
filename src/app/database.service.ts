import { Injectable } from "@angular/core";
import { Storage, IonicStorageModule } from "@ionic/storage-angular";
import { ToastController } from "@ionic/angular";

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
    // If using, define drivers here: await this.storage.defineDriver(/*...);
    const storage = await this.storage.create();   
    await this.storage.setEncryptionKey('key');
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  /* public set(key: string, value: any) {
    this._storage?.set(key, value);
  }*/

  tamanhoDB: number;

  public async Inserir(key, dados) {
    try {
      this.storage.set(key, dados);
    } catch (error) {
      const toast = await this.toastController.create({
        message: "Houve um erro ao inserir sua anotação",
        duration: 2000,
      });
      toast.present();
    }
  }

  public Buscar(id) {
    let itens: any = [];

    this.storage.get(id).then((dados) => {
      itens.push({ titulo: dados.titulo, texto: dados.texto });
    });

    return itens;
  }

  public async dbTamanho() {
    var f;
    await this.storage.length().then(async (result) => {
      f = result;
    });

    return f;
  }

  async retornaTamanho() {
    const result = await this.dbTamanho();

    return result;
  }

  public listarTudo() {
    let itens: any = [];

    this.storage.forEach((key, value, index) => {
      this.storage.get(value).then((val) => {
        itens.push({ titulo: val.titulo, texto: val.texto, id: value });
      });
    });
    return itens;
  }

  async Deletar(key) {
    try {
      this.storage.remove(key);
    } catch (error) {
      const toast = await this.toastController.create({
        message: "Houve um erro ao deletar sua anotação",
        duration: 2000,
      });
      toast.present();
    }
  }

  Atualizar(key, dados) {
    this.storage.set(key, dados);
  }

  async ResetarDB() {
    try {
      this.storage.clear();

      const toast = await this.toastController.create({
        message: "Banco de dados resetado",
        duration: 2000,
      });
      toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: "Houve um erro ao deletar o banco de dados",
        duration: 2000,
      });
      toast.present();
    }
  }
}
