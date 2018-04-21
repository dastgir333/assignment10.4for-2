import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './app.component';
import { DropDownService } from "app/service/drop-down.service";

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DropDownService],
  bootstrap: [RootComponent]
})
export class AppModule { }
