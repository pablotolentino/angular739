import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-example',
  templateUrl: './data-example.component.html',
  styleUrls: ['./data-example.component.css'],
  host:{
    '(click)':'onClickHost()'
  }
})
export class DataExampleComponent implements OnInit {

  private name: string;
  constructor() { }

  ngOnInit() {
    this.name = 'Pablo';
  }

  /**
   * onClick
   */
  public onClick() {
  console.log('Clicked');
  
  }

  /**
   * onClickHost
   */
  public onClickHost() {
    
  }
}
