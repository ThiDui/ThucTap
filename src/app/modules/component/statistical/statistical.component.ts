import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ServiceService } from 'src/app/service/service.service';
// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.css']
})
export class StatisticalComponent implements OnInit {

  public recievestatistical: any;
  public sendstatistical: any;
  public array = [];

  constructor(private serviceservice: ServiceService) { }

  ngOnInit(): void {
    this.serviceservice.getSendStatistical().subscribe((data) => {
      console.log('sendstatistical', data);
      this.sendstatistical = data;

      //lay phan tu du lieu gui
      const sogoitingui = this.sendstatistical.map((num: any) => {
        return num[2];
      });

      const donvigui = this.sendstatistical.map((num: any) => {
        return num[0];
      });
      const sendLabels = []
      const loaiYeuCau = this.sendstatistical.map((num: any) => num[1])
      for (let i = 0; i < this.sendstatistical.length; i++) {
        sendLabels.push(donvigui[i] + "," + "loại: " + loaiYeuCau[i]);
      }

   //thuc hien ve bieu do cot
   const myChart = new Chart("myChart1", {
    type: 'bar',
    data: {
      labels: sendLabels,
      datasets: [{
        label: 'Đơn vị - Loại yêu cầu',
        data: sogoitingui,
        backgroundColor: "rgb(80, 80, 168)",
        borderColor: "rgb(80, 80, 168)",
        borderWidth: 1
      },

      ]
    },
    options: {
      title: {
        display: true,
       
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
            
          }
        }]
      },
      legend: {
        labels: {
            // This more specific font property overrides the global property
            fontColor: 'red'
            
        }
       
    }

    }

  });



    });
    //nhan goi tin
    this.serviceservice.getRecieveStatistical().subscribe((data) => {
      console.log('recievestatistical', data);
      this.recievestatistical = data;
      //lay phan tu du lieu nhan
      const sogoitin = this.recievestatistical.map((num: any) => {
        return num[2];
      });

      const donvi = this.recievestatistical.map((num: any) => {
        return num[0];
      });
      const myLabels = []
      const loaiYeuCau = this.recievestatistical.map((num: any) => num[1])
      for (let i = 0; i < this.recievestatistical.length; i++) {
        myLabels.push(donvi[i] + "," + "loại: " + loaiYeuCau[i]);
      }
      //thuc hien ve bieu do cot
      const myChart = new Chart("myChart2", {
        type: 'bar',
        data: {
          labels: myLabels,
          datasets: [{
            label: 'Đơn vị - Loại yêu cầu',
            data: sogoitin,
            backgroundColor: "rgb(80, 80, 168)",
            borderColor: "rgb(80, 80, 168)",
            borderWidth: 1
          },

          ]
        },
        options: {
          title: {
            display: true,
            
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: '#4682B4'
                
            }
           
        }

        }

      });
    });




  }
}
