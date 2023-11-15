import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private tokenUrl = 'https://accounts.spotify.com/api/token';

  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', "0d557bf5d183403c9cbacf667ca02834")
      .set('client_secret', "b5a6941dbeb04d488eda14ba1fe58dbb");
    return this.http.post(this.tokenUrl, body.toString(), { headers, observe: 'response' });
  }

  getMusic(query: HTMLInputElement): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get('https://api.spotify.com/v1/search?q='+query+'&type=track&limit=9', { headers });
  }
  getArtist(artist_id: HTMLInputElement): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get('https://api.spotify.com/v1/artists/' + artist_id, {headers});
  }
  getArtistId(query: HTMLInputElement): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get('https://api.spotify.com/v1/search?q='+query+'&type=artist&limit=1', { headers });
  }
  getArtistTopTracks(artist_id: HTMLInputElement): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get('https://api.spotify.com/v1/artists/' + artist_id + '/top-tracks?market=PL', {headers});
  }
}
