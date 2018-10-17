import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Service
import { StorageService } from './service/storage.service';
import { InMemoryDataService } from './service/in-memory-data.service';
import { PersonService } from './service/person.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    StorageService,
    InMemoryDataService,
    PersonService
  ]
})
export class SharedModule { }
