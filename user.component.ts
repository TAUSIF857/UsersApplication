import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User[];
  constructor() { }

  ngOnInit(): void {
    this.user=[
      {
        fullName:"Richard",
        birthDate: "December 10",
        languages:"Spanish,Latin",
        gender: "Male",
        about:""
      },
      {
        fullName:"Grace",
        birthDate: "December 9",
        languages:"English(UK)",
        gender: "Female",
        about:""
      },
      {
        fullName:"Margaret",
        birthDate: "August 17",
        languages:"English(US),French",
        gender: "Female",
        about:""
      },{
        fullName:"Glenn",
        birthDate: "June 24",
        languages:"German,French,Latin",
        gender: "Male",
        about:""
      }
    ];
  }
  onSubmit(form:NgForm){
    console.log(form);
    
  }
}
