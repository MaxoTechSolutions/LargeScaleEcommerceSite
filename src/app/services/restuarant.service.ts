import{Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

import { Http, Response, Headers } from '@angular/http';

@Injectable()

export class RestuarantService{
    
    url:string="https://desidinerestua.firebaseio.com/.json";
   

constructor(private http :Http){

}

  getRestuarant() {
    return this.http.get(this.url)
      .map(res =>res.json());

  }

//   getcatag(id){
//     return this.http.get("https://development-5978e.firebaseio.com/"+id+"/categories/.json").map(res =>res.json());
//   }
    



}