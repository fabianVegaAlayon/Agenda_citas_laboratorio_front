import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffiliateService {

  url = 'http://localhost:8080/affiliates';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(`${this.url}`);
  }

  getById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  postAffiliate(affiliate: any) {
    return this.http.post(`${this.url}/add`, JSON.stringify(affiliate));
  }

  deleteAffiliate(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }


  putAffiliate(affiliate: any) {
    return this.http.put(`${this.url}/update`, JSON.stringify(affiliate));
  }

}
