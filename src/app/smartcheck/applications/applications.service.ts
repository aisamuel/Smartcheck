import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Applications } from './applications';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  private readonly API_URL = 'assets/data/applications.json';
  dataChange: BehaviorSubject<Applications[]> = new BehaviorSubject<Applications[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Applications[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllApplications(): void {
    this.httpClient.get<Applications[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addApplications(applications: Applications): void {
    this.dialogData = applications;
  }
  updateApplications(applications: Applications): void {
    this.dialogData = applications;
  }
  deleteApplications(id: number): void {
    console.log(id);
  }
}
