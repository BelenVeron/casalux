import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SessionModel, Session} from '../models/session.model'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  islogged = false
  sessionData:SessionModel = new Session()

  constructor(
    private service:ApiService,
    private auth:AuthService
  ) {
    this.verifyLogin()
  }

  verifyLogin(){
    this.service.get('isLogged.php').subscribe((data:any)=> {
      this.islogged = data.success
      this.sessionData = data.data[0]
      console.log(data)
    })
  }

  logout(){
    this.islogged = false
    this.auth.logout().subscribe((data:any)=>{
      console.log(data)
    })
  }
}
