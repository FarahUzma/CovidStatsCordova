import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://covid-193.p.rapidapi.com/statistics/';
  indiaApi:string='https://api.covid19india.org/data.json';
  key = "cr5B3llEK4msh4givsGN9NMjxkQ7p1f80Wkjsne8E8h2qGa6CG"

  constructor(private httpClient: HttpClient,private http: Http) {}
  
  getItems() : Observable<any>{
    let headers=new HttpHeaders();
    headers.set('x-rapidapi-host','covid-193.p.rapidapi.com');
    headers.set('x-rapidapi-key','cr5B3llEK4msh4givsGN9NMjxkQ7p1f80Wkjsne8E8h2qGa6CG');
    //return this.httpClient.get(this.apiURL,{ headers: headers }).pipe(map(data => data));
    return this.httpClient.get(this.indiaApi).pipe(map(data => data));



    


    
  }
}