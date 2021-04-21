import { Component, OnInit, Input } from '@angular/core';
import { Bug } from '../Bug';

@Component({
  selector: 'app-view-bugs',
  templateUrl: './view-bugs.component.html',
  styleUrls: ['./view-bugs.component.css']
})
export class ViewBugsComponent implements OnInit {
  @Input() bug:Bug = new Bug();
  remainingText = 0;
  remainingText1 = 0;
  ngOnChanges(){
    this.remainingText = this.bug.synopsis.length;
    this.remainingText1 = this.bug.description.length;
  }
  constructor() {
   }
  valueChange(value: number){
    this.remainingText = value;
  }
  valueChange1(value: number){
    this.remainingText1 = value;
  }
  ngOnInit(): void {
  }

}
