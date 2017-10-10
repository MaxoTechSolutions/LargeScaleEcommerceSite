// Importing modules from the library 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatCardModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';

//importing reactive library into the application
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//Importing the components into the module to make it avaible all over the application 
import { AppComponent } from './app.component';
//import{PizzaPartyComponent} from './components/product/product.component'
import { COMPONENTS } from './components';
import { SERVICES } from './services';
import { ACTIONS } from './store/actions';
import { reducers, metaReducers } from './store/reducers';
import { AllEffects } from './store/effects';

// 
import {MdButtonModule, 
  MdCheckboxModule,
  
  MdCardModule,
MdToolbarModule,
MdDatepickerModule,
MdInputModule,
MdNativeDateModule,
MdGridListModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';

// Importing the pipe 
import{KeysPipe} from './productfilter.pipe';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    KeysPipe,
    RestaurantsComponent,
  //  PizzaPartyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatCardModule,
    MatSnackBarModule,
    AppRoutingModule,
    MdButtonModule,
    MatSidenavModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdCardModule,
  MdToolbarModule,
  MdDatepickerModule,
  MdInputModule,
  MdNativeDateModule,
  MdGridListModule ,
  MatGridListModule,
    //To register the reducers at the application level. for registering the reducers to the feature modules which are lazy loaded use for feature module 
    StoreModule.forRoot(reducers, 
      // { metaReducers }
    ),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25 //  Retains last 25 states
    // }),
    AllEffects,
    
  ],
  providers: [ SERVICES, ACTIONS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
