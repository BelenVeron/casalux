import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { environment } from 'src/environments/environment';

import SwiperCore, { SwiperOptions, EffectCoverflow, Autoplay, Navigation }
from 'swiper';
SwiperCore.use([EffectCoverflow, Autoplay, Navigation]);

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    navigation:true,
    spaceBetween:5,
    autoplay:{delay:1500},
  };

  projects:any = []
  leads = [
    {name: 'Alan Scott´s lead', date:'OCTOBRE 18, 2021'},
    {name: 'Dina Lance´s lead', date:'SEPTEMBER 18, 2021'},
    {name: 'Selina Kyle´s lead', date:'NOVEMBER 18, 2021'},
  ]
  url = environment.api
  images = [
    '/assets/img/kitchen/media/imggetstarted.png',
    '/assets/img/kitchen/media/imggetstarted.png',
  ]
  selectedFilter:any = 'projects'
  selectedProject:any

  projectOptions:any = [
    {id:1, name: 'SKETCH GENERATOR', images: this.images},
    {id:2, name: 'MOODBOARDS', images: this.images},
    {id:3, name: 'PROJECTS MEASUREMENTS', images: this.images},
    {id:4, name: 'INVOICES', images: this.images},
    {id:5, name: '3D RENDERINGS', images: this.images},
    {id:6, name: 'ORDERS', images: this.images},
    {id:7, name: 'FAVORITES', images: this.images},
    {id:8, name: 'INSTALLATION', images: this.images},
    {id:9, name: 'ESTIMATES', images: this.images},
    {id:10, name: 'WARRANTY ISSUES', images: this.images},
  ]
  selectedProjectOption:any = this.projectOptions[0];
  
  constructor(private service:ProjectsService) {
    this.service.getProjects().subscribe(async(data:any)=>{
      this.projects = data
      this.selectedProject = data[0]
      this.selProject(data[0])
    })
  }

  ngOnInit(): void {
  }

  selFilter(selFilter:any){
    this.selectedFilter = selFilter
  }

  selProject(option:any){
    this.selectedProject = option
  }

  selProjectOption(option:any){
    this.selectedProjectOption = option
  }
}
