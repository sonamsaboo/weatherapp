import { ArrayType } from '@angular/compiler';

export class temp {
    Country:string;
    State:string;
    City:string;
    Date:string;
    Weather:string;
    Wind:string;
    Humidity:string;
    Data;

    constructor(a:string, b:string,c:string,d:string,h:string,f:string,g:string,e)
    {
        this.Country=a;
        this.State=b;
        this.City=c;
        this.Date=d;
        this.Weather=h;
        this.Wind=f;
        this.Humidity=g;
        this.Data=e;
    }
}