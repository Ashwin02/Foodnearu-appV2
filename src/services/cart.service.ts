import { DataService } from './data.service';
import {Injectable} from '@angular/core';
import _ from 'lodash';


@Injectable()
export class CartService{

    constructor(private dataService: DataService){}

    // constructor(private dataService: DataService){}

    private items = [];

    addItem(itemDetails){
        // itemDetails["quantity"] = 1;
        // this.items.push(itemDetails);
        // console.log("Items from service "+JSON.stringify(itemDetails));
        this.items = itemDetails;
    }

    loadItems(){
        return this.items;
    }

    removeItem(resId, index)
    {   
        
        this.dataService.removeItemFromCart(resId, index).subscribe((res) => {
            this.items = res
            this.updateCartItems(this.items);
        });
    }


    increaseQuantity(resId, index)
    {
        this.dataService.increaseQuantity(resId, index).subscribe((res) => {
            this.items = res
        });
    }

    decreaseQuantity(resId, index)
    {
        this.dataService.decreaseQuantity(resId, index).subscribe((res) => {
            this.items = res
        });
    }

    updateCartItems(item){
       
        this.items = item;
    }
}