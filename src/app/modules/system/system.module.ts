import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,MatFormFieldModule,MatInputModule
  ]
})
export class SystemModule { }
