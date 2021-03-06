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
    else if (!this.bug.projectId.trim()) {
      alert("Please provide project id");
    }
    else if (!this.bug.testerId.trim()) {
      alert("Please provide tester id");
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
    else if (this.bug.synopsis.length<10) {
      alert("Synopsis should be atleast 10 characters");
    }
    else if (!this.bug.description.trim()) {
      alert("Please provide description");
    }
    else if (this.bug.description.length<10) {
      alert("Description should be atleast 10 characters");
    }
    else {
      this.bug.status = 'NEW';
      const promise = this.bugservice.create(this.bug);
      promise.subscribe(response => {
        alert('Bug Created..');
      },
        error => {
          if (!error.ok) {
            let message: string = error.headers.get("error");
            if (message.indexOf('ETA') > -1) {
              alert("ETA Date cannot be a past date");
            }
            else {
              alert("Error occurred");
            }
          }
        })
    }
  }

  ngOnInit(): void {
  }

}
