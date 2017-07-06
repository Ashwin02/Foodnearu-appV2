import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  cardFlag: boolean;
  paymentMethod;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  payment()
  {
    if(this.paymentMethod == "card")
    {
      this.cardFlag = true;
    }
    else
    {
      this.cardFlag = false;
    }
  }

}
