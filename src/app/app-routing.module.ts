import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/component/login/login.component';
import {HomeComponent} from './modules/component/home/home.component';
import { ReceiveMessComponent } from './modules/component/receiveMess/receiveMess.component';
import { SendMessComponent } from './modules/component/sendMess/sendMess.component';
const routes: Routes = [

  { path: '', component: HomeComponent
},
  { path: 'login', 
    component: LoginComponent
},
{ path: 'sendmess', 
    component: SendMessComponent
},
{ path: 'receivemess', 
    component: ReceiveMessComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
