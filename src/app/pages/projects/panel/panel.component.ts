import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  projects = [
    {name: 'Alan Scott´s house', date:'OCTOBRE 18, 2021'},
    {name: 'Dina Lance´s house', date:'SEPTEMBER 18, 2021'},
    {name: 'Selina Grayson´s home', date:'NOVEMBER 18, 2021'},
    {name: 'Hail Jordan´s home', date:'NOVEMBER 18, 2021'},
  ]
  leads = [
    {name: 'Alan Scott´s lead', date:'OCTOBRE 18, 2021'},
    {name: 'Dina Lance´s lead', date:'SEPTEMBER 18, 2021'},
    {name: 'Selina Kyle´s lead', date:'NOVEMBER 18, 2021'},
  ]
  selectedFilter:any = 'projects'
  options:any = this.projects
  selectedOption = this.options[0]

  constructor(private service:ProjectsService) {
    this.service.getProjects().subscribe((data:any)=>{
      console.log(data)
      this.options = data.data.projects
    })
  }

  ngOnInit(): void {
  }

  selFilter(selFilter:any){
    this.selectedFilter = selFilter
  }

  selOption(option:any){
    this.selectedOption = option
  }

}
