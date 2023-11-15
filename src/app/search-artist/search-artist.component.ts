import { Component } from '@angular/core';
import {SpotifyService} from "../spotify.service";
@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrl: './search-artist.component.scss'
})
export class SearchArtistComponent {

  recive_data: any = localStorage.getItem('artist');
  data: any = this.recive_data ? JSON.parse(this.recive_data) : null;
  artists_id:any;
  constructor(private spotifyService: SpotifyService) {
  }
  getToken() {
    this.spotifyService.getToken().subscribe(response => {
      localStorage.setItem('token', response.body["access_token"]);});

  }
  getArtist(event: any){
    this.spotifyService.getArtistId(event.target.value).subscribe((response) => {
      this.artists_id = response.artists.items[0].id;
        this.spotifyService.getArtist(this.artists_id).subscribe((response) => {
          this.data = response;
          this.spotifyService.getArtistTopTracks(this.artists_id).subscribe((response) => {
            this.data['top_tracks'] = response.tracks;
            localStorage.setItem('artist', JSON.stringify(this.data));
          });
        });
    });

  }
  ngOnInit() {
    this.getToken();
  }
}
