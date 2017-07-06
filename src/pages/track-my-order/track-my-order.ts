import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import  ProgressBar  from 'progressbar.js';

/**
 * Generated class for the TrackMyOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-track-my-order',
  templateUrl: 'track-my-order.html',
})
export class TrackMyOrderPage {
  myVar: number;
  bar: any;
  num=0.2;
  driverDetails:boolean;
  orderSatus="Order Confirmed";

  @ViewChild('target') target;
  @ViewChild('target2') target2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
  }

  doRefresh(refresher)
  {
     console.log('Begin async operation', refresher);

      setTimeout(() => {
        console.log('Async operation has ended')
        this.driverDetails = true;
        this.num = this.num + 0.2; 
        console.log(this.num);
        this.bar.animate(this.num);  // Number from 0.0 to 1.0

        refresher.complete();
      }, 2000);
    }

    // drawLine()
    // {
    //     this.driverDetails = true;
    //     this.num = this.num + 0.2; 

    //     if(this.num > 1.0)
    //     {
    //        clearInterval(this.myVar);
    //     }
    //     else{
    //       console.log(this.num);
    //       this.orderSatus = "Order Accepted";
    //       this.bar.animate(this.num);  // Number from 0.0 to 1.0
    //     }
       

    // }


  ionViewDidLoad() {

        var elem = document.getElementById("bar");   
        this.bar = new ProgressBar.Line(elem, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        from: {color: '#FFEA82'},
        to: {color: '#20b2aa'},
        step: (state, bar) => {
          bar.path.setAttribute('stroke', state.color);
        }
      });

      this.bar.animate(0.2);
          
      // this.myVar = setInterval(() => { this.drawLine() }, 5000);
   
  }

  

}
