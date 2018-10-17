import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

// Service
import { PersonService } from '../shared/service/person.service';

// interface
import { Person } from '../shared/interface/person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // 標題欄位設定
  displayedColumns: string[] = ['id', 'name', 'age', 'jobTitle'];

  // 角色資料
  dataSource: MatTableDataSource<Person> = null;

  // 分頁
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private personSvc: PersonService
  ) {}

  ngOnInit() {
    this.getPersons();
  }

  // 取得角色清單
  getPersons(): void {
    this.personSvc.getPersons()
    .subscribe(res => {
      this.dataSource = new MatTableDataSource<Person>(res);
      this.dataSource.paginator = this.paginator;
    });
  }

}

