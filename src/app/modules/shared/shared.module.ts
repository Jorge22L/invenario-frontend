import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { featherHelpCircle, featherPower,featherHome,featherList,featherPackage } from '@ng-icons/feather-icons';
import {  provideHttpClient } from '@angular/common/http';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    SidenavComponent,
    PaginationComponent
  ],
  exports:[
    SidenavComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({ featherHelpCircle, featherPower,featherHome,featherList,featherPackage }),
  ],
  providers: [provideHttpClient()]

})
export class SharedModule { }
