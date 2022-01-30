import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Home } from './home';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API_URL = 'assets/data/home.json';
  dataChange: BehaviorSubject<Home[]> = new BehaviorSubject<Home[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Home[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllHome(): void {
    this.httpClient.get<Home[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addHome(home: Home): void {
    this.dialogData = home;
  }
  updateHome(home: Home): void {
    this.dialogData = home;
  }
  deleteHome(id: number): void {
    console.log(id);
  }
}
