import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {

  menuNav = [
    {
      name: "Home",
      route: "home",
      icon: "featherHome"
    },
    {
      name: "Categorías",
      route: "categoria",
      icon: "featherList"
    },
    {
      name: "Productos",
      route: "productos",
      icon: "featherPackage"
    }
  ]


}
