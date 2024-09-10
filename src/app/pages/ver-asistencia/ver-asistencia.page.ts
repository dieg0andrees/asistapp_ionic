import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ver-asistencia',
  templateUrl: './ver-asistencia.page.html',
  styleUrls: ['./ver-asistencia.page.scss'],
})
export class VerAsistenciaPage implements OnInit {
  asistencias: number[] = [70, 65, 85, 90, 55, 78, 80];
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navCtrl.navigateForward('/mis-cursos-profesor')
  }

}
