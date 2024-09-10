import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})
export class LeerQrPage implements OnInit {

  constructor(private navCtrl:NavController, private alertCtrl:AlertController) { }

  ngOnInit() {
  }
  async qr_exito() {
    const alert = await this.alertCtrl.create({
      header: '¡Exito!',
      subHeader: 'Código Escaneado Correctamente',
      message: 'Haz quedado presente en la clase',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  async qr_no_exito() {
    const alert = await this.alertCtrl.create({
      header: '¡Error!',
      subHeader: 'El código ha Expirado',
      message: 'Contacta a tu profesor si crees que esto es un error',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  volver(){
    this.navCtrl.navigateForward('/home-alumno')
  }
}
