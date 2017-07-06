import { TrackMyOrderPage } from './../track-my-order/track-my-order';
import { PaymentPage } from './../payment/payment';
import { OrderOnlinePage } from './../order-online/order-online';
import { SelectAreaPage } from './../select-area/select-area';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  

  searchByAreaPage = SelectAreaPage;
  pay = TrackMyOrderPage;




  constructor(public navCtrl: NavController,
              private geolocation: Geolocation,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {}




  getUserLocation(){

   let userLatitude;
   let  userLongitude;

   let loading = this.loadingCtrl.create({
      content: 'Fetching your location...'
    });

    loading.present();

      this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      
      userLatitude = resp.coords.latitude;
      userLongitude = resp.coords.longitude;


      this.navCtrl.push(OrderOnlinePage, {
        'lat': resp.coords.latitude,
        'long': resp.coords.longitude
      })

      loading.dismiss();

      
      }).catch((error) => {
        let alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Location access required to proceed further!',
          buttons: ['OK']
        });
        alert.present();
        loading.dismiss();
      });

    
  }

  ngOnInit(){

    
  }
}
