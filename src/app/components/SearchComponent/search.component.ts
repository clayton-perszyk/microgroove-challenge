import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() submit = new EventEmitter<string>();
  userForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(public fb: FormBuilder) {}

  public submitForm() {    
    this.submit.emit(this.userForm.value.name);

  }

  ngOnDestroy() {
    this.submit.unsubscribe();
  }
}
