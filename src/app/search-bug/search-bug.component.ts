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
  status: string = '';
  constructor(private bugService: BugService) { }
  searchBug() {
    const bugName = this.name;
    const status = this.status;
    if (bugName && !status) {
      console.log("only name");

      if (bugName.trim()) {
        const promise = this.bugService.getBugByName(bugName);
        promise.subscribe(response => {
          this.bugResult = response;
          if (this.bugResult.length) {
            this.bugArray = this.bugResult;
          }
          else {
            alert("Record not found");
            this.bugArray = [];
          }
        },
          error => {
            console.log(error);
            alert('error happened..')
          });
      }
      else {
        alert("please provide bug name");
        this.bugArray = [];
      }
    }
    else if (status && !bugName) {
      console.log("only status");
      const promise = this.bugService.getBugByStatus(status);
      promise.subscribe(response => {
        this.bugResult = response;
        if (this.bugResult.length) {
          this.bugArray = this.bugResult;
        }
        else {
          alert("No Bug with Status : " + status + " found");
          this.bugArray = [];
        }
      },
        error => {
          console.log(error);
          alert('error happened..')
        })
    }
    else if (bugName && status) {
      console.log("both name and status");
      const promise = this.bugService.getBugByNameAndStatus(bugName, status);
      promise.subscribe(response => {
        this.bugResult = response;
        if (this.bugResult.length) {
          this.bugArray = this.bugResult;
        }
        else {
          alert("No Bug with Name : " + bugName + " and Status : " + status + " found");
          this.bugArray = [];
        }
      },
        error => {
          console.log(error);
          alert('error happened..')
        })
    }
    else {
      console.log("no name or status");

      const observable = this.bugService.getAllBugs();
      observable.subscribe(response => {
        this.bugResult = response;
        if (this.bugResult.length) {
          this.bugArray = this.bugResult;
        }
      }, error => console.log(error));
    }
  }
  ngOnInit(): void {
  }

}
