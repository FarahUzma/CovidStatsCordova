import { Component, OnInit } from '@angular/core';

declare var device;

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

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
