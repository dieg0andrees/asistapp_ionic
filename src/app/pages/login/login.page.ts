import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario : string = ''
  contrasena : string = ''
  constructor(private navCtrl:NavController, private alertCtrl:AlertController) { }

  ngOnInit() {
  }
  validar(){
    if (this.contrasena == 'alumno'){
      localStorage.setItem("usuario", this.usuario)
      this.navCtrl.navigateForward('/home-alumno')
    }
    else if (this.contrasena == 'profesor'){
      localStorage.setItem("usuario", this.usuario)
      this.navCtrl.navigateForward('/home-profesor')
    }
    else{
      this.presentAlert()
    }
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header : 'Error',
      subHeader : 'Validacion usuario',
      message : 'Usuario o Contraseña Incorrecta',
      buttons : ['Aceptar'], 
    });
    await alert.present();
  }
}
