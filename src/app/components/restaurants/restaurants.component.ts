import { Component,OnInit,ViewChild, ElementRef } from '@angular/core';
import{Router} from '@angular/router';

import{RestuarantService} from '../../services/restuarant.service';

import{MdSidenav} from '@angular/material'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  @ViewChild('sidenav') input: MdSidenav;
  showup=true;
  showdown=false;
  id;
  details:any=[];
  Restuarant:any=[];
constructor(private service:RestuarantService){

}

ngOnInit(){

  this.service.getRestuarant().subscribe(Restuarant=>this.Restuarant=Restuarant);
 //this.service.getcatag(this.id).subscribe(Restuarant=>this.details=Restuarant);


}

side(ide){
this.details=ide;
this.input.open();
  
}

hideshow(){

  this.showdown = !this.showdown;
  this.showup = !this.showup;
  

}


}
