import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

// Component
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

// 無定義的路徑皆導回首頁
const fullbackRoute: Route = {
  path: '**',
  redirectTo: 'dashboard',
  pathMatch: 'full'
};

// 進入此Demo
const initRoute: Route = {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
};

// 登入頁
const loginRoute: Route = {
  path: 'login',
  component: LoginComponent
};

// 主頁
const dashboardRoute: Route = {
  path: 'dashboard',
  component: DashboardComponent,
  children: [
    {
      path: 'list',
      component: ListComponent
    }
  ]
};

// 主要Route
const routes: Routes = [
  initRoute,
  loginRoute,
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
