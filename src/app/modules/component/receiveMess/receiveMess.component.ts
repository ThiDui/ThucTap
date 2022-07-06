import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-receiveMess',
  templateUrl: './receiveMess.component.html',
  styleUrls: ['./receiveMess.component.css']
})
export class ReceiveMessComponent implements OnInit {

  public receive: any;
  public filterDate: undefined;

  totalLength:any;
  page:number = 1;
  constructor(private serviceservice: ServiceService) { }

  ngOnInit(): void {
    this.serviceservice.getReceiveMess().subscribe((data) => {
      console.log('receive',data);
      this.receive=data;
      this.totalLength=data.length;
    });
}

clearFilter(){
  this.filterDate=undefined;
}
}
