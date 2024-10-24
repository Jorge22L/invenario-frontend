import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { featherHelpCircle, featherPower,featherHome,featherList,featherPackage } from '@ng-icons/feather-icons';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  exports:[
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({ featherHelpCircle, featherPower,featherHome,featherList,featherPackage }),
  ]
})
export class SharedModule { }
