import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-create-bug-form',
  templateUrl: './create-bug-form.component.html',
  styleUrls: ['./create-bug-form.component.css']
})
export class CreateBugFormComponent implements OnInit {
  bug:Bug = new Bug();
  constructor(private bugservice:BugService) { }
  createBug(){
    const promise = this.bugservice.create(this.bug);
    promise.subscribe(response=> {
      console.log(response);
      alert('Bug Created..')
    },
    error=> {
      console.log(error);
      alert('error happened..')
    })
  }
  ngOnInit(): void {
  }

}
