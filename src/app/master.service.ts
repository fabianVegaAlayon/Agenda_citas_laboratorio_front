import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Master } from '../app/models/Master';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  master: Master
  constructor(private http: HttpClient) { }
 private Url = 'http://localhost:8080/master'

  getMasterById(idAffiliate:number) {
    return this.http.get(`${this.Url}/id/${idAffiliate}`);
  }

  getMasterByDate(dateAppoinment:string) {
    return this.http.get(`${this.Url}/date/${dateAppoinment}`);
  }



}
