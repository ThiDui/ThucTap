import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-receiveMess',
  templateUrl: './receiveMess.component.html',
  styleUrls: ['./receiveMess.component.css']
})
export class ReceiveMessComponent implements OnInit {

  constructor(private serviceservice: ServiceService) { }

  ngOnInit() {
  }

}
