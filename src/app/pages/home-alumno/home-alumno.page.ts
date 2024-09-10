import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
  usuario : string = ''
  constructor(private navCtrl:NavController) { }

  ngOnInit(): void{
    this.usuario = localStorage.getItem("usuario") ?? ''
  }
 
  mis_cursos(){
    this.navCtrl.navigateForward('/mis-cursos')
  }
  leer_qr(){
    this.navCtrl.navigateForward('/leer-qr')
  }
  cerrar_sesion(){
    this.navCtrl.navigateForward('/login')
  }
}
