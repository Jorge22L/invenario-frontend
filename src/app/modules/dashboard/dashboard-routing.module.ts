import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./dashboard-menu-route.module').then(m => m.DashboardMenuRouteModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule{}
