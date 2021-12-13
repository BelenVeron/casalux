import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private service:ApiService) { }

  login(user:any){
    return this.service.post('login.php', user)
  }

  remember(user:any){
    return this.service.post('remember.php', user)
  }

  register(user:any){
    return this.service.post('register.php', user)
  }

  setPassword(passwords:any){
    return this.service.post('setPassword.php', passwords)
  }
  edit(user:any){
    return this.service.post('edit.php', user)
  }

  logout(){
    return this.service.get('out.php')
  }
}


