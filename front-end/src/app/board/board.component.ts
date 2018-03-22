import { ElementRef, NgZone, OnInit, ViewChild, Component} from '@angular/core';
import {CleanerService} from '../services/cleaner.service';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import {OrderService} from '../services/order.service';
import {Router} from '@angular/router';
import { RootData } from '@angular/core/src/view';
import { Route } from '@angular/router/src/config';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  lng;
  lat;
  public searchControl: FormControl;
  public zoom: number;
  newOrder = {address: '', rooms: 0, services: '', hour: 0, date: '', name: ''};
  services = {
    cleaning: false,
    ironing: false,
    cooking: false,
    pets: false
  };
  @ViewChild('search')
    public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.zoom = 4;
    this.lat = 19.3977883;
    this.lng = -99.173614;
    this.searchControl = new FormControl();

  //set current position
    this.setCurrentPosition();
  //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
    autocomplete.addListener('place_changed', () => {
    this.ngZone.run(() => {
    //get the place result
      let place: google.maps.places.PlaceResult = autocomplete.getPlace();
      this.newOrder['address'] = place.formatted_address;
    //verify result
     if (place.geometry === undefined || place.geometry === null) {
     return;
          }

    //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 18;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  saveOrder(form) {
   console.log(this.newOrder);
    this.orderService.saveOrder(this.newOrder)
    .subscribe(order => {
      console.log(order);
      this.router.navigate(['cleaners', order._id]);
    });
  }

}



