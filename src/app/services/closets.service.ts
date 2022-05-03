import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClosetsService {

  url: string = 'modernclosets/collections.php';

  constructor(private api:ApiService) {
  }

  getClosets(params:any){
    return this.api.get(this.url+params)
  }

}
