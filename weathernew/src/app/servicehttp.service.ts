import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { registermodel } from './registermodel';
import { UserLog } from './home/userlogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicehttpService {
  uri='http://192.168.100.9:3000/';

  constructor(private http:HttpClient, private rout:Router) { }
  sign1:registermodel;
  add1(sign1){
    console.log(sign1);
    return this.http.post(this.uri+'register',sign1).subscribe((res)=>{console.log('done');
  },
  (err)=>{
    alert("Enter all fields");
  });
  }
  setTkn(j:string)
  {
    console.log(j)
  	localStorage.setItem('x-auth', j);
  }

  getTkn()
  {
  	return localStorage.getItem('x-auth');
  }
  userlog(ulog:UserLog): Observable<HttpResponse<UserLog>>
  {
  	return this.http.post<UserLog>(this.uri+'login', ulog, {observe: 'response'});
  }
  fetch(){
    return this.http.get(this.uri+'fetch');
  }
}