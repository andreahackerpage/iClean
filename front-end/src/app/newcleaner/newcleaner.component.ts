import { Component, OnInit } from '@angular/core';
import {CleanerService} from '../services/cleaner.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newcleaner',
  templateUrl: './newcleaner.component.html',
  styleUrls: ['./newcleaner.component.css']
})
export class NewcleanerComponent implements OnInit {
newCleaner = {
  name: '',
  lastname: '',
  password: '',
  email: ''
};

  constructor( private cleanerService: CleanerService, private router: Router) { }

  saveCleaner() {
    this.cleanerService.addCleaner(this.newCleaner)
    .subscribe(cleaner => {
      this.router.navigate(['cleaners']);
    });
  }
  ngOnInit() {

  }

}
