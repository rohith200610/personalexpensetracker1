import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { count } from 'console';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  reactForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.reactForm=formBuilder.group({
      name:['',[Validators.required,Validators.maxLength(3)]],
      age:[''],
      email:[''],
      country:['']

   });
  }
  saveFormData(){
    console.log(this.reactForm.value);
  }
  reset(){
    this.reactForm.reset();
  }

}
