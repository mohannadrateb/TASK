import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  authenticate(user:any,users:any=[]):boolean{
    for(let i=0; i<users.length; i++){
        if(users[i].username==user.username ){
          if(users[i].password==user.password){
            return true;
          }
        }

    }

return false;
  }
}
