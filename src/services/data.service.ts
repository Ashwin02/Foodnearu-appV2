import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';


const ROOT_URL = 'https://foodnearu.com/api';

const key = '6r8pgaueadk1kb4sti4f3igvi0';

@Injectable()
export class DataService {


    constructor(private http: Http) { }


    /************************************** Get Request Section ***************************************************/

    getCities(){
        return this.http.get(`${ ROOT_URL }/get_cities`).map((res) => res.json());
    }

    getResNearMe(zip){
        return this.http.get(`${ROOT_URL}/near/${zip}`).map((res) => res.json());
    }

    getResDetails(id){
        return this.http.get(`${ROOT_URL}/check_version/${id}/0`).map((res) => res.json());
    }

    getDishDetails(dishId){
        return this.http.get(`${ROOT_URL}/GetItemDetails/${dishId}`).map((res) => res.json());
    }

    getResByLatLon(lat, long){
        return this.http.get(`${ROOT_URL}/nearby/${lat}/${long}`).map((res) => res.json());
    }

    removeItemFromCart(resId, index)
    {
        return this.http.get(`${ROOT_URL}/remove_cart_item/${resId}/${index}/${key}`).map((res) => res.json());        
    }

    getDeliveryDate(id)
    {
        return this.http.get(`${ROOT_URL}/get_pre_order_days/${id}/Delivery`).map((res) => res.json());  
    }

    getDeliveryDatePickup(id)
    {
        return this.http.get(`${ROOT_URL}/get_pre_order_days/${id}/Pickup`).map((res) => res.json());  
    }

    getTimeDetails(date, id, status)
    {
        return this.http.get(`${ROOT_URL}/get_pre_order_time/${date}/${id}/${status}`).map((res) => res.json());  
    }


    getNearbyHotels(id)
    {
        return this.http.get(`${ROOT_URL}/get_nearby_hotels/${id}`).map((res) => res.json());  
    }

    increaseQuantity(resId, index)
    {
        return this.http.get(`${ROOT_URL}/increase_quant/${resId}/${index}/${key}`).map((res) => res.json());
    }

    decreaseQuantity(resId, index)
    {
        return this.http.get(`${ROOT_URL}/decrease_quant/${resId}/${index}/${key}`).map((res) => res.json());
    }
    


    /************************************** Get Request Section End ***************************************************/

    /************************************** Post Request Section ***************************************************/
    
    addItemToCart(dishId,resId,payload){

        return this.http.post(ROOT_URL+'/addtocart/'+resId+'/'+dishId+'/'+key, payload).map((res) => res.json());
    }


    postCheckoutPayment(value)
    {
         return this.http.post(`${ROOT_URL}/checkout_payment/${key}`, value).map((res) => res.json());
    }


    /************************************** Post Request Section End ***************************************************/
}