import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItemNumber: any;
  searchValue: any
  constructor(private cartApi: CartapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })
  }
  search(event: any) {
    this.searchValue = (event.target as HTMLInputElement).value;
    console.log(this.searchValue);
    this.cartApi.search.next(this.searchValue)
  }

}
