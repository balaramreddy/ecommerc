import { Component} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  signform!:FormGroup
  currentValue:any
  
  constructor(private fb:FormBuilder){
    this.signform = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  postdata(){
    console.log(this.signform.value);
  }

  onValueChange(event: any) {
    console.log('Key pressed:',event);
    }
  
}
