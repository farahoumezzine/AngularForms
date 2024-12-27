import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form-reactive',
  templateUrl: './contact-form-reactive.component.html',
  styleUrl: './contact-form-reactive.component.css'
})
export class ContactFormReactiveComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    // Constructor: Used for dependency injection
    // NOT recommended for initialization logic
  }

  ngOnInit() {
     // Lifecycle hook: Called after component is initialized
    // Perfect place for initialization logic

    // Using FormBuilder
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    /* Old approach using FormGroup directly
    this.contactForm = new FormGroup({ 
      'name': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'message': new FormControl('', [Validators.required, Validators.minLength(10)])
    });
    */
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
    }
  }
}
