import { Component, OnInit, Inject} from '@angular/core';
import { DecoradorPipe} from './pipes/decorador.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DecoradorPipe]
})
export class AppComponent implements OnInit {
  private text;

  title = 'AngularExperimental';

  ngOnInit(){
    this.text = 'Angular 7';
  }
}
