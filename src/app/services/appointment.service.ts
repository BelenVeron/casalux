import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private api:ApiService) { }

  getPlaces(){
    return this.api.get('appointments.php?places=true')
  }
  getPurposes(){
    return this.api.get('appointments.php?purposes=true')
  }
  getExperts(){
    return this.api.get('appointments.php?experts=true')
  }
  setVariables(variables:any){
    return this.api.post('setAppointmentVariables.php', variables)
  }
}
