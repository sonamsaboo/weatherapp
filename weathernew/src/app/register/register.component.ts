import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';
import { registermodel } from '../registermodel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private s:ServicehttpService) { }
  add(u,p,g,l){
    let data=new registermodel(u.value,p.value,g.value,l.value);
    this.s.add1(data);

    //console.log(data);
  }
  
  ngOnInit() {
  }

}
