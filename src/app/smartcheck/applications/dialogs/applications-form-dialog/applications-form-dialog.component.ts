import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { ApplicationsService } from '../../applications.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Applications } from '../../applications';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-applications-form-dialog',
  templateUrl: './applications-form-dialog.component.html',
  styleUrls: ['./applications-form-dialog.component.scss']
})
export class ApplicationsFormDialogComponent {

  action: string;
  dialogTitle: string;
  stdForm: FormGroup;
  applications: Applications;
  constructor(
    public dialogRef: MatDialogRef<ApplicationsFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public applicationService: ApplicationsService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Edit';
      this.applications = data.applications;
    } else {
      this.dialogTitle = 'Define';
      this.applications = new Applications({});
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
      id: [this.applications.id],
      name: [this.applications.name],
      port: [this.applications.port],
      type: [this.applications.type],
      dcsc: [this.applications.dcsc],
      end_port: [this.applications.end_port],
      host_server: [this.applications.host_server],
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
    this.applicationService.addApplications(this.stdForm.getRawValue());
  }

}
