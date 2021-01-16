import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDv64dJZBvpDRXxP5u0Dy-aKnfbo06i-fPwGqodM40uQA0kcPoo1C8wLfqX0Ne4KWO4_dz1JD3oA5VP-ZY'
    });
    return this.http.get(url, {headers});
  }


  getNewReleases(){
    return this.getQuery('browse/new-releases' ).pipe(
      map( data => data['albums'].items )
    )

  }


  getArtista(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist`).pipe(
      map( data => data['artists'].items ))
  }


}
