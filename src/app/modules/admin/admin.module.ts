import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {RouterModule} from "@angular/router";
import {LayoutModule} from "../../layout/layout.module";
import {LotComponent} from "./lot/lot.component";



@NgModule({
  declarations: [
    AdminComponent,
    LotComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        AdminRoutingModule,
        LayoutModule
    ],
  exports: [RouterModule],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
