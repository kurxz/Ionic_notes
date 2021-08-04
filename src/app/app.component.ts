import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  navigate : any;

  constructor() {
 
    this.sideMenu();
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Início",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Nova nota",
        url   : "/nota",
        icon  : "add"
      },
      {
        title : "Configurações",
        url   : "/config",
        icon  : "settings"
      },
    ]
  }

  
}
