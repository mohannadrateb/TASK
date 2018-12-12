import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }


  register(user:{}){

    this.http.post('http://172.104.209.122:5000/auth/register',user).subscribe(
                (response)=>console.log(response));


  }


}
