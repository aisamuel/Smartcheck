import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Servers } from './servers';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  private readonly API_URL = 'assets/data/servers.json';
  dataChange: BehaviorSubject<Servers[]> = new BehaviorSubject<Servers[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Servers[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllServers(): void {
    this.httpClient.get<Servers[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addServers(customers: Servers): void {
    this.dialogData = customers;
  }
  updateServers(customers: Servers): void {
    this.dialogData = customers;
  }
  deleteServers(id: number): void {
    console.log(id);
  }
}
