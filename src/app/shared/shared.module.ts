import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Service
import { StorageService } from './service/storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    StorageService
  ]
})
export class SharedModule { }
