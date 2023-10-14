import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  hasCounter !: boolean;
  counter !: number;

  constructor() {
    this.counter = 0;
  }

  ngOnInit(): void {
  }

  onClickCounter(): void {
    this.hasCounter = true;
    this.counter++;
    console.log('Clicks Generados ' + this.counter);
  }


  onResetCounter() {
    this.counter = 0;
  }

  onRestClickCounter() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
