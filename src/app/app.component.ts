import { Component } from '@angular/core';
import { Diary } from './diary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  diaries: Diary[] = [
    new Diary(1, 'see Madam Monicah', 'FInd Madam Monicah for consultations',new Date(2019,6,10)),
    new Diary(2,'Watch Game','Attend a Chelsea vs Barcelona football',new Date(2020,4,8)),
    new Diary(3,'Buy supper','Find suuper in the market',new Date(2021,7,11)),
    ];
};

