import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private httpClient:HttpClient,private http: Http) { }
  
  saveUser(user) {
    return this.http.post('http://localhost:8090/api/SaveUser/', user)
    .map((response: Response) => response.json());
}
GetUser() {
  return this.http.get('http://localhost:8090/api/getUser/')
  .map((response: Response) => response.json());
}
  getNiftydata() : any{
    return this.httpClient.get('/assets/NSE(Nifty).json',{responseType: 'json'});
  }
  getBSEdata() : any{
    return this.httpClient.get('/assets/BSE(Sensex).json',{responseType: 'json'});
  }
  getCipladata() : any{
    return this.httpClient.get('/assets/CIPLA.NS.json',{responseType: 'json'});
  }
  getEichermotdata() : any{
    return this.httpClient.get('/assets/EICHERMOT.NS.json',{responseType: 'json'});
  }
  getReliancedata() : any{
    return this.httpClient.get('/assets/RELIANCE.NS.json',{responseType: 'json'});
  }
  getTataSteeldata() : any{
    return this.httpClient.get('/assets/TATASTEEL.NS.json',{responseType: 'json'});
  }
  getASHOKLEY() : any{
    return this.httpClient.get('/assets/ASHOKLEY.NS.json',{responseType: 'json'});
  }
  
}
