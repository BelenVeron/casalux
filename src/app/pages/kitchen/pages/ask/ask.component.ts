import { Component, OnInit } from '@angular/core';
import { KitchenProductsService } from 'src/app/services/kitchen-products.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  // categories: any;
  results:any;
  categories:any;

  constructor(private kitchen:KitchenProductsService) {
    this.kitchen.ask().subscribe((data:any)=>{
      console.log(data)
      this.categories = data.data.results
      this.results = data.data.results

      this.results.map((result:any)=>result.results.map((r:any)=>r.selected = false))
    })
  }

  ngOnInit(): void {
  }

  changeCategory(cat:any){
    let params = 'questionCategoryID='+cat.questionCategoryID

    this.kitchen.ask(params).subscribe((data:any)=>{
      console.log(data)

      // this.categories = data.data.categories
      this.results = data.data.results
    })
  }

  viewInside(inside:any){
    this.results.map((result:any)=>result.results.map((r:any)=>r.selected = false))
    inside.selected = true
  }

  selectCat(cat:any){
    if(!cat){
      this.results = this.categories
      return
    }
    this.results = this.categories.filter((result:any)=>result.id == cat.id)
  }
  search(value:string){
    let params = 'string='+value

    this.kitchen.ask(params).subscribe((data:any)=>{
      console.log(data)

      // this.categories = data.data.categories
      this.results = data.data.results
    })
  }
}
