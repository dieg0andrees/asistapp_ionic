import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navCtrl.navigateForward('/generar-qr')
  }
   
  estadoqr(){
    this.navCtrl.navigateForward('/estado-qr')
  }
}
