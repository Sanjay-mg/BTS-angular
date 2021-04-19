import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-view-bugs',
  templateUrl: './view-bugs.component.html',
  styleUrls: ['./view-bugs.component.css']
})
export class ViewBugsComponent implements OnInit {
  bug:Bug = new Bug();
  bugArray:any;
  constructor(private bugservice:BugService) { }

  ngOnInit(): void {
    const observable = this.bugservice.getAllBugs();
    observable.subscribe(response => this.bugArray = response, error => console.log(error));
  }

}
