import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {RegisterService } from '../services/register.service';

interface can {
    email: string;
    password:string;
    LastName:string;
    Role:number;


}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

user={};


  constructor( private NewUser:RegisterService) { }

  ngOnInit() {
  }


  onSubmit(){

    this.NewUser.register(this.user);
  alert(JSON.stringify(this.user));
  }

}
