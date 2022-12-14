import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Affiliate } from 'src/app/models/Affiliate';


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

  postAffiliate(affiliate: Affiliate) {

    //return this.http.post(`${this.url}/add`,JSON.stringify(affiliate));
    return this.http.post<Affiliate>(this.url + '/add' + '?id=' + affiliate.id + '&name=' + affiliate.name + '&age=' + affiliate.age + '&mail=' + affiliate.mail, JSON.stringify(null));
  }

  deleteAffiliate(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }


  putAffiliate(affiliate: any) {
    return this.http.put(`${this.url}/update` + '?id=' + affiliate.id + '&name=' + affiliate.name + '&age=' + affiliate.age + '&mail=' + affiliate.mail, JSON.stringify(null));
  }

}
