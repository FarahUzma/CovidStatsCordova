import { Component, OnInit } from '@angular/core';

declare var device;

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor() { }

  deviceInfo: any;

  ngOnInit() {
    this.deviceInfo = {
        model: device.model,
        platform: device.platform,
        uuid: device.uuid,
        version: device.version,
        manufacturer: device.manufacturer,
        serial: device.serial
    }
  }

}
