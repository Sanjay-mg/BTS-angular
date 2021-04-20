import { Component, OnInit } from '@angular/core';
import { BugService } from '../bug.service';
import { Bug } from '../Bug';

@Component({
  selector: 'app-search-bug',
  templateUrl: './search-bug.component.html',
  styleUrls: ['./search-bug.component.css']
})
export class SearchBugComponent implements OnInit {
  bug: Bug = new Bug();
  bugResult: any;
  bugArray: Bug[] = [];
  name: string = '';
  status: string = 'NEW';
  constructor(private bugService: BugService) { }
  searchBug() {
    const bugName = this.name;
    if (bugName) {
      if(bugName.trim()){
        const promise = this.bugService.getBugByName(bugName);
      promise.subscribe(response => {
        this.bugResult = response;
        if (this.bugResult.length) {
          this.bugArray = this.bugResult;
        }
        else {
          alert("Record not found");
        }
      },
        error => {
          console.log(error);
          alert('error happened..')
        });
      }
      else{
        alert("Record not found");
      }
    }
    else {
      const status = this.status;
      const promise = this.bugService.getBugByStatus(status);
      promise.subscribe(response => {
        this.bugResult = response;
        if (this.bugResult.length) {
          this.bugArray = this.bugResult;
        }
        else {
          alert("No Bug with Status : " + status + " found");
        }
      },
        error => {
          console.log(error);
          alert('error happened..')
        })
    }
  }
  ngOnInit(): void {
  }

}
