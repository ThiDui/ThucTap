import { Component, ViewChild, DoCheck } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';
  isLogin = false;

  ngDoCheck(): void {
    if(localStorage.getItem("username") === null){
      this.isLogin = false
    }
    else {
      this.isLogin = true
    }
  }
  

  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  public isOpened = false;
  
  
  public openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
  }

  public closeLeftSide() {
    this.isOpened = false;
  }

  public  userLogout() {
    localStorage.clear();
    window.location.href = 'http://localhost:4200';
  }

}
