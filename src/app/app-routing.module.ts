import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/component/login/login.component';
import {HomeComponent} from './modules/component/home/home.component';
const routes: Routes = [

  { path: '', component: HomeComponent
},
  { path: 'login', 
    component: LoginComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
