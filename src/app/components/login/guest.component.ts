import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'guest-root',
  templateUrl: './guest.component.html',
 
 
})

export class GuestComponent   {
   
    submitted: boolean = false;
    onSubmit(value:any){
    
        console.log(value);
        this.submitted= true;
 

  
}
}
