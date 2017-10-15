import { Component } from '@angular/core';

@Component({
  selector: 'logindash-root',
  templateUrl: './logindash.component.html',
  
})
export class LogindashComponent {
    
  Some:string="User";
UserChangePanel(){
this.Some='User';

}
DriverChangePanel(){
this.Some='Driver';


}

VendorChangePanel(){
this.Some='Vendor';

}


login(username, pass){
  
    if(this.Some === "User"){
alert(this.Some+""+username +""+pass);
    }
if(this.Some === "Driver"){
alert(this.Some);
    }
if(this.Some === "vendor"){
alert(this.Some);
    }
}

}