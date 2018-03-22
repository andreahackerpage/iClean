import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
