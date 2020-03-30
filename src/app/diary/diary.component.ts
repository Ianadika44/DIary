import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaries: Diary[] = [
  new Diary(1, 'see Madam Monicah', 'FInd Madam Monicah for consultations',new Date(2019,6,10)),
  new Diary(2,'Watch Game','Attend a Chelsea vs Barcelona football',new Date(2020,4,8)),
  new Diary(3,'Buy supper','Find suuper in the market',new Date(2021,7,11)),
  ];
  toggleDetails(index: string | number){
    this.diaries[index].showDescription = !this.diaries[index].showDescription;
  }
  completeDiary(isComplete: any, index: number){
    if (isComplete) {
      this.diaries.splice(index,1);
    }
  }
  deleteDiary(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.diaries[index].name}?`)

      if (toDelete){
        this.diaries.splice(index,1)
      }
    }
  }
  addNewDiaru(diary){
    let diaryLength = this.diaries.length;
    diary.id = diaryLength+1;
    diary.completeDate = new Date(diary.completeDate)
    this.diaries.push(diary)
  }
  constructor() { }

  ngOnInit(): void {
  }


}
