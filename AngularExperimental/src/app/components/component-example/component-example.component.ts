import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.css']
})
export class ComponentExampleComponent implements OnInit {

  private show: boolean;
  private colors: string[];
  private style: string;

  constructor() { }

  ngOnInit() {
    this.show = true;
    this.colors = ['red', 'green', 'blue', 'orange', 'brown'];
    this.style = 'italic';
  }

}
