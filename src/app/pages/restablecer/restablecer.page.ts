import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  usuario : string = ''
  nueva_contrasena : string = ''
  nueva_contrasena2 : string = ''
  
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  ir_login(){
    this.navCtrl.navigateForward('/login')
  }

}
