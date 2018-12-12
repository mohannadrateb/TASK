import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LognService} from '../services/logn.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={};
  constructor(private router:Router,private Enter:LognService ) { }

  ngOnInit() {


  }

  onSubmit(){
    this.Enter.login(this.user);
alert(JSON.stringify(this.user));

  }



}
