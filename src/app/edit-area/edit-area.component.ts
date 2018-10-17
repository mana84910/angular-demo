import { Component, OnInit } from '@angular/core';

// Class
import { PersonData } from '../shared/classes/person-data';

// Service
import { PersonService } from '../shared/service/person.service';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.scss']
})
export class EditAreaComponent implements OnInit {

  // 年齡下拉選單
  ages: Number[] = [];

  // 職稱下拉選單
  jobs: String[] = [];

  // 角色資料
  dataSource: PersonData[] = [];

  constructor(
    private personSvc: PersonService
  ) { }

  ngOnInit() {
    this.getAge();
    this.getJobTitle();
    this.getPersons();
  }

  // 取得年齡下拉選單
  getAge(): void {
    this.personSvc.getAge()
    .subscribe(res => {
    this.ages = res;
    });
  }

  // 取得職稱
  getJobTitle(): void {
    this.personSvc.getJobTitle()
    .subscribe(res => {
      this.jobs = res;
    });
  }

  // 取得角色清單
  getPersons(): void {
    this.personSvc.getPersons()
    .subscribe(res => {
      this.dataSource = res.map(item => new PersonData(item));
    });
  }

}
