import { Component } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserLog } from './userlogin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private route:Router, private httplog:ServicehttpService){
  localStorage.removeItem('x-auth');
}
usel:UserLog;
  crt;
  sub:Subscription;
  tempToken;
  submit(x)
  {
    this.usel = new UserLog(x);
    //console.log(this.usel);
    this.crt = this.httplog.userlog(this.usel);
    
    this.sub = this.crt.subscribe( (data) => {
      this.tempToken = data.headers.get('x-auth');
      this.httplog.setTkn(this.tempToken);
      this.route.navigate(['/temp']);
    },
    (err) => {
      alert("Please enter valid Username and Password!");
      //console.log("error");
    },
    () => {
      alert("You are succesfully Logged In!!");
      //console.log("success");
    });

  }

}
