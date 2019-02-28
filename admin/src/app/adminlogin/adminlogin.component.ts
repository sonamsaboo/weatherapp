import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router:Router, private user:UserserviceService) { }

  ngOnInit() {
  }

  loginUser(e) {
  	e.preventDefault();
  	//console.log(e);
  	var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    //console.log(username,password);
  	if(username == 'admin' && password == 'admin123') {
      //alert("successfully logg in!!");
      this.user.setUserLoggedIn();
      this.router.navigate(['home']);
    }
    else{
      alert("please enter correct username and password");
    }
  }
  

}
