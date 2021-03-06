import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';

// Service
import { StorageService } from '../shared/service/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  showSubMenu = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private storageSvc: StorageService,
  ) {}

  // 取得登入者名稱
  getCustName(): string {
    return this.storageSvc.getStorage('custName');
  }

  // 第二層選單開合
  selectMenu(): void {
    this.showSubMenu = !this.showSubMenu;
  }

  // 選單icon
  getMenuIcon(): string {
    return this.showSubMenu ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  }

  // 登出
  logout(): void {
    this.router.navigate([
      'login'
    ]);

    this.storageSvc.clear();
  }

  }
