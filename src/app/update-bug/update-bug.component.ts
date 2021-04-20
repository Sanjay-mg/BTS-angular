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
  remainingText = 50;
  remainingText1 = 100;
  constructor(private bugService: BugService) { }
  valueChange(value: number) {
    this.remainingText = 50 - value;
    if (this.remainingText < 0) {
      this.remainingText = 0;
      alert("Synopsis cannot be more than 50 character");
    }
  }
  valueChange1(value: number) {
    this.remainingText1 = 100 - value;
    if (this.remainingText1 < 0) {
      this.remainingText1 = 0;
      alert("Description cannot be more than 100 character");
    }
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
              this.remainingText = 50 - bug.synopsis.length;
              this.remainingText1 = 100 - bug.description.length;
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
    else if (this.bug.name.length > 10) {
      alert("Bug name cannot be more than 10 character");
    }
    else if (!this.bug.projectId.trim()) {
      alert("Please provide project id");
    }
    else if (this.bug.projectId.length > 15) {
      alert("project id cannot be more than 15 character");
    }
    else if (!this.bug.testerId.trim()) {
      alert("Please provide tester id");
    }
    else if (this.bug.testerId.length > 15) {
      alert("tester id cannot be more than 15 character");
    }
    else if (!this.bug.developerId.trim()) {
      alert("Please provide developer id");
    }
    else if (this.bug.developerId.length > 15) {
      alert("developer id cannot be more than 15 character");
    }
    else if (!this.bug.product.trim()) {
      alert("Please provide product name");
    }
    else if (this.bug.product.length > 50) {
      alert("product name cannot be more than 50 character");
    }
    else if (!this.bug.etaDate.trim()) {
      alert("Please provide eta date");
    }
    else if (!this.bug.module.trim()) {
      alert("Please provide module name");
    }
    else if (this.bug.module.length > 15) {
      alert("module name cannot be more than 15 character");
    }
    else if (!this.bug.buildVersion.trim()) {
      alert("Please provide build version");
    }
    else if (this.bug.buildVersion.length > 6) {
      alert("build version cannot be more than 6 character");
    }
    else if (!this.bug.synopsis.trim()) {
      alert("Please provide synopsis");
    }
    else if (this.bug.synopsis.length > 50) {
      alert("Synopsis cannot be more than 50 character");
    }
    else if (!this.bug.description.trim()) {
      alert("Please provide description");
    }
    else if (this.bug.description.length > 100) {
      alert("description cannot be more than 100 character");
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
