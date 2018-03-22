import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class OrderService {

  constructor(
    private http: Http
  ) { }

  URL = 'http://localhost:3000/api/orders';

  saveOrder(order) {
    return this.http.post('http://localhost:3000/api/orders', order)
    .map(res => res.json())
    .catch(e => Observable.throw(e));
  }
fetchService(id) {
  return this.http.get(`http://localhost:3000/api/orders/${id}`)
    .map(res => res.json())
    .catch(e => Observable.throw(e));
}

updateOrder(updatedOrder){
  return this.http.patch(`http://localhost:3000/api/orders/${updatedOrder._id}`, updatedOrder)
  .map(res => res.json())
  .catch(e => Observable.throw(e));
}


}
