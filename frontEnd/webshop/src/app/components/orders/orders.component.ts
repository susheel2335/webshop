import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  previousOrders = [];

  constructor() { }

  ngOnInit() {
  }

}
