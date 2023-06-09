import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModal } from '../components/modals/listResponseModal';
import { Product } from '../components/modals/product';
import { ResponseModal } from '../components/modals/responseModal';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://localhost:44340/api/';
  apiUrl2: string = 'http://localhost:5000/api/';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModal<Product>> {
    let newApiUrl= this.apiUrl+"products/getall"
    return this.httpClient.get<ListResponseModal<Product>>(newApiUrl);
  }
  getProductsByCategory(categoryId: number): Observable<ListResponseModal<Product>> {
    let newApiUrl= this.apiUrl+"products/getbycategoryid?categoryid="+categoryId
    return this.httpClient.get<ListResponseModal<Product>>(newApiUrl);
  }
  add(product: Product):Observable<ResponseModal> {
    return this.httpClient.post<ResponseModal>(this.apiUrl+"products/add",product)
  }
/*   getProducts(): Observable<any> {
    let newApiUrl= this.apiUrl+"products/getall"
    return this.httpClient.get(newApiUrl);
  }
  getProductsByCategory(categoryId: number): Observable<any> {
    let newApiUrl= this.apiUrl+"products/getbycategoryid?categoryid="+categoryId
    return this.httpClient.get(newApiUrl);
  } */


}
