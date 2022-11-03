
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/user';
import { CommonService } from '../common.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  form: FormGroup;

  user:User = new User();
  value: any;
  data:any;
  // content: any;
invalid: any;
submitted : boolean =false;
  constructor(private common: CommonService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    });
   }
   get name(){
      return this.form.get('name')
   }
   get age(){
    return this.form.get('age')
 }
 get gender(){
  return this.form.get('gender')
}

  ngOnInit(): void {

    this.common.apiCall().subscribe((resp)=>{
      this.value=resp;
      const last = this.value.at(-1);
      this.data=last;
    })
  }
  submit(){
    this.submitted=true;
     
      this.common.saveData(this.user).subscribe((resp)=>{
      console.log(resp);
      // this.content=resp;
     })
  }
  

}
