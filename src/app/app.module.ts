import { TrackMyOrderPage } from './../pages/track-my-order/track-my-order';
import { PaymentPage } from './../pages/payment/payment';

import { CartService } from './../services/cart.service';
import { DishDetailsPage } from './../pages/dish-details/dish-details';
import { MenuDetailsPage } from './../pages/menu-details/menu-details';
import { ResLandingPage } from './../pages/res-landing/res-landing';
import { TruncatePipe } from './../filters/truncate';
import { FilterByNamePipe } from './../filters/filterByName';
import { DataService } from './../services/data.service';
import { OrderOnlinePage } from './../pages/order-online/order-online';
import { SelectAreaPage } from './../pages/select-area/select-area';
import { UserAccountPage } from './../pages/user-account/user-account';
import { ShoppingCartPage } from './../pages/shopping-cart/shopping-cart';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'; 

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CheckOutPage } from './../pages/check-out/check-out';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';


import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShoppingCartPage,
    UserAccountPage,
    SelectAreaPage,
    OrderOnlinePage,
    FilterByNamePipe,
    TruncatePipe,
    ResLandingPage,
    MenuDetailsPage,
    DishDetailsPage,
    CheckOutPage,
    PaymentPage,
    TrackMyOrderPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAnGdlOoIK9UhQzyIoC08kkZdxD0L63yPM'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShoppingCartPage,
    UserAccountPage,
    SelectAreaPage,
    OrderOnlinePage,
    ResLandingPage,
    MenuDetailsPage,
    DishDetailsPage,
    CheckOutPage,
    PaymentPage,
    TrackMyOrderPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    Geolocation,
    CartService,    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
