import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';
import { WindowRefService } from 'src/app/services/window-ref.service';


// declare var Razorpay: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartApi: CartapiService, private windows: WindowRefService) { }

  // payment: any = {
  //   allProducts: '',
  // }

  // options = {
  //   "key": "rzp_test_kcY7ymrYYMfmyA", // Enter the Key ID generated from the Dashboard
  //   "amount": this.payment.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //   "currency": "INR",
  //   "name": "Acme Corp",
  //   "description": "Test Transaction",
  //   "image": '',
  //   "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //   "handler": function (response:any){
  //       alert(response.razorpay_payment_id);
  //       alert(response.razorpay_order_id);
  //       alert(response.razorpay_signature);
  //       console.log(response);
  //   },
  //   "prefill": {
  //       "name": "Tirth Bhalani N",
  //       "email": "bhalanitirth999@gmail.com",
  //       "contact": "9510544008"
  //   },
  //   "notes": {
  //       "address": "Razorpay Corporate Office"
  //   },
  //   "theme": {
  //       "color": "#3399cc"
  //   }
  // };

  // pay(){
  // }

  // paymentStart() {
  //   this.rzp1 = new this.windows.nativeWindow.Razorpay(this.options)
  //   this.rzp1.open();

  //   console.log("payment started..")
  //   console.log(this.allProducts);
  //   // //  if(amount == "" || amount == null){
  //   // //    alert("amount is required !! ");
  //   // //    return;
  //   //  }
  // }



  products: any = []
  allProducts: any = 0

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.products = res;
      this.allProducts = this.cartApi.getTotalAmount();   
    })
  }
  removeProduct(item: any) {
    this.cartApi.removeCartData(item);
  }
  removeAllProduct() {
    this.cartApi.removeAllCart();
  }


  // paymentStart() {
  //   {
  //   }
  //   this.windows.generateOrder(this.payment).subscribe(
  //     (data:any)=>{
  //       //success
  //       console.log("data sent....");

  //       console.log(data);
  //       if(data.status == 'created'){
  //         //then we call form of razorpay
  //         let options = {
  //           key:'rzp_test_kcY7ymrYYMfmyA',
  //           amount:data.amount,
  //           currency:'INR',
  //           name: 'Donation',
  //           description: 'Donation Payment',
  //           image:'../../../../assets/credit.png',
  //           order_id:data.id,
  //           handler:function(response:any){
  //             console.log(response.razorpay_payment_id);
  //             console.log(response.razorpay_order_id);
  //             console.log(response.razorpay_signature);
  //             console.log(response);

  //             // When status created updatingServer
  //             // updatingServer(response,'Paid');

  //             alert(" congrets payment successfully !!");
  //           },
    
  //           prefill: {
  //             name: '',
  //             email: '',
  //             contact: '',
  //         },
  //         notes:{
  //             address:'welcome this is payment integretion demo',
  //         },

  //         theme:{
  //           color:'#3399cc',
  //         },

  //         };

  //         //object of razorpay_payment_id
  //         let rzp = new Razorpay(options);

  //         //when payment failed
  //         rzp.on('payment.failed', function (response:any){
  //           console.log(response.error.code);
  //           console.log(response.error.description);
  //           console.log(response.error.source);
  //           console.log(response.error.step);
  //           console.log(response.error.reason);
  //           console.log(response.error.metadata.order_id);
  //           console.log(response.error.metadata.payment_id);
  //           alert("payment failed");
  //         });
  //         rzp.open();
  //       }
  //     },
  //     (error:any)=>{
  //       // Error
  //       console.log(error);
  //     });
  // }

}
