import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjM…wMDV9.Pe-CZUE5UtoP81NWKknDzm3HSPzFfK4_thgfmzt9AVk";
responses:any
;

  constructor(private http:HttpClient) { }

  ngOnInit() {
     const headers=new HttpHeaders({

       'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjM…wMDV9.Pe-CZUE5UtoP81NWKknDzm3HSPzFfK4_thgfmzt9AVk'
     });
  this.http.get("http://172.104.209.122:5000/form/questions",{headers}).subscribe((response)=>this.responses=response);

  }

}
