import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { QuestionsComponent} from './questions/questions.component';

const routes: Routes = [{
path: 'register',
component:RegisterComponent


},

{

  path: 'login',
  component:LoginComponent
},
{
path:'questions',
component:QuestionsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
