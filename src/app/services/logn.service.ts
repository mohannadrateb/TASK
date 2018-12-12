import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LognService {
token:string;
response={};
  constructor(private http:HttpClient) {


  }
  login(user:{}){

    this.http.post('http://172.104.209.122:5000/auth/login',user).subscribe(
                (response)=> console.log(response)




              );


  }


}
