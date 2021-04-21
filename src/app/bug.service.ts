import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from './Bug';
const URL = 'http://localhost:8082/bug/';
@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }
  create(bug:Bug) {
    return this.http.post(URL,bug, {
      headers: {"content-type": 'application/json' },
      responseType: "text"
    });
  }
  getAllBugs(){
    return this.http.get(URL);
  }
  getBugByName(name:string){
    return this.http.get(URL+'name/'+name);
  }
  getBugByStatus(status:string){
    return this.http.get(URL+'status/'+status);
  }
  update(bug:Bug,bugId:string){
    return this.http.put(URL+bugId,bug,{
      headers: {"content-type": 'application/json' }
    });
  }
  getBugByNameAndStatus(name:string,status:string){
    return this.http.get(URL+'search/'+name+'?status='+status);
  }
}
