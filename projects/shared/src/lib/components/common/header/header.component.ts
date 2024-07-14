import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
@Output() sliderInfo = new EventEmitter();
menuOpen:boolean = false;
  constructor(public router:Router){
    console.log(this.router.url)
  }
}
