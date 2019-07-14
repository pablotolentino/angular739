import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ComponentExampleComponent } from './components/component-example/component-example.component';
import { DecoradorPipe } from './pipes/decorador.pipe';
import { DataExampleComponent } from './components/data-example/data-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentExampleComponent,   
    DecoradorPipe, DataExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
