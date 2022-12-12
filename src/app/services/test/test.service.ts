import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from 'src/app/models/Test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
url =  'http://localhost:8080/test';
  constructor(private http:HttpClient)
   { }

   getList() {
    return this.http.get(`${this.url +'s'}`);
  }

  getById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  postTest(test:Test) {
    console.log('Estoy en el servicio y la data es: ' + JSON.stringify(test))
    console.log('la url ' + this.url + '/add', JSON.stringify(test))
    //return this.http.post(`${this.url}/add`,JSON.stringify(test));
    return this.http.post<Test>(this.url + '/add' + '?id=' + test.id + '&name=' + test.name + '&description=' + test.description, JSON.stringify(null));
  }

  deleteTest(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }


  putTest(test: any) {
    return this.http.put(`${this.url}/update` + '?id=' + test.id + '&name=' + test.name + '&description='+ test.description, JSON.stringify(null));
  }



  }
