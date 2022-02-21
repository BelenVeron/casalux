import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private api:ApiService) { }

  getProjects(){
    return this.api.get('projects/timeline.php')
  }
}
