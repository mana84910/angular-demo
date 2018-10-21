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

  // 變更表單
  editForm: FormGroup = null;

  // 年齡下拉選單
  ages: Number[] = [];

  // 職稱下拉選單
  jobs: String[] = [];

  // 角色資料
  dataSource: PersonData[] = [];

  // 變更區塊是否顯示
  isEditShow = false;

  constructor(
    private fb: FormBuilder,
    private personSvc: PersonService
  ) { }

  ngOnInit() {

    // 初始化表單
    this.addForm = this.initAddForm();
    this.editForm = this.initEditForm();

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

  initEditForm(): FormGroup {
    return this.fb.group({
      id: null,
      editName: [
        '',
        [ Validators.required ]
      ],
      editAge: null,
      editJob: ''
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

  // 按下角色時執行
  edit(person: PersonData): void {
    this.isEditShow = true;
    this.editForm.patchValue({
      id: person.idData,
      editName: person.nameData,
      editAge: person.ageData,
      editJob: person.jobData
    });
  }

  // 取消按鈕
  cancel(): void {
    this.isEditShow = false;
    this.reset();
  }

  // 儲存變更按鈕
  update(): void {
    const data = this.editForm.getRawValue();
    const person: Person = {
      id: data.id,
      name: data.editName,
      age: data.editAge,
      jobTitle: data.editJob
    };
    this.personSvc.updatePerson(person).subscribe(
      () => {

        this.cancel();

        // 表單刷新
        this.getPersons();
      }
    );
  }

  // 刪除角色
  delete(personId: number): void {
    this.dataSource = this.dataSource.filter(p => p.id !== personId);
    this.personSvc.deletePerson(personId).subscribe();
  }

}
