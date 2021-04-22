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
            alert('error happened..')
          });
      }
      else {
        alert("please provide bug name");
        this.bugArray = [];
      }
    }
    else if (status && !bugName) {
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
          alert('error happened..')
        })
    }
    else if (bugName && status) {
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
          alert('error happened..')
        })
    }
    else {
      const observable = this.bugService.getAllBugs();
      observable.subscribe(response => {
        this.bugResult = response;
        if (this.bugResult.length) {
          this.bugArray = this.bugResult;
        }
      }, error => alert("Error occurred"));
    }
  }
  deleteBug(id:string){
    const observable = this.bugService.deleteBug(id);
    observable.subscribe(response => {
      alert("Bug deleted");
      this.bugArray = [];
    }, error => {
      alert("Error occurred");
    });
  }

  ngOnInit(): void {
  }

}
