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

  // 角色資料
  dataSource: PersonData[] = null;

  constructor(
    private personSvc: PersonService
  ) { }

  ngOnInit() {
    this.getPersons();
  }

  // 取得角色清單
  getPersons(): void {
    this.personSvc.getPersons()
    .subscribe(res => {
      this.dataSource = res.map(item => new PersonData(item));
    });
  }

}
