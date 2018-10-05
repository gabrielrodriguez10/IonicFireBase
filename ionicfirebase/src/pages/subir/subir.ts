import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


/**
 * Generated class for the SubirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  constructor(private viewCtrl: ViewController) {
  }
  
  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

  mostrar_camara(){
    console.log("mostrando camara");
  }

  seleccionar_foto(){
    console.log("seleccionar foto");
  }

  crear_post(){
    console.log("crear post");
  }

}
