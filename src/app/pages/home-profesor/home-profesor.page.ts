import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.page.html',
  styleUrls: ['./home-profesor.page.scss'],
})
export class HomeProfesorPage implements OnInit {
  usuario : string = ''
  constructor(private navCtrl:NavController) { }

  ngOnInit() : void{
    this.usuario = localStorage.getItem("usuario") ?? ''
  }
  listar_cursos(){
    this.navCtrl.navigateForward('/mis-cursos-profesor')
  }
  qr(){
    this.navCtrl.navigateForward('/generar-qr')
  }
  reporteria(){
    this.navCtrl.navigateForward('/reporteria')
  }
  cerrar_sesion(){
    this.navCtrl.navigateForward('/login')
  }

}
