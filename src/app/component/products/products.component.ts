import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

  
export class ProductsComponent implements OnInit {
  productList:any;
  searchValue:string="";
  filtercategory:any;
  constructor(private api:ApiService,private cartApi:CartapiService) { }

  ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{
      this.productList=res;
      this.filtercategory=res;
      this.productList.forEach((a:any)=>{
         if(a.category ==="men's clothing" || a.category ==="women's clothing"){
           a.category ="fashion"
        }
        Object.assign(a,{quantity:1, total:a.price})
      })
    })

    this.cartApi.search.subscribe((val:any)=>{
      this.searchValue = val;
    })
  }
  addToCart(item:any){
    this.cartApi.addToCart(item); 
  }
  filter(category:string){
    this.filtercategory=this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
