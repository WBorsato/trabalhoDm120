import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public router: Router) { }
  goToTempPage() {
    this.router.navigate(['temperature']);
  }
  goToLumiPage() {
    this.router.navigate(['luminosidade']);
  }
  goToUmidPage() {
    this.router.navigate(['umidade']);
  }
  goToColorPage() {
    this.router.navigate(['current-color']);
  }
  goToBuzzerPage() {
    this.router.navigate(['buzzer']);
  }
  ngOnInit() {
  }

}
