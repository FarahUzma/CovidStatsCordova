import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';

declare var device;

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  deviceInfo: any;
  statewise:any;

  ngOnInit() {
    this.deviceInfo=this.apiService.getItems().subscribe(
      data=>
      {
        this.statewise=data.statewise;
        console.log(data);
      }

    )


    
  

  }

}
