import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mis-cursos-profesor',
  templateUrl: './mis-cursos-profesor.page.html',
  styleUrls: ['./mis-cursos-profesor.page.scss'],
})

export class MisCursosProfesorPage implements OnInit {
   
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
   
  volver(){
    this.navCtrl.navigateForward('/home-profesor')
  }
}
