import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  service;
  serviceId;
  order;
  constructor( private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
 this.route.params 
 .subscribe(params => {
   this.orderService.fetchService(params['id'])
   .subscribe(service => this.service = service);
 }) 
  }
}
