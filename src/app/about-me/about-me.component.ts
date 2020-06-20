import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { speedDialFabAnimations } from './speed-dial-fab.component';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],

})



export class AboutMeComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  india:boolean;
  home:boolean;

  deviceInfo: any;
  statewise:any;
  constructor(private router:Router,private apiService: ApiService){
  }
  fabButtons = [
    {
      icon: 'India'
    },
    {
      icon: 'Request'
    },
    {
      icon: 'Volunteer'
    },
    {
      icon: 'lightbulb_outline'
    },
    {
      icon: 'lock'
    }
  ];
  buttons = [];
  fabTogglerState = 'inactive';


  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  onFloatClick(event) {
    if(event.icon==='timeline')
    {
      this.deviceInfo=this.apiService.getItems().subscribe(
        data=>
        {
          this.statewise=data.statewise;
          console.log(data);
        }
  
      )
      this.india=true;
      //this.router.navigate(['./device-info']);
    }
    if(event.icon==='view_headline')
    {
      this.home=true;
      this.india=false;
      //this.router.navigate(['./device-info']);
    }
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }
  ngOnInit() {
  }
  navigate(){
    //do your any operations
    this.router.navigate(['./device-info']);
    }
}
