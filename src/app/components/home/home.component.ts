import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {

  churches: any[];

  constructor(
              private router: Router,
              private navController: NavController) {}

  ionViewWillEnter() {
  
  }

  questions() {
    this.router.navigate(['flagged-questions']);
  }

  answers() {
    this.router.navigate(['/flagged-answers']);
  }

}
