import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { HomeService } from '../../home.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Home } from '../../home';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home-form-dialog',
  templateUrl: './home-form-dialog.component.html',
  styleUrls: ['./home-form-dialog.component.scss']
})
export class HomeFormDialogComponent {

  action: string;
  dialogTitle: string;
  stdForm: FormGroup;
  home: Home;
  constructor(
    public dialogRef: MatDialogRef<HomeFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public homeService: HomeService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Edit';
      this.home = data.home;
    } else {
      this.dialogTitle = 'Define';
      this.home = new Home({});
    }
    this.stdForm = this.createContactForm();
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.home.id],
      status: [{value: this.home.status, disabled: true}],
      application: [{value: this.home.application, disabled: true}],
      last_scan_date: [{value: this.home.last_scan_date, disabled: true}],
      servers_mapped: [{value: this.home.servers_mapped, disabled: true}],
      
      // email: [
      //   this.students.email,
      //   [Validators.required, Validators.email, Validators.minLength(5)]
      // ],
      // date: [
      //   formatDate(this.students.date, 'yyyy-MM-dd', 'en'),
      //   [Validators.required]
      // ],
      
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.homeService.addHome(this.stdForm.getRawValue());
  }

}
