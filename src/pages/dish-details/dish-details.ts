
import { CartService } from './../../services/cart.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import _ from 'lodash';

import { Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-dish-details',
  templateUrl: 'dish-details.html',
})
export class DishDetailsPage implements OnInit{

  ROOT_URL_RES = 'http://foodcrave.s3.amazonaws.com/Restaurant/';

  dishId;
  resId;
  serverRes:any;
  dishDetails:any = [];
  modifiersObj:any = [];
  choicesObj:any = [];
  count = 0;
  modifiersPresent:boolean = true;
  imgurlRes;
  food = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dataService: DataService,
              private cartService: CartService,
              public events: Events) {

  }

  addToCart(cartDetails){
    
    let dishId = this.navParams.get('dishId');
    let payload = {
      fid:this.dishDetails.id,
      quantity:cartDetails.quantity
    }

    console.log("Cart payload "+ JSON.stringify(payload));
    
    this.dataService.addItemToCart(dishId,this.resId,payload).subscribe((res) => {
      this.serverRes = res;
      this.cartService.addItem(this.serverRes);
      this.events.publish('itemAdded', this.serverRes);
    });

    // this.cartService.addItem(this.dishDetails);
    // this.events.publish('itemAdded');
    this.navCtrl.pop();    
  }

  ngOnInit(){

    this.dishId = this.navParams.get('dishId');
    this.resId = this.navParams.get('resId');

    this.dataService.getDishDetails(this.dishId).subscribe((res) => {
      this.dishDetails = res.food

      // console.log("Res mod "+JSON.stringify(res.modifiers));
      // console.log("Res mod len"+res.modifiers.length);
      
      if(res.modifiers.length != 0){

        this.modifiersObj = res.modifiers["2"].modifiers;
        this.choicesObj =  _.values(res.modifiers["2"].choices);
        

        console.log(" Choices "+ JSON.stringify(this.choicesObj));
        // this.modifiersPresent = true;
      }
      else{
        this.modifiersPresent = false
      }
      
      console.log("modifiers "+JSON.stringify(this.choicesObj));
      // console.log("modifiers "+JSON.stringify(this.modifiersObj.name));
      
 
    });

  }

}
