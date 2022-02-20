import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styles: [
    `
      .white-text {
        color: white;
      }
    `,
  ],
})
export class DirectiveTestComponent implements OnInit {
  showButton: Boolean = true;
  numberOfClicks: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  toggleButton(event: Event) {
    this.showButton = !this.showButton;
    this.numberOfClicks.push(Math.floor(event.timeStamp));
  }
}
