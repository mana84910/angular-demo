import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

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
  dataSource = new MatTableDataSource<Person>(PERSONNEL_DATA);

  // 分頁
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

const PERSONNEL_DATA:  Person[] = [
  {id: 1, name: 'Alice', age: 25, jobTitle: 'UI/UX設計師'},
  {id: 2, name: 'Bob', age: 32, jobTitle: '工程師 Engineer'},
  {id: 3, name: 'Chen', age: 28, jobTitle: 'PM'},
  {id: 4, name: 'Danny', age: 30, jobTitle: '工程師 Engineer'},
  {id: 5, name: 'Frank', age: 33, jobTitle: '工程師 Engineer'},
  {id: 6, name: 'Jeff', age: 38, jobTitle: '經理 Manger'},
  {id: 7, name: 'Jasmine', age: 23, jobTitle: '專案助理 Project Assistant'},
  {id: 8, name: 'Keven', age: 30, jobTitle: '系統分析師 SA'},
  {id: 9, name: 'Larry', age: 35, jobTitle: '工程師 Engineer'},
  {id: 10, name: 'Nelson', age: 35, jobTitle: 'PM'}
];
