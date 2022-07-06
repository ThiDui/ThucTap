import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-sendMess',
  templateUrl: './sendMess.component.html',
  styleUrls: ['./sendMess.component.css']
})
export class SendMessComponent implements OnInit {

  public send: any;
  public filterDate = undefined;

  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  totalLength:any;
  page:number = 1;
  constructor(private serviceservice: ServiceService) { }

  ngOnInit(): void {
    this.serviceservice.getSendMess().subscribe((data) => {
      console.log('send',data);
      this.send=data;
      this.totalLength=data.length;
    });

    // this.send.paginator = this.paginator;
  }

clearFilter(){
  this.filterDate=undefined;
}



// //sort du lieu
// key:string = 'id';
// reverse:boolean = false;
// sort(key: string){
//   this.key=key;
//   this.reverse=!this.reverse
// }




}
