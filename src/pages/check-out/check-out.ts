import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html',
})
export class CheckOutPage implements OnInit{
  hotelId: any;
  status: any;
  tax: any;
  subtotal: any;
  resId: any;
  resName;
  pre_order_days = [];
  pre_order_times = [];
  orderDay;
  deliverFlag: boolean;
  stayingInHotel;
  nearByHotels = [];
  nearByHotelAddress;
  cartPrice;
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dataService: DataService) {

                  this.deliverFlag = this.navParams.get('deliveryFlag');
                  this.resName = this.navParams.get('resName');
                  this.resId = this.navParams.get('resId');
                  this.cartPrice = this.navParams.get('cost');
                  this.subtotal = this.navParams.get('subtotal');
                  this.tax = this.navParams.get('tax');
                 console.log("Del flag "+ this.deliverFlag);
                 console.log("Cart price"+ this.cartPrice);
              }

  
  onSelectDate(date)
  {
    console.log("The date is "+ JSON.stringify(this.orderDay));
  }

  checkDelivery(id)
  {
    if(id==2)
    {
          this.deliverFlag = true;
          this.dataService.getDeliveryDate(this.resId).subscribe((res) => {
          this.pre_order_days = _.values(res.options)
        });
    }
    else if(id==1){
    
          this.deliverFlag = false;
          this.dataService.getDeliveryDatePickup(this.resId).subscribe((res) => {
          this.pre_order_days = _.values(res.options)
        });
    }
  }

  onHotelSelected(value)
  {

    let currentHotel = this.nearByHotels.filter((hotel) => {
       if(hotel.hotels.id == value)
       {
         return hotel.hotels
       }
    });

    let add = _.get(currentHotel, '0.hotels.address');
    let city = _.get(currentHotel, '0.hotels.city');
    let postalcode = _.get(currentHotel, '0.hotels.postalCode');
    let state = _.get(currentHotel, '0.hotels.state');

    this.nearByHotelAddress = add+','+city+','+postalcode+','+state;
  }

  onSubmit(value)
  {
  
    if(value.in_hotel == true)
    {
      value.in_hotel = "on"
    }

    value.delivery = this.status;
    value.total = this.cartPrice;
    value = _.omit(value, ['hotelName']);

    console.log("form is "+JSON.stringify(value));
    this.dataService.postCheckoutPayment(value).subscribe();

    

  }

  onCheck(event)
  {
     if(this.orderDay != undefined)
     {
       this.status;
       if(this.deliverFlag == true)
       {
         this.status = 1;
       }
       else{
         this.status = 0;
       }
       this.dataService.getTimeDetails(this.orderDay, this.resId, status).subscribe((res) => {
          this.pre_order_times = res
        });
     }
  }

  
  ngOnInit()
  {
    if(this.deliverFlag == true)
      {
         this.dataService.getDeliveryDate(this.resId).subscribe((res) => {
          this.pre_order_days = _.values(res.options)
          console.log("Pre days "+ JSON.stringify(this.pre_order_days));
        });
      }       
    else
    {
       this.dataService.getDeliveryDatePickup(this.resId).subscribe((res) => {
          this.pre_order_days = _.values(res.options)
        });
    }
    
     
    this.dataService.getNearbyHotels(this.resId).subscribe((res) =>{
      this.nearByHotels = res
    });

  }

}
