import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-reporteria-ri',
  templateUrl: './reporteria-ri.page.html',
  styleUrls: ['./reporteria-ri.page.scss'],
})
export class ReporteriaRiPage implements OnInit {

  nombres: string[] = ['Pedro Perez', 'Maria Rodriguez', 'Juan Lopez', 'Laura Garcia', 'Carlos Gonzalez'];
  aprobados: boolean[] = [true, false, true, false, true]; // true = Aprobado, false = Reprobado


  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  volverqr(){
    this.navCtrl.navigateForward('/home-profesor')
  }

  descargarPdf(){
    this.navCtrl.navigateForward('/home-profesor')
  }

  descargarXls(){
    this.navCtrl.navigateForward('/home-profesor')
  }

}
