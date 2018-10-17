import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

// Component
import { DashboardComponent } from './dashboard/dashboard.component';

// 無定義的路徑皆導回首頁
const fullbackRoute: Route = {
  path: '**',
  redirectTo: 'dashboard',
  pathMatch: 'full'
};

// 主頁
const dashboardRoute: Route = {
  path: 'dashboard',
  component: DashboardComponent,
  children: []
};

// 主要Route
const routes: Routes = [
  dashboardRoute,
  fullbackRoute
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    useHash: true
  }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
