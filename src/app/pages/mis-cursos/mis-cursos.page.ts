import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.page.html',
  styleUrls: ['./mis-cursos.page.scss'],
})
export class MisCursosPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  volver(){
    this.navCtrl.navigateForward('/home-alumno')
  }
}
