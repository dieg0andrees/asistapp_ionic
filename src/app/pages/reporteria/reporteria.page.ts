import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-reporteria',
  templateUrl: './reporteria.page.html',
  styleUrls: ['./reporteria.page.scss'],
})
export class ReporteriaPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navCtrl.navigateForward('/home-profesor')
  }

}
