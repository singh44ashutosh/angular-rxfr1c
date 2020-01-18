import { Component } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  time = 15;
  demoData;
  constructor(public dataService: DataService) { 
    //this.demoData = this.dataService.demoData;
  }

  timer;

  startTimer(){
    this.timer = setInterval(()=>{

      this.demoData = this.dataService.getData();

      this.time = this.time - 1;

      this.stopTimer();
    }, 1500);
     
  }

  stopTimer(){
    if(this.time == 0){
        clearInterval(this.timer);
        this.time = 15;
    }
  }
}
