import { Location } from './location';
import {Injectable} from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { GoogleMapsDTO } from './googleMapsDTO';

@Injectable()
export class HomeService {
    insertUrl = 'http://localhost:8990/api/insertLocation';  // URL to web api
    getUrl = "http://localhost:8990/api/testLocation";

    constructor(
        private http: HttpClient) {

    }
    
    insertLocation(lat: string, lon: string){
        let params = new HttpParams().set("lat",lat).set("lon", lon)
        return this.http.post(this.insertUrl, params);
    }

    getLocations(lat: string, lon : string): Observable<GoogleMapsDTO[]>{
          let params = new HttpParams().set("lat",lat).set("lon", lon)

        return this.http.get<GoogleMapsDTO[]>(this.getUrl, {params: params});
        
    }


}
