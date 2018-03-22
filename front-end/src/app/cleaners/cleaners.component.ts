import { Component, OnInit } from '@angular/core';
import {CleanerService} from '../services/cleaner.service';
import { OrderService} from '../services/order.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-cleaners',
  templateUrl: './cleaners.component.html',
  styleUrls: ['./cleaners.component.css']
})
export class CleanersComponent implements OnInit {

  constructor(
    private cleanerService: CleanerService,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) { }
  cleaners: Array<Object>;
  order = {address: '', rooms: 0, services: '', hour: 0, date: '', price: '', cleaner: '', name: ''};
  orderId;
  ngOnInit() {
    //busco esclavos
    this.cleanerService.fetchCleaners()
    .subscribe(array => {
      this.cleaners = array;
      this.order = JSON.parse(localStorage.getItem('order'));
      console.log(this.cleaners);
    });
     
    //traigo la orden recien creada (tengo el id)
    this.route.params.subscribe(params => this.orderId = params['id']);
    this.orderService.fetchService(this.orderId)
    .subscribe(order => {
      //console.log(order);
      this.order = order;
      console.log('Orden', this.order);
    });


  }
//  redirectPayment(){

//  }
  addCleanerToOrder(cleaners) {
    this.order['cleaner'] = cleaners._id;
    this.orderService.updateOrder(this.order)
    .subscribe(order => {
      this.order = order;
      console.log(this.order);
      this.router.navigate(['payment', order._id]);
    });

  }
  }




