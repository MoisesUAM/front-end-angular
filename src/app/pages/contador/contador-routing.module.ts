import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContadorComponent} from "@app/pages/contador/contador.component";

const routes: Routes = [
  {
    path: '',
    component: ContadorComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContadorRoutingModule { }
