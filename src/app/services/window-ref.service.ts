import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../helper';



function _window() :any{
  return window
}


@Injectable({
  providedIn: 'root'
})
export class WindowRefService {

  constructor(private http:HttpClient) { }  


get nativeWindow() : any{
  return _window();
}

    //generate order
    public generateOrder(payment:any){
      return this.http.post(`${baseUrl}`,payment);
  }


}
