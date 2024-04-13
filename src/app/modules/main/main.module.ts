import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MainRoutingModule} from "./main-routing.module";
import {RouterModule} from "@angular/router";
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    LoginComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
