import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ToastModule } from 'super-toasty';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule.forRoot({ brand: 'AngularFirebase.com' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
