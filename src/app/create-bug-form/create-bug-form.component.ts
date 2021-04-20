import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-create-bug-form',
  templateUrl: './create-bug-form.component.html',
  styleUrls: ['./create-bug-form.component.css']
})
export class CreateBugFormComponent implements OnInit {
  bug: Bug = new Bug();
  constructor(private bugservice: BugService) { }
  createBug() {
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
    else if (!this.bug.product.trim()) {
      alert("Please provide product name");
    }
    else if (this.bug.product.length > 50) {
      alert("product name cannot be more than 50 character");
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
      const promise = this.bugservice.create(this.bug);
      promise.subscribe(response => {
        console.log(response);
        alert('Bug Created..')
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
