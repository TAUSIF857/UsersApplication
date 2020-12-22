import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '/app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  users=[
    {
      name:"Richard",
      birthDate: "December 10",
      languages:"Spanish,Latin",
      gender: "Male"
    },
    {
      name:"Grace",
      birthDate: "December 9",
      languages:"English(UK)",
      gender: "Female"
    },
    {
      name:"Margaret",
      birthDate: "August 17",
      languages:"English(US),French",
      gender: "Female"
    },{
      name:"Glenn",
      birthDate: "June 24",
      languages:"German,French,Latin",
      gender: "Male"
    }
  ];
  femaleUserCount=0;maleUsersCount=0;
  addUser(){
  this.router.navigate(['/addUser']);
  }

}
