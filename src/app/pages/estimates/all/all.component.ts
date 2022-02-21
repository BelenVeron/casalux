import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  estimates:any = [
    {client:'AC', estimate: 'ES-0001', date: '11/23/2021', estimateTotal:'30000', projectName:'Arthur Bath', invoice:'IN-0001', invoiceDate:'11-23-2021', invoiceTotal:'32250', payUp:'Full', profit:'7800', order:'OR-0001', orderTotal: '32250', paymentOfOrder:'Full', delivery: 'Y'},
    {client:'AT', estimate: 'ES-0106', date: '12/03/2019', estimateTotal:'45926', projectName:'Lemon Cash', invoice:'IN-0003', invoiceDate:'12/03/2019', invoiceTotal:'72990', payUp:'50%', profit:'6000', order:'OR-0002', orderTotal: '56999', paymentOfOrder:'NO', delivery: 'N'},
    {client:'AJ', estimate: 'ES-0002', date: '09/01/2020', estimateTotal:'34900', projectName:'Football court', invoice:'IN-0004', invoiceDate:'09/01/2020', invoiceTotal:'6942', payUp:'89%', profit:'4500', order:'OR-0003', orderTotal: '69999', paymentOfOrder:'50%', delivery: 'Y'},
    {client:'MO', estimate: 'ES-0026', date: '8/27/2022', estimateTotal:'15760', projectName:'Game lobby', invoice:'IN-0008', invoiceDate:'8/27/2022', invoiceTotal:'40266', payUp:'69%', profit:'9500', order:'OR-0004', orderTotal: '21666', paymentOfOrder:'10%', delivery: 'N'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
