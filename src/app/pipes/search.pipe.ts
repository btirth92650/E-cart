import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Products: any[], searchValue: string): any {

    if(!Products || !searchValue.trim().length){
      return Products;
    } 
    else{
      return Products.filter(product=>
        product.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
        product.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
        product.category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        ) 
      }

  }

}
