import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../components/modals/category';
import { ListResponseModal } from '../components/modals/listResponseModal';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl: string = 'https://localhost:44340/api/';
  apiUrl2: string = 'http://localhost:5000/api/categories/getall';
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ListResponseModal<Category>> {
    let newApiUrl=this.apiUrl+"categories/getall"
    return this.httpClient.get<ListResponseModal<Category>>(newApiUrl);
  }
/*   getCategories(): Observable<any>  {
    let newApiUrl=this.apiUrl+"categories/getall"
    return this.httpClient.get(newApiUrl);
  } */

}
