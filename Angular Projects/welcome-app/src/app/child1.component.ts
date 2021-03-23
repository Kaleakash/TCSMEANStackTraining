import {Component} from '@angular/core';

@Component({
    selector:"child1",
    template:`
        <div>
        This is second child '' component 
        {{msg}}
        </div>
    `,
    styles:["div{color:red}"]  
})
export class Child1 {
    msg:string="Welcome to Second child component";
}