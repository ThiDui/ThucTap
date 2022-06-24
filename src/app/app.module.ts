import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './modules/component/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import  { LoginComponent } from './modules/component/login/login.component';
import { SendMessComponent } from './modules/component/sendMess/sendMess.component';
import { ReceiveMessComponent } from './modules/component/receiveMess/receiveMess.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SendMessComponent,
    ReceiveMessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
