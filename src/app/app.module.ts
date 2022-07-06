import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
 declarations: [ AppComponent, CardComponent],
 imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
