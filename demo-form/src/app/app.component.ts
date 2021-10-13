import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-fromulaire';
  form:FormGroup = new FormGroup({})

  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      "firstName" : new FormControl('', Validators.required),
      "lastName" : new FormControl('', Validators.required),
      "customField" : new FormControl('')
    })
  }
  ngOnInit(): void {
    this.form.setValue({
      firstName:'toto',
      lastName:'titi',
      customField: 'new val'
    })
  }


  submitForm() {
    console.log(this.form.value)
  }
}
