import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertiesComponent } from './shared/components/properties/properties.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
