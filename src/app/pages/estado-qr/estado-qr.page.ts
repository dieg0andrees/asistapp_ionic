import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-estado-qr',
  templateUrl: './estado-qr.page.html',
  styleUrls: ['./estado-qr.page.scss'],
})
export class EstadoQrPage implements OnInit {
  
  nombres: string[] = ['Pedro Perez', 'Maria Rodriguez', 'Juan Lopez', 'Laura Garcia', 'Carlos Gonzalez'];
  asistencia: boolean[] = [true, false, true, false, true]; // true = Presente, false = Ausente

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  volverqr(){
    this.navCtrl.navigateForward('/generar-qr')
  }

}
