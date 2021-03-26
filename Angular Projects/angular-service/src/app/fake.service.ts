import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Fake } from "./fake.model";

@Injectable()       //This class object creation take care by angular 
export class FakeService {
    constructor(public http:HttpClient){} //DI for HttpClient 
    sayHello():string {
        return "Welcome to UserDefined service with DI";
    }
    //display in console
    /*loadFakeData() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").
    subscribe(data=>console.log(data),
    error=>console.log("Error generated"+error),
    ()=>console.log("completed"));
    }*/

    loadFakeData():Observable<Fake[]> {
        return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos");
    }
}



