import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormChecklist } from 'src/app/models/form-checklist';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  @Input() form!: FormChecklist;
  checklistForm!: FormGroup;

  constructor() { 
  }
  
  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup(): void {
    this.checklistForm = new FormGroup({});
    if (this.form) {
      this.form.items?.forEach(item => {
        this.checklistForm.addControl(item.name!,new FormControl('',  Validators.min(0)));
      })
    }
  }

  // if submit
  onSubmit(): void {

  }

}
