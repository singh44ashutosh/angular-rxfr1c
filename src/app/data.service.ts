import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  demoData;

  getData(){
    this.http
      .get("https://angular-rxfr1c.stackblitz.io/src/assets/DemoData.json")
      .subscribe((data) => this.demoData = data);
  }
}