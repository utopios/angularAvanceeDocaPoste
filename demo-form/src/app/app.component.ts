import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'demo-fromulaire';
  form:FormGroup = new FormGroup({})

  @ViewChild('maDiv') container?: ViewContainerRef

  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      "firstName" : new FormControl('', Validators.required),
      "lastName" : new FormControl('', Validators.required),
      // "customField" : new FormControl('')
      "quantity": [0]
    })
  }
  ngAfterViewInit(): void {
    console.log(this.container)
  }
  ngOnInit(): void {
    this.form.setValue({
      firstName:'toto',
      lastName:'titi',
      quantity: 10
    })
  }


  submitForm() {
    console.log(this.form)
  }

  updateQuantity(quantity:number) {
    this.form.setValue({...this.form.value, quantity:quantity})
  }
}
