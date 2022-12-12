import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appoinment } from 'src/app/models/Appoinment';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  url = 'http://localhost:8080/appoinment'
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(`${this.url}`);
  }

  getById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  postAppoinment(id:number, dateAppoinment:string, hourAppoinment:string, idTest:number, idAffiliate:number) {

    return this.http.post<Appoinment>(this.url + '/add' + '?id=' + id + '&date=' + dateAppoinment + '&hour=' + hourAppoinment + '&id_test=' + idTest + '&id_affiliate=' + idAffiliate, JSON.stringify(null));
  }

  deleteAppoinment(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }


  putAppoinment(id:number, dateAppoinment:string, hourAppoinment:string, idTest:number, idAffiliate:number) {
    return this.http.put(`${this.url}/update` + '?id=' + id + '&date=' + dateAppoinment + '&hour=' + hourAppoinment + '&id_test=' + idTest+ '&id_affiliate=' + idAffiliate, JSON.stringify(null));
  }


}
