import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { temp } from '../tempmodule';
import { ServiceService } from '../service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  s1: temp;
  name:string;
  fullName: string;
  @ViewChild('lastNameInput') nameInputRef: ElementRef;

  file;

  // show(lastName: HTMLInputElement)
  // {
  //   this.file = this.nameInputRef.nativeElement.files[0];
  //   let fileReader = new FileReader();
  //   fileReader.onload = (e) => {
  //     console.log(fileReader.result);
    
  //   fileReader.readAsText(this.file);
  //   }
  // //   this.fullName = this.nameInputRef.nativeElement.value + ' ' + lastName.value;
  // //  console.log(this.fullName);
  // console.log(this.nameInputRef.nativeElement.files[0]);
  // }
  Clog(x)
  {
    console.log(x);
  }

  constructor(private s:ServiceService ) { }

  ngOnInit() {
    
  }

  a;b;aaa;arr;s2 = [];t1;z;x;
  fileChanged(e) {
    this.file = e.target.files[0];

  let fileReader = new FileReader();
  fileReader.onload = (e) => {
    console.log(fileReader.result);
    this.aaa=fileReader.result;
    this.arr=this.aaa.split('\n');
    console.log(this.arr);
  }
  fileReader.readAsText(this.file);
  
  }
  
  submit(a,b,c,d,h,f,g,e)
  {
  
    this.z=this.s.remove();
    this.x=this.z.subscribe((d)=>{
      console.log(d);
    },
    (err) =>{
      console.log(err);
    },
    ()=> {
      console.log("yes");
    });


    for (let i = 0; i < this.arr.length; i++) 
    {
      this.t1=this.arr[i].split(",");
      this.s2.push( {"Time":this.t1[0], "Temperature":this.t1[1]} ); 
    }
    this.s1= new temp(a,b,c,d,h,f,g,this.s2);
    
    this.a = this.s.sign_in(this.s1);
    this.b = this.a.subscribe( (d) => {
      console.log(this.s1);
    },
     (err) => {
      console.log(err);
     },
     () => {
      console.log("are ho gaya");
     } );
    
  }
  
}
