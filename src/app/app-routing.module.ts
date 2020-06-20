import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { DeviceInfoComponent } from './device-info/device-info.component';
import { SupportComponent } from './support/support.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
    { path: '',component: AboutMeComponent },
    { path: 'device-info', component: DeviceInfoComponent },
    { path: 'support', component: SupportComponent },
    { path: 'volunteer', component: VolunteerComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }