import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {

  cartDataList:any =[];
  productList= new BehaviorSubject<any>([ ]) ;
  search=new BehaviorSubject<string>("")
  // constructor(private http:HttpClient) { }  

  //get product data
  getProductData(){
    return this.productList.asObservable();
  }
  //Set product data
  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product);
  }
  //Add to cart Details
  addToCart(product:any){
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList)
  }
  //Get total amount 
  getTotalAmount(){
    let grandTotal=0;
    this.cartDataList.map((a:any)=>{
    grandTotal += a.total;
    })
    return grandTotal;  
  }
  // Remove cart data one by one 
  removeCartData(product:any){
    this.cartDataList.map((a:any,index:any)=>{
    if(product.id === a.id){
      this.cartDataList.splice(index,1)
    }
    })
    this.productList.next(this.cartDataList)
  }
  //remove all cart data 
removeAllCart(){
  this.cartDataList =[];
  this.productList.next(this.cartDataList)
}
}
