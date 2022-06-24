import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-sendMess',
  templateUrl: './sendMess.component.html',
  styleUrls: ['./sendMess.component.css']
})
export class SendMessComponent implements OnInit {

  constructor(private serviceservice: ServiceService) { }

  ngOnInit() {
  }

}
