import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { ServersService } from '../../servers.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Servers } from '../../servers';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-servers-form-dialog',
  templateUrl: './servers-form-dialog.component.html',
  styleUrls: ['./servers-form-dialog.component.sass']
})
export class ServersFormDialogComponent {

  action: string;
  dialogTitle: string;
  stdForm: FormGroup;
  servers: Servers;
  constructor(
    public dialogRef: MatDialogRef<ServersFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public serversService: ServersService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Edit';
      this.servers = data.servers;
    } else {
      this.dialogTitle = 'Create';
      this.servers = new Servers({});
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
      id: [this.servers.id],
      name: [this.servers.name],
      storage: [this.servers.storage],
      memory: [this.servers.memory],
      ip_address: [this.servers.ip_address],
      cpu: [this.servers.cpu],
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
    this.serversService.addServers(this.stdForm.getRawValue());
  }
}