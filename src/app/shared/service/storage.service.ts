import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // 儲存資料
  setStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // 取得資料
  getStorage(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  // 清除資料
  clear(key?: string): any {

    if (key) {
      localStorage.removeItem(key);
    } else {
      localStorage.clear();
    }

  }

}
