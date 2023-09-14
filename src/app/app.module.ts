import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerapantallaComponent } from './primerapantalla/primerapantalla.component';
import { SegundapantallaComponent } from './segundapantalla/segundapantalla.component';
import { EnlaceComponent } from './enlace/enlace.component';
import { ElementoComponent } from './elemento/elemento.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerapantallaComponent,
    SegundapantallaComponent,
    EnlaceComponent,
    ElementoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
