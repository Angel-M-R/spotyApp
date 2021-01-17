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
      'Authorization': 'Bearer BQDseYzda9g6-Mh-bVgdkFhbpE2KFFL0QXcRMJ6P7iWmnI7a3xuHgCsvuBKUVqLJdQJ4nJIwX6n9igmdcss'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases' ).pipe(
      map( data => data['albums'].items )
    )

  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${ termino }&type=artist`).pipe(
      map( data => data['artists'].items ))
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`)
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map( (data:any) => data.tracks ))
  }
}
