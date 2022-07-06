import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/component/login/login.component';
import {HomeComponent} from './modules/component/home/home.component';
import { ReceiveMessComponent } from './modules/component/receiveMess/receiveMess.component';
import { SendMessComponent } from './modules/component/sendMess/sendMess.component';
import { StatisticalComponent } from './modules/component/statistical/statistical.component';
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
{ path: 'statistical', 
    component: StatisticalComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
