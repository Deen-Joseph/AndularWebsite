  import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

  import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
  import { MessengerService } from 'src/app/services/messenger.service'

  @Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
  })

  export class CartComponent implements OnInit {
   
    cartItems:any []=[
      // {id:1, productId:1, productName:'Test1', qty:2, price: 1005 },
      // {id:2, productId:3, productName:'Test2', qty:1, price: 2000 },
      // {id:3, productId:2, productName:'Test 3', qty:4, price: 1300 },
      // {id:4, productId:4, productName:'Test 4' ,qty:3, price: 1020 }
      
    ];

    cartTotal=0 
    

    constructor(private msg: MessengerService, private cartService:CartService ) { }

    ngOnInit(){ 
      this.handleSubscription();  
      this.loadCartItems();

      
    }


    
    handleSubscription(){
      this.msg.getMsg().subscribe(( product:any) => {
        this.loadCartItems();  
              
       })


    }

    loadCartItems(){
      this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
       this.cartItems=items;
       this.calcCartTotal();

      })

    }


  calcCartTotal() {
    this.cartTotal=0
    this.cartItems.forEach(item=>{
      this.cartTotal +=(item.qty * item.price)
    })

  }


  }
