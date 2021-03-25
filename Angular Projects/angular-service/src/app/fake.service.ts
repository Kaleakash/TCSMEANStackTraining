import { Injectable } from "@angular/core";

import {HttpClient} from '@angular/common/http';

@Injectable()       //This class object creation take care by angular 
export class FakeService {
    constructor(public http:HttpClient){} //DI for HttpClient 

    sayHello():string {
        return "Welcome to UserDefined service with DI";
    }

    loadFakeData() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data=>console.log(data));
    }
}