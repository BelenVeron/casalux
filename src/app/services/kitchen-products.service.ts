import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class KitchenProductsService {

  constructor(private api:ApiService) { }

  getFinishCollections(params:any){
    return this.api.getString('luxurykitchens/finishcollections.php?finishID='+params)
  }

  collectionInfo(params:any){
    return this.api.get('luxurykitchens/collections.php?'+params)
  }
  finishesData(params:any = ''){
    return this.api.get('luxurykitchens/finishes.php?'+params)
  }
  additionals(params:any = ''){
    return this.api.get('luxurykitchens/additionals.php?'+params)
  }

  opening(params:any =''){
    return this.api.get('luxurykitchens/openings.php?'+params)
  }
  ask(params:any = ''){
    return this.api.get('luxurykitchens/ask.php?'+params)
  }

  studios(params: any = ''){
    return this.api.get('luxurykitchens/studios.php?'+params)
  }
  experts(params: any = ''){
    return this.api.get('luxurykitchens/experts.php?'+params)
  }
}
