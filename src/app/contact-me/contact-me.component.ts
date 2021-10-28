import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  myForm: FormGroup;

  loading = false;
  success = false;
  error = false;
  errorMessage;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(1), 
        Validators.maxLength(20), 
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(5), 
        Validators.maxLength(251), 
      ]],
    });

  }


  get name() {
    return this.myForm.get('name');
  }
  
  get email() {
    return this.myForm.get('email');
  }

  get message() {
    return this.myForm.get('message');
  }

  async submitForm() {
    this.loading = true;
    const formValue = this.myForm.value;
    const body = {name: formValue.name, email: formValue.email, message: formValue.message}
    console.log("Submit Form function triggered.")
    
    if(this.myForm.valid){
      try {
          this.http.post("https://us-central1-maxenn-1ef33.cloudfunctions.net/app/contactForm/", body).subscribe(
            {
            next: _ => {
              this.success = true;
            },
            error: error => {
              this.error = true;
              this.errorMessage = error.error.message;
              console.error('There was an error!', error);
            }
            }
          )
        }catch{
          console.log("There was a client error.")
          this.errorMessage = "There was a client error.";
        }   
    }

    this.loading = false;
  }
}


