import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit {
  bug: Bug = new Bug();
  bugResult: any;
  newDate: Date;
  bugArray: Bug[] = [];
  name: string = '';
  remainingText = 0;
  remainingText1 = 0;
  constructor(private bugService: BugService) { }
  valueChange(value: number) {
    this.remainingText = value;
  }
  valueChange1(value: number) {
    this.remainingText1 = value;
  }
  searchBug() {
    const bugName = this.name;
    if (bugName) {
      if (bugName.trim()) {
        const promise = this.bugService.getBugByName(bugName);
        promise.subscribe(response => {
          this.bugResult = response;
          if (this.bugResult.length) {
            this.bugArray = this.bugResult;
            this.bugArray.forEach(bug => {
              this.remainingText = bug.synopsis.length;
              this.remainingText1 = bug.description.length;
              const etaDate = bug.etaDate;
              if (etaDate) {
                const resultDate = etaDate.split('T')[0];
                bug.etaDate = resultDate;
              }
              this.bug = bug;
            });
          }
          else {
            alert("Record not found");
          }
        },
          error => {
            console.log(error);
            if (!error.ok)
              alert("Error !! : " + error.headers.get("error"))
          });
      }
      else {
        alert("Please provide bug name");
      }
    }
    else {
      alert("Please provide bug name");
    }
  }
  updateBug() {
    if (!this.bug.name.trim()) {
      alert("Please provide bug name");
    }
    else if (!this.bug.projectId.trim()) {
      alert("Please provide project id");
    }
    else if (!this.bug.testerId.trim()) {
      alert("Please provide tester id");
    }
    else if (!this.bug.developerId.trim()) {
      alert("Please provide developer id");
    }
    else if (!this.bug.product.trim()) {
      alert("Please provide product name");
    }
    else if (!this.bug.etaDate.trim()) {
      alert("Please provide eta date");
    }
    else if (!this.bug.module.trim()) {
      alert("Please provide module name");
    }
    else if (!this.bug.buildVersion.trim()) {
      alert("Please provide build version");
    }
    else if (!this.bug.synopsis.trim()) {
      alert("Please provide synopsis");
    }
    else if (!this.bug.description.trim()) {
      alert("Please provide description");
    }
    else {
      const promise = this.bugService.update(this.bug, this.bug.id);
      promise.subscribe(response => {
        console.log(response);
        alert('Bug Updated..')
      },
        error => {
          console.log(error);
          if (!error.ok)
            alert("Error !! : " + error.headers.get("error"))
        })
    }
  }
  ngOnInit(): void {
  }

}
