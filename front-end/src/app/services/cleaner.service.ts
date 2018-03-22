import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CleanerService {

  constructor(
    private http: Http
  ) { }

  handleError(e) {
    return Observable.throw(e);
  }


fetchCleaners(): Observable<any> {
 return this.http.get('http://localhost:3000/api/cleaners')
  .map((res: Response) => res.json())
  .map(cleaner => cleaner)
  .catch(e => {
    console.log(e);
    return Observable.throw(e);
  });

}
addCleaner(user) {
  return this.http.post(`http://localhost:3000/api/cleaners`, user, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
}

}

