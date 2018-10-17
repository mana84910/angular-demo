import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Class
import { PersonData } from '../shared/classes/person-data';

// Service
import { PersonService } from '../shared/service/person.service';

// interface
import { Person } from '../shared/interface/person';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.scss']
})
export class EditAreaComponent implements OnInit {

  // 新增表單
  addForm: FormGroup = null;

  // 年齡下拉選單
  ages: Number[] = [];

  // 職稱下拉選單
  jobs: String[] = [];

  // 角色資料
  dataSource: PersonData[] = [];

  constructor(
    private fb: FormBuilder,
    private personSvc: PersonService
  ) { }

  ngOnInit() {

    // 初始化表單
    this.addForm = this.initAddForm();

    // 取得資料
    this.getAge();
    this.getJobTitle();
    this.getPersons();

  }

  // 初始化表單
  initAddForm(): FormGroup {
    return this.fb.group({
      addName: [
        '',
        [ Validators.required ]
      ],
      addAge: null,
      addJob: ''
    });
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

  // 新增角色
  addPerson(): void {
    const data = this.addForm.getRawValue();
    const per: Person = {
      id: null,
      name: data.addName,
      age: data.addAge,
      jobTitle: data.addJob
    };

    this.personSvc.addPerson(per)
    .subscribe(res => {
      this.dataSource.push(new PersonData(res));
    });

    // 清空欄位
    this.reset();
  }

  // reset
  reset(): void {
    this.addForm.reset({
      addName: '',
      addAge: null,
      addJob: ''
    });
  }

  // 刪除角色
  delete(personId: number): void {
    this.dataSource = this.dataSource.filter(p => p.id !== personId);
    this.personSvc.deletePerson(personId).subscribe();
  }

}
