import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Service
import { StorageService } from '../shared/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storageSvc: StorageService
  ) { }

  ngOnInit() {
    this.loginForm = this.initForm();
  }

  // 初始化表單
  initForm(): FormGroup {
    return this.fb.group({
      custName: [
        '',
        [ Validators.required ]
      ],
      loginPassWord: [
        '',
        [ Validators.required ]
      ]
    });
  }

  // 登入
  login(): void {

    this.router.navigate([
      'dashboard'
    ]);

    const name = this.loginForm.get('custName').value;
    this.storageSvc.setStorage('custName', name);

  }

}
